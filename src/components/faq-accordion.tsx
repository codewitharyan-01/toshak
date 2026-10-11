import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/products/types";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-navy-100 overflow-hidden rounded-xl border border-navy-100 bg-white">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-navy-950 transition-colors hover:text-navy-700">
            {faq.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-navy-400 transition-transform duration-200 group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="mt-3 pr-8 text-sm leading-relaxed text-slate-600">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
