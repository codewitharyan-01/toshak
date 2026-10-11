"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FieldError,
  FieldLabel,
  Input,
  Select,
  Textarea,
} from "@/components/ui/fields";
import {
  rfqSchema,
  RFQ_PRODUCT_OPTIONS,
  MAX_FILE_MB,
  type RfqInput,
} from "@/lib/rfq-schema";
import { cn } from "@/lib/utils";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; reference: string }
  | { state: "error"; message: string };

export function RfqForm({ defaultProduct }: { defaultProduct?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [fileError, setFileError] = useState<string>();
  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RfqInput>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      product:
        defaultProduct && RFQ_PRODUCT_OPTIONS.includes(
          defaultProduct as (typeof RFQ_PRODUCT_OPTIONS)[number],
        )
          ? defaultProduct
          : "General enquiry",
      quantity: "",
      city: "",
      message: "",
      website: "",
    },
  });

  const onFileChange = () => {
    const file = fileRef.current?.files?.[0];
    if (file && file.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`Attachment must be smaller than ${MAX_FILE_MB} MB.`);
      if (fileRef.current) fileRef.current.value = "";
    } else {
      setFileError(undefined);
    }
  };

  const onSubmit = async (values: RfqInput) => {
    setStatus({ state: "submitting" });
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, String(value ?? ""));
      }
      const file = fileRef.current?.files?.[0];
      if (file) formData.append("attachment", file);

      const response = await fetch("/api/rfq", { method: "POST", body: formData });
      const data = (await response.json()) as {
        ok: boolean;
        reference?: string;
        message?: string;
      };
      if (!response.ok || !data.ok) {
        throw new Error(data.message ?? "Something went wrong. Please try again.");
      }
      setStatus({ state: "success", reference: data.reference ?? "RFQ" });
      reset();
      if (fileRef.current) fileRef.current.value = "";
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };

  if (status.state === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" aria-hidden />
        <h3 className="mt-3 text-lg font-semibold text-navy-950">
          Enquiry received
        </h3>
        <p className="mt-1.5 text-sm text-slate-600">
          Your reference is{" "}
          <span className="font-mono font-semibold text-navy-950">
            {status.reference}
          </span>
          . Our sales team will get back to you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => setStatus({ state: "idle" })}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {status.state === "error" ? (
        <div
          role="alert"
          className="mb-5 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {status.message}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="rfq-name" required>
            Your name
          </FieldLabel>
          <Input
            id="rfq-name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="rfq-company" required>
            Company
          </FieldLabel>
          <Input
            id="rfq-company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            aria-invalid={Boolean(errors.company)}
            {...register("company")}
          />
          <FieldError message={errors.company?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="rfq-email" required>
            Email
          </FieldLabel>
          <Input
            id="rfq-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="rfq-phone" required>
            Phone / WhatsApp
          </FieldLabel>
          <Input
            id="rfq-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 ..."
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="rfq-product" required>
            Product of interest
          </FieldLabel>
          <Select
            id="rfq-product"
            aria-invalid={Boolean(errors.product)}
            {...register("product")}
          >
            {RFQ_PRODUCT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <FieldError message={errors.product?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="rfq-city">City</FieldLabel>
          <Input
            id="rfq-city"
            type="text"
            autoComplete="address-level2"
            placeholder="City"
            aria-invalid={Boolean(errors.city)}
            {...register("city")}
          />
          <FieldError message={errors.city?.message} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="rfq-quantity">
            Required capacity / quantity
          </FieldLabel>
          <Input
            id="rfq-quantity"
            type="text"
            placeholder="e.g. 500 kg/hr throughput, 2 machines"
            aria-invalid={Boolean(errors.quantity)}
            {...register("quantity")}
          />
          <FieldError message={errors.quantity?.message} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="rfq-message" required>
            Your requirement
          </FieldLabel>
          <Textarea
            id="rfq-message"
            placeholder="Describe your process, material and what the equipment needs to do…"
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="rfq-file">Attach drawing / requirement file</FieldLabel>
          <Input
            id="rfq-file"
            ref={fileRef}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.webp"
            onChange={onFileChange}
            className={cn("file:mr-3 file:rounded-md file:border-0 file:bg-navy-50 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-navy-900")}
          />
          <FieldError message={fileError} />
          <p className="mt-1.5 text-xs text-slate-400">
            PDF or image, up to {MAX_FILE_MB} MB.
          </p>
        </div>
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="rfq-website">Website</label>
        <input
          id="rfq-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={status.state === "submitting"}
      >
        {status.state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Send Enquiry
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-slate-400">
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}
