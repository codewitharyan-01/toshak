import { stats } from "@/data/site";

export function StatsStrip() {
  return (
    <section aria-label="Company at a glance" className="border-b border-navy-100 bg-navy-50/60">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-mono text-4xl font-bold tracking-tight text-navy-950">
              {stat.value}
              <span className="text-accent-600">{stat.suffix}</span>
            </p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
