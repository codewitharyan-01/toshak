"use client";

import { MessageCircle, Phone, FileText } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";

export function FloatingActions() {
  const sales = site.contacts[0];
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Toshak Ancillary, I would like to request an engineering quotation and technical specs for your auxiliary machinery."
  )}`;

  return (
    <aside
      aria-label="Quick contact channels"
      className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6"
    >
      {/* Quick RFQ link */}
      <Link
        href="/contact-us"
        className="group hidden items-center gap-2 rounded-full border border-navy-200/90 bg-white/95 px-3.5 py-2 text-xs font-bold text-navy-950 shadow-md backdrop-blur-md transition-all hover:bg-navy-950 hover:text-white sm:inline-flex"
        title="Request Quote"
      >
        <FileText className="h-3.5 w-3.5 text-accent-600 group-hover:text-accent-400" />
        <span>Request RFQ</span>
      </Link>

      <div className="flex items-center gap-2">
        {/* Direct phone call */}
        <a
          href={`tel:${sales.phoneRaw}`}
          aria-label={`Call sales: ${sales.phone}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-navy-900 text-white shadow-lg transition-transform hover:scale-105 hover:bg-navy-950"
        >
          <Phone className="h-4 w-4" aria-hidden />
        </a>

        {/* WhatsApp chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp inquiry"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-transform hover:scale-105 hover:bg-[#20ba59]"
        >
          <MessageCircle className="h-6 w-6" aria-hidden />
        </a>
      </div>
    </aside>
  );
}
