import Link from "next/link";
import { MessageCircle, PhoneCall, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function CtaBand({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const sales = site.contacts[0];

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-navy-950 py-16 text-white">
      <div className="absolute inset-0 bg-blueprint-dark opacity-40" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-400">
            [DIRECT PLANT INQUIRY]
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact-us"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent-600 text-white font-semibold hover:bg-accent-700 h-11 text-xs"
            )}
          >
            Request Engineering Quote
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline-light", size: "lg" }),
              "border-white/20 bg-white/5 text-white hover:bg-white/10 h-11 text-xs"
            )}
          >
            <MessageCircle className="h-4 w-4 text-tech-green" aria-hidden />
            WhatsApp Sales Desk
          </a>
        </div>
      </div>
    </section>
  );
}
