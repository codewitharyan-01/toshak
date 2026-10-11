import { Mail, MapPin, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { RfqForm } from "@/components/rfq-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { getProduct } from "@/data/products";

export const metadata = {
  title: "Contact Engineering & Factory Sales",
  description:
    "Contact Toshak Ancillary, Ahmedabad — request a quotation for chillers, hopper dryers, dosing systems, mixers and process controllers. Sales, technical support and commercial contacts.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  const defaultProduct = product ? getProduct(product)?.name : undefined;

  return (
    <>
      <PageHeader
        title="Contact Engineering & Sales Desk"
        description="Have questions about our auxiliary solutions or need a technical quotation with GA drawings? Reach out — our engineering team in Ahmedabad will configure the exact machine specs for your line."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8">
          {/* Contact details */}
          <Reveal variant="fade-left">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                [FACTORY DIRECT CONTACT]
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
                Connect directly with our works
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Speak directly to the right desk — sales for quotations, technical support for field commissioning, or commercial for dispatch documentation.
              </p>

              <div className="mt-6 space-y-4">
                {site.contacts.map((contact) => (
                  <div
                    key={contact.label}
                    className="rounded-xl border border-navy-200/80 bg-white p-5 shadow-xs transition-all hover:border-navy-300 hover:shadow-md"
                  >
                    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {contact.label}
                    </p>
                    <div className="mt-2 space-y-1.5">
                      <a
                        href={`tel:${contact.phoneRaw}`}
                        className="flex items-center gap-2.5 text-sm font-bold text-navy-950 transition-colors hover:text-accent-600 sm:text-base font-mono"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                        {contact.phone}
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-2.5 break-all text-xs text-slate-600 transition-colors hover:text-accent-600"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0 text-accent-600" aria-hidden />
                        {contact.email}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="rounded-xl border border-navy-200/80 bg-white p-5 shadow-xs">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Works & Manufacturing Facility
                  </p>
                  <address className="mt-2 flex gap-2.5 text-xs not-italic leading-relaxed text-slate-600">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                    <span>
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </span>
                  </address>
                </div>

                <div className="overflow-hidden rounded-xl border border-navy-200/80 shadow-xs">
                  <iframe
                    title="Map showing the location of Toshak Ancillary in Vatva, Ahmedabad"
                    src="https://maps.google.com/maps?q=Raghuveer%20Industrial%20Estate%20Part%203%2C%20SLM%20Mil%20Compound%2C%20Vatva%2C%20Ahmedabad%20382445&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="h-56 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* RFQ form */}
          <Reveal variant="fade-right" delay={0.1}>
            <div className="h-fit rounded-2xl border border-navy-200/90 bg-white p-6 shadow-xl md:p-8">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                  [REQUEST FOR QUOTE]
                </span>
                <span className="rounded bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700">
                  FAST 24H RESPONSE
                </span>
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
                Request Engineering Quotation
              </h2>
              <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
                Share your resin material, capacity throughput, and plant application — our team will calculate the heat load or sizing and prepare formal documentation.
              </p>
              <div className="mt-6 border-t border-navy-100 pt-6">
                <RfqForm defaultProduct={defaultProduct} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
