"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Gauge, ShieldCheck, Sparkles, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";

const showcaseSlugs = [
  {
    slug: "gravimetric-dosing-blending",
    title: "Gravimetric Dosing & Blending",
    category: "Dosing & Blending",
    tagline: "Batch accuracy within ±0.1% with multi-ingredient recipe memory",
    metrics: [
      { label: "Batch Accuracy", value: "±0.1% High-Precision Load Cell" },
      { label: "Components", value: "Up to 4 Materials Simultaneously" },
      { label: "Recipe Storage", value: "100+ Programmable Formulations" },
    ],
  },
  {
    slug: "hopper-dryer",
    title: "Dehumidifying Hopper Dryer",
    category: "Drying & Handling",
    tagline: "Rapid moisture removal for hygroscopic resins with SS-304 polished hopper",
    metrics: [
      { label: "Hopper Body", value: "Polished SS-304 Stainless Steel" },
      { label: "Air Distribution", value: "Even-Flow Down-Blowing Cone" },
      { label: "Temperature Control", value: "PID Microprocessor to 160°C" },
    ],
  },
  {
    slug: "mold-temperature-controller",
    title: "Mould Temp Controller (MTC)",
    category: "Temperature Control",
    tagline: "Dual-zone ±0.5°C thermoregulation for zero defect injection molding",
    metrics: [
      { label: "Media Options", value: "Water (up to 120°C) / Oil (to 200°C)" },
      { label: "Control Precision", value: "±0.5°C Multi-Zone PID" },
      { label: "Pump Specification", value: "High-Flow SPECK / Grundfos" },
    ],
  },
  {
    slug: "water-cooled-water-scroll-chiller",
    title: "Water Cooled Scroll Chiller",
    category: "Cooling Systems",
    tagline: "Ultra-low kW/TR with high-efficiency Copeland/Danfoss scroll compressor",
    metrics: [
      { label: "Cooling Medium", value: "Water / Glycol (5°C to 25°C)" },
      { label: "Compressor", value: "Copeland / Danfoss Scroll" },
      { label: "Condenser", value: "High-Efficiency Shell & Tube" },
    ],
  },
];

export function HeroEquipmentStage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentItem = showcaseSlugs[selectedIndex];
  const currentProduct = products.find((p) => p.slug === currentItem.slug) || products[0];

  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-navy-900/90 p-4 shadow-2xl backdrop-blur-md sm:p-7">
      {/* Dynamic ambient background glow */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" />

      {/* Top Header Row of the Stage */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent-400">
            {currentItem.category}
          </span>
          <h3 className="text-base font-bold text-white sm:text-xl">
            {currentItem.title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-tech-green/30 bg-tech-green/10 px-2 py-0.5 font-mono text-[10px] text-tech-green">
          <span className="h-1.5 w-1.5 rounded-full bg-tech-green animate-pulse" />
          FACTORY TESTED
        </div>
      </div>

      {/* Center Image Stage with Smooth Fade / Scale Transitions */}
      <div className="relative my-3 sm:my-5 flex aspect-[16/10] sm:aspect-[16/11] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white/10 via-transparent to-transparent p-3 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.slug}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative h-full w-full flex items-center justify-center"
          >
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              width={500}
              height={380}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Technical Spec Telemetry Chips */}
      <div className="grid grid-cols-1 gap-2 border-t border-white/10 pt-3 sm:pt-4 sm:grid-cols-3">
        {currentItem.metrics.map((m, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/5 bg-white/5 p-2 font-mono"
          >
            <p className="text-[9px] uppercase tracking-wider text-slate-400">
              {m.label}
            </p>
            <p className="mt-0.5 truncate text-[11px] font-semibold text-white">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      {/* Equipment Selector Strip */}
      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-3">
        {showcaseSlugs.map((item, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`flex-1 min-w-[100px] sm:min-w-[120px] rounded-lg px-2 py-1.5 text-left text-xs transition-all ${
                isSelected
                  ? "border border-accent-500/60 bg-accent-500/20 text-white shadow-xs"
                  : "border border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="block font-mono text-[9px] uppercase text-accent-400">
                0{idx + 1}
              </span>
              <span className="block truncate text-[11px] font-medium">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom CTA Row */}
      <div className="mt-3 flex items-center justify-between pt-2">
        <Link
          href={`/products/${currentProduct.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-accent-400"
        >
          View Full Specifications
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href={`/contact-us?product=${encodeURIComponent(currentProduct.name)}`}
          className="text-xs font-semibold text-accent-400 hover:text-accent-300 hover:underline"
        >
          Inquire Pricing &rarr;
        </Link>
      </div>
    </div>
  );
}
