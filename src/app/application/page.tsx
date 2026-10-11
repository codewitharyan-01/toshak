import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { industries } from "@/data/site";
import { getProduct } from "@/data/products";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Applications",
  description:
    "How Toshak Ancillary equipment serves complete plastic processing plants, blown film & extrusion, injection moulding and compounding & recycling units.",
};

export default function ApplicationPage() {
  return (
    <>
      <PageHeader
        title="Industrial Applications"
        description="Every processing line is different — but the auxiliary equipment around it dictates stability, cycle times, and scrap rates. Here is how our engineering integrates into core plastics sectors."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Application" },
        ]}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-24 lg:px-8">
          {industries.map((industry, i) => (
            <Reveal
              key={industry.slug}
              variant={i % 2 === 0 ? "fade-left" : "fade-right"}
              duration={0.6}
            >
              <div className="grid items-center gap-10 rounded-2xl border border-navy-200/80 bg-white p-6 shadow-xs transition-shadow hover:shadow-xl lg:grid-cols-2 lg:gap-14 lg:p-10">
                <div
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden rounded-xl border border-navy-100 bg-navy-50 shadow-sm group",
                    i % 2 === 1 && "lg:order-2",
                  )}
                >
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-md bg-navy-950/80 px-2.5 py-1 font-mono text-xs font-bold text-accent-400 backdrop-blur-sm">
                    PROCESS #{String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                    [PRODUCTION SECTOR]
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
                    {industry.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {industry.description}
                  </p>

                  <div className="border-t border-navy-100 pt-4">
                    <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Recommended Toshak Equipment Train
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.products.map((slug) => {
                        const product = getProduct(slug);
                        if (!product) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/products/${slug}`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-navy-200 bg-navy-50/70 px-3 py-1.5 text-xs font-semibold text-navy-900 transition-all hover:border-accent-600 hover:bg-white hover:text-accent-600 hover:shadow-xs"
                          >
                            <CheckCircle2 className="h-3 w-3 text-accent-600" />
                            {product.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/contact-us?app=${encodeURIComponent(industry.name)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-600 transition-colors hover:text-accent-700 hover:underline"
                    >
                      Discuss line sizing for {industry.name}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Running a custom composite or compounding line?"
        description="Mixing extrusion with technical moulding, or building a closed-loop recycling setup? Our Ahmedabad engineering team configures exact modular auxiliary combinations."
      />
    </>
  );
}
