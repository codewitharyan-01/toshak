"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Gauge, Wrench, ArrowUpRight } from "lucide-react";

const metrics = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015 Verified",
    desc: "Certified manufacturing, testing & service protocols",
    chip: "Quality First",
  },
  {
    icon: Zap,
    title: "Low Specific Power kW/TR",
    desc: "Copeland & Danfoss scroll compressors engineered for continuous duty",
    chip: "Thermodynamics",
  },
  {
    icon: Gauge,
    title: "Closed-Loop Digital PID",
    desc: "Real-time automated regulation with digital fault diagnostics",
    chip: "±0.5°C Precision",
  },
  {
    icon: Wrench,
    title: "24/7 Factory Field Support",
    desc: "Spare parts dispatch directly from Vatva, Ahmedabad works",
    chip: "Zero Downtime",
  },
];

export function InteractiveFeatureCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-navy-200/80 bg-white p-5 shadow-xs transition-all hover:border-navy-300 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-navy-50 p-2 text-navy-950 transition-colors group-hover:bg-accent-50 group-hover:text-accent-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-600">
                  {item.chip}
                </span>
              </div>
              <h3 className="mt-3.5 text-sm font-bold text-navy-950 group-hover:text-accent-600">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                {item.desc}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 font-mono text-[11px] text-slate-400 group-hover:text-accent-600">
              <span>Standard Specification</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
