"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  Layers,
  Recycle,
  Wind,
  ShieldAlert,
} from "lucide-react";
import { products } from "@/data/products";

const applicationProfiles = [
  {
    id: "injection-molding",
    title: "Injection Molding",
    icon: Layers,
    badge: "Cycle Time Optimization",
    description:
      "Precision mould temperature control and high-speed material drying engineered for defect-free surface finish, zero sink marks, and reduced cycle times.",
    recommendedSlugs: [
      "mold-temperature-controller",
      "hopper-dryer",
      "air-cooled-water-chiller",
      "gravimetric-dosing-blending",
    ],
    keyBenefits: [
      "±0.5°C precise mould water/oil temperature",
      "Rapid desiccant drying for hygroscopic resins",
      "Closed-loop chilling for hydraulic & mould circuits",
    ],
  },
  {
    id: "extrusion",
    title: "Blown Film & Extrusion",
    icon: Wind,
    badge: "Continuous Gauge & Dosing Stability",
    description:
      "Integrated melt temperature stabilization, gravimetric masterbatch dosing, and heavy-duty chillers for uniform film thickness and continuous high-yield extrusion.",
    recommendedSlugs: [
      "extrusion-process-controller",
      "water-cooled-water-scroll-chiller",
      "volumetric-doser-feeder",
      "vacuum-hopper-loader",
    ],
    keyBenefits: [
      "Continuous mass-flow extrusion control",
      "High-accuracy volumetric/gravimetric masterbatch feed",
      "Continuous-duty scroll chiller with brazed plate evaporator",
    ],
  },
  {
    id: "recycling-compounding",
    title: "Compounding & Recycling",
    icon: Recycle,
    badge: "Zero-Wastage Regrind Processing",
    description:
      "Rugged size reduction flake cutters, batch mixers with heating jackets, and gravimetric dosing units designed for handling challenging regrinds and mineral masterbatches.",
    recommendedSlugs: [
      "grinder-flake-cutter",
      "vertical-mixer-with-dryer",
      "gravimetric-dosing-blending",
      "batch-mixer",
    ],
    keyBenefits: [
      "Heavy-duty hardened alloy steel grinding blades",
      "Uniform dispersion mixing with heating jackets",
      "Accurate blending of regrind + virgin + masterbatch",
    ],
  },
  {
    id: "technical-parts",
    title: "Automotive & Technical Parts",
    icon: Cpu,
    badge: "Zero-Defect Quality Standards",
    description:
      "Ultra-stable process auxiliary configuration for tight-tolerance engineering resins (PA66, PBT, POM, PC) demanding rigorous temperature & moisture control.",
    recommendedSlugs: [
      "hopper-dryer",
      "mold-temperature-controller",
      "vacuum-hopper-loader",
      "air-cooled-water-chiller",
    ],
    keyBenefits: [
      "Low dew-point moisture extraction for engineering polymers",
      "Traceable process logs and digital PID interfaces",
      "100% factory inspected and pressure-tested circuits",
    ],
  },
];

export function EquipmentSizer() {
  const [activeTab, setActiveTab] = useState(applicationProfiles[0].id);

  const activeProfile =
    applicationProfiles.find((p) => p.id === activeTab) || applicationProfiles[0];

  const matchedProducts = activeProfile.recommendedSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  const Icon = activeProfile.icon;

  return (
    <div className="overflow-hidden rounded-2xl border border-navy-200/90 bg-white shadow-xl">
      {/* Top Application Selector Tabs */}
      <div className="border-b border-navy-100 bg-navy-50/60 p-2 sm:p-3">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {applicationProfiles.map((app) => {
            const isSelected = app.id === activeTab;
            const TabIcon = app.icon;
            return (
              <button
                key={app.id}
                onClick={() => setActiveTab(app.id)}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  isSelected
                    ? "bg-navy-950 text-white shadow-xs"
                    : "text-slate-600 hover:bg-white hover:text-navy-950"
                }`}
              >
                <TabIcon className="h-4 w-4" />
                <span>{app.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Profile Details & Lineup */}
      <div className="p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: Application Synopsis */}
          <div className="space-y-4 lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-accent-200 bg-accent-50/70 px-3 py-1 text-[11px] font-mono font-bold text-accent-700">
              <Icon className="h-3.5 w-3.5" />
              {activeProfile.badge}
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-navy-950">
              {activeProfile.title} Auxiliary Setup
            </h3>

            <p className="text-sm leading-relaxed text-slate-600">
              {activeProfile.description}
            </p>

            <div className="space-y-2 border-t border-navy-100 pt-4">
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Core Engineering Deliverables
              </p>
              {activeProfile.keyBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-navy-900">
                  <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tech-green" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href={`/contact-us?app=${encodeURIComponent(activeProfile.title)}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-accent-700"
              >
                Request Line Sizing Quote &rarr;
              </Link>
            </div>
          </div>

          {/* Right: Recommended Equipment Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
            {matchedProducts.map((p) => {
              if (!p) return null;
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-navy-50/40 p-4 transition-all hover:border-navy-300 hover:bg-white hover:shadow-md"
                >
                  <div className="relative mb-2 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg bg-white p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent-600">
                      {p.category}
                    </span>
                    <h4 className="mt-0.5 line-clamp-1 text-xs font-bold text-navy-950 group-hover:text-accent-600 sm:text-sm">
                      {p.name}
                    </h4>
                    <p className="mt-1 line-clamp-1 text-[11px] text-slate-500">
                      {p.tagline}
                    </p>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between border-t border-navy-100/60 pt-2 text-[11px] font-medium text-navy-700">
                    <span>Specs</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
