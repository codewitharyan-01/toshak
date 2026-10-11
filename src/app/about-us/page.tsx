import Image from "next/image";
import { Award, Check, Target, Telescope, ShieldCheck, Factory, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { site, strengths, whatWeDo } from "@/data/site";

export const metadata = {
  title: "About Our Manufacturing Works",
  description:
    "Toshak Ancillary is an Ahmedabad-based manufacturer of advanced auxiliary solutions for the plastics industry — chillers, dryers, dosing systems, mixers and process controllers.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Toshak Ancillary"
        description="Pioneering industrial auxiliary solutions — engineered in the heart of Ahmedabad's manufacturing hub, powering plastics processors across India and international markets."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Story */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <Reveal variant="fade-left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy-200/80 bg-navy-50 shadow-md group">
              <Image
                src="/img/about/facility.jpg"
                alt="Toshak Ancillary manufacturing facility in Ahmedabad"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 rounded-lg bg-navy-950/85 px-3 py-1.5 font-mono text-xs font-bold text-white backdrop-blur-sm">
                Vatva Works &bull; Ahmedabad, Gujarat
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-right" delay={0.15}>
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                [OUR HERITAGE & WORKS]
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-navy-950 md:text-4xl">
                Engineering excellence built for round-the-clock production.
              </h2>
              <div className="space-y-3.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                <p>
                  Based in the heart of Ahmedabad&apos;s industrial hub, Toshak Ancillary specializes in engineering auxiliary systems designed to eliminate process bottlenecks, optimize energy consumption, and guarantee continuous uptime for plastic processors.
                </p>
                <p>
                  For over 15 years, our engineering team has designed, tested, and commissioned chillers, hopper dryers, volumetric and gravimetric dosing units, and mould temperature controllers across India and export markets.
                </p>
                <p>
                  Every machine leaves our Vatva works having undergone 100% helium leak detection, electrical safety insulation verification, and hydraulic pressure testing.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="border-y border-navy-100 bg-navy-50/50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                [FOUNDATIONAL PRINCIPLES]
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-950">
                Our vision & mission
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            <Reveal variant="fade-up" delay={0.05}>
              <div className="h-full rounded-2xl border border-navy-200/80 bg-white p-7 shadow-xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-accent-400">
                  <Telescope className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-950">
                  Our Vision
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  To stand as a globally recognized benchmark for plastic auxiliary engineering — known for rugged durability, thermal efficiency, and lifelong technical partnership.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.15}>
              <div className="h-full rounded-2xl border border-navy-200/80 bg-white p-7 shadow-xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-accent-400">
                  <Target className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-950">
                  Our Mission
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  To supply industrial machinery built with SS-304 contact parts and precision PID microcontrollers that empower processors to run with zero unplanned downtime.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.25}>
              <div className="relative h-full min-h-60 overflow-hidden rounded-2xl border border-navy-200/80 shadow-md group">
                <Image
                  src="/img/about/vision.jpg"
                  alt="Auxiliary equipment manufactured by Toshak Ancillary"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end p-5">
                  <p className="font-mono text-xs font-bold text-white">
                    Precision Craftsmanship Since Day One
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                [EQUIPMENT SUITE]
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-950">
                Auxiliary equipment for every stage of your plant
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                From conveying and drying to precision dosing, mixing, chilling, and mould temperature stabilization.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, i) => (
              <Reveal key={item.name} variant="fade-up" delay={(i % 3) * 0.06}>
                <div className="flex h-full gap-3.5 rounded-xl border border-navy-200/80 bg-white p-5 shadow-xs transition-all hover:border-navy-300 hover:shadow-md">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-sm font-bold text-navy-950">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths checklist */}
      <section className="border-y border-navy-100 bg-[#fafbfc] py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal variant="fade-left">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                [ENGINEERING PROMISE]
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-950 md:text-4xl">
                Six commitments behind every machine we dispatch.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We engineer for factory floor reality — fluctuating cooling water temperatures, dust, vibration, and continuous multi-shift production.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fade-right" delay={0.15}>
            <ul className="space-y-3">
              {strengths.map((strength) => (
                <li
                  key={strength.title}
                  className="flex items-start gap-3 rounded-xl border border-navy-200/80 bg-white p-4 shadow-xs transition-transform hover:-translate-x-1"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-tech-green" aria-hidden />
                  <div>
                    <p className="text-sm font-bold text-navy-950">
                      {strength.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                      {strength.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Certification */}
      <section className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="zoom-in">
            <div className="grid items-center gap-8 rounded-2xl border border-navy-200/80 bg-white p-8 shadow-md md:grid-cols-[auto_1fr] md:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-950 text-accent-400">
                <Award className="h-8 w-8" aria-hidden />
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                  [QUALITY VERIFIED]
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy-950">
                  {site.certification.name} Certified Manufacturing Works
                </h2>
                <p className="mt-2 max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-600">
                  {site.certification.scope}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Schedule a visit to our Ahmedabad manufacturing facility"
        description="Inspect our production processes, see live machinery test runs, or discuss custom machinery requirements with our engineering team."
      />
    </>
  );
}
