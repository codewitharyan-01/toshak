import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Gauge,
  Layers,
  PhoneCall,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { HeroEquipmentStage } from "@/components/hero-equipment-stage";
import { EquipmentSizer } from "@/components/equipment-sizer";
import { HomeProductCatalog } from "@/components/home-product-catalog";
import { InteractiveFeatureCards } from "@/components/interactive-feature-cards";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/reveal";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const sales = site.contacts[0];

  return (
    <>
      {/* 1. Precision Industrial Hero with Parallax-feel Grid & Glow */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        {/* Subtle engineering grid background with ambient gradient */}
        <div className="absolute inset-0 bg-blueprint-dark opacity-60 pointer-events-none" aria-hidden />
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent-600/10 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-8 sm:gap-10 px-4 py-10 sm:py-16 md:py-20 lg:grid-cols-12 lg:items-center lg:px-8">
          {/* Left Column: Mission & Capabilities */}
          <div className="space-y-5 sm:space-y-6 lg:col-span-6">
            <Reveal variant="fade-down" delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono font-medium text-slate-300 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-ping" />
                <span>ISO 9001:2015 REGISTERED &bull; AHMEDABAD, INDIA</span>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Industrial auxiliary systems engineered for{" "}
                <span className="bg-gradient-to-r from-white via-slate-100 to-accent-400 bg-clip-text text-transparent">
                  zero downtime.
                </span>
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                From heavy-duty industrial chillers and dehumidifying hopper dryers
                to gravimetric dosing and mould temperature controllers — Toshak
                manufactures the auxiliary backbone for high-efficiency plastic processing plants.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal variant="fade-up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/contact-us"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-accent-600 text-white hover:bg-accent-700 font-semibold px-6 h-11 text-sm shadow-lg transition-transform active:scale-95"
                  )}
                >
                  Request Plant RFQ
                </Link>
                <Link
                  href="/products"
                  className={cn(
                    buttonVariants({ variant: "outline-light", size: "lg" }),
                    "border-white/20 bg-white/5 text-white hover:bg-white/10 h-11 text-sm transition-transform active:scale-95"
                  )}
                >
                  Catalog Datasheets
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>

            {/* Micro Industrial Telemetry Ticker */}
            <Reveal variant="fade-up" delay={0.5}>
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5 sm:gap-4 sm:pt-6">
                <div>
                  <p className="font-mono text-2xl font-bold text-white sm:text-3xl">
                    14<span className="text-accent-400">+</span>
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 sm:text-[10px]">
                    Standard Lines
                  </p>
                </div>
                <div>
                  <p className="font-mono text-2xl font-bold text-white sm:text-3xl">
                    15<span className="text-accent-400">+</span>
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 sm:text-[10px]">
                    Years Engineered
                  </p>
                </div>
                <div>
                  <p className="font-mono text-2xl font-bold text-tech-green sm:text-3xl">
                    ±0.5°C
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 sm:text-[10px]">
                    PID Tolerance
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Equipment Showcase */}
          <div className="lg:col-span-6">
            <Reveal variant="zoom-in" delay={0.25} duration={0.6}>
              <HeroEquipmentStage />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Interactive Feature & Telemetry Cards */}
      <section aria-label="System Metrics" className="border-b border-navy-200/80 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InteractiveFeatureCards />
        </div>
      </section>

      {/* 3. Interactive Application Line Configurator */}
      <section className="bg-navy-50/50 py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="mb-8 sm:mb-10 text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                [APPLICATION MATCHING]
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl md:text-4xl">
                Configured around your exact plastics process.
              </h2>
              <p className="mx-auto mt-2.5 max-w-2xl text-xs sm:text-sm text-slate-600">
                Select your production environment below to view the dedicated Toshak auxiliary equipment train engineered to optimize cycle time, resin consistency, and uptime.
              </p>
            </div>
          </Reveal>

          <Reveal variant="zoom-in" delay={0.15}>
            <EquipmentSizer />
          </Reveal>
        </div>
      </section>

      {/* 4. Complete Machinery Catalog & Filters */}
      <section className="bg-white py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                  [EQUIPMENT PORTFOLIO]
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
                  Standard & Custom Production Machinery
                </h2>
              </div>
              <p className="max-w-md text-xs text-slate-500 md:text-right">
                All machines fabricated at our Vatva manufacturing facility in Ahmedabad with food-grade SS-304 contact parts and industrial safety interlocks.
              </p>
            </div>
          </Reveal>

          <HomeProductCatalog />
        </div>
      </section>

      {/* 5. Engineering Standards & Quality Assurance */}
      <section className="border-t border-navy-100 bg-[#fafbfc] py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-600">
                [MANUFACTURING SPECIFICATION]
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
                Built to withstand 24/7 continuous industrial duty.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Every Toshak machine is engineered from first principles for heavy industrial shop floors where failure is not an option.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            <Reveal variant="fade-up" delay={0.1}>
              <div className="h-full rounded-xl border border-navy-200/80 bg-white p-6 shadow-xs transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-navy-50 p-2.5 text-navy-950">
                  <Gauge className="h-5 w-5 text-accent-600" />
                </div>
                <h3 className="text-base font-bold text-navy-950">
                  100% Helium Leak & Pressure Tested
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  All refrigeration lines and water cooling heat exchangers undergo rigorous nitrogen pressure holding and electronic leak detection before factory departure.
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-navy-100 pt-3 text-[11px] text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-tech-green" /> High-pressure shell & tube condenser
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-tech-green" /> Anti-freeze & phase reversal safeguards
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <div className="h-full rounded-xl border border-navy-200/80 bg-white p-6 shadow-xs transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-navy-50 p-2.5 text-navy-950">
                  <Layers className="h-5 w-5 text-accent-600" />
                </div>
                <h3 className="text-base font-bold text-navy-950">
                  Stainless Steel SS-304 Contact Parts
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  All material contact zones — dryer hoppers, mixing chambers, vacuum receivers, and water tanks — are mirror-polished stainless steel to prevent polymer contamination.
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-navy-100 pt-3 text-[11px] text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-tech-green" /> Zero corrosion in hygroscopic environments
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-tech-green" /> Quick color changeover cleanability
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <div className="h-full rounded-xl border border-navy-200/80 bg-white p-6 shadow-xs transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-navy-50 p-2.5 text-navy-950">
                  <Cpu className="h-5 w-5 text-accent-600" />
                </div>
                <h3 className="text-base font-bold text-navy-950">
                  Intelligent PID Digital Microcontrollers
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Intuitive digital control panels with auto-tuning PID algorithms ensure temperatures and dosing ratios remain stable within ±0.5°C tolerance under fluctuating ambient loads.
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-navy-100 pt-3 text-[11px] text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-tech-green" /> Diagnostic error codes & audio alarms
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-tech-green" /> Optional RS485 communication link
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. High-Conversion Industrial Plant RFQ Band */}
      <section className="relative overflow-hidden bg-navy-950 py-14 sm:py-20 text-white">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="zoom-in">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10 md:p-12 backdrop-blur-md">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
                <div className="space-y-3.5 lg:col-span-8">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-400">
                    [DIRECT FACTORY PROCUREMENT]
                  </span>
                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                    Equip your processing facility with Toshak Ancillary machinery.
                  </h2>
                  <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
                    Connect directly with our engineering sales desk in Ahmedabad. Receive detailed GA drawings, thermal heat-load calculations, and complete formal quotations within 24 hours.
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-tech-green" /> GST Invoicing & Nationwide Dispatch
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-tech-green" /> 12-Month Industrial Warranty
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-tech-green" /> On-Site Commissioning Assistance
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 lg:col-span-4 lg:items-end">
                  <Link
                    href="/contact-us"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full justify-center bg-accent-600 text-white font-semibold hover:bg-accent-700 h-11 text-xs sm:w-auto"
                    )}
                  >
                    Request Formal Quotation
                  </Link>
                  <a
                    href={`tel:${sales.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-accent-400" />
                    Direct Hotline: {sales.phone}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
