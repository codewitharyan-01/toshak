import { NextResponse } from "next/server";
import {
  rfqSchema,
  ALLOWED_FILE_TYPES,
  MAX_FILE_MB,
} from "@/lib/rfq-schema";

export const runtime = "nodejs";

function field(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid form submission." },
      { status: 400 },
    );
  }

  const parsed = rfqSchema.safeParse({
    name: field(form, "name"),
    company: field(form, "company"),
    email: field(form, "email"),
    phone: field(form, "phone"),
    product: field(form, "product"),
    quantity: field(form, "quantity"),
    city: field(form, "city"),
    message: field(form, "message"),
    website: field(form, "website"),
  });

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please correct the highlighted fields and try again.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // Honeypot filled → almost certainly a bot. Return fake success, do nothing.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, reference: "RFQ-OK" });
  }

  // Optional attachment: validate size and type (not persisted).
  const attachment = form.get("attachment");
  if (attachment instanceof File && attachment.size > 0) {
    if (attachment.size > MAX_FILE_MB * 1024 * 1024) {
      return NextResponse.json(
        { ok: false, message: `Attachment exceeds ${MAX_FILE_MB} MB.` },
        { status: 413 },
      );
    }
    if (attachment.type && !ALLOWED_FILE_TYPES.includes(attachment.type)) {
      return NextResponse.json(
        { ok: false, message: "Attachment must be a PDF or image file." },
        { status: 415 },
      );
    }
  }

  // TODO(delivery): wire a transactional email provider (e.g. Resend — see
  // README "Receiving enquiries") so enquiries reach the sales inbox.
  // Until configured, enquiries are logged server-side only.
  const reference = `RFQ-${Date.now().toString(36).toUpperCase()}`;
  console.info(
    `[rfq] ${reference} | ${parsed.data.name} <${parsed.data.email}> | ${parsed.data.phone} | product=${parsed.data.product} | company=${parsed.data.company}`,
  );

  return NextResponse.json({ ok: true, reference });
}
