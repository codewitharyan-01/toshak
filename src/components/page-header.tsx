import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  description,
  crumbs,
  className,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/10 bg-navy-950 text-white",
        className
      )}
    >
      <div className="absolute inset-0 bg-blueprint-dark opacity-50" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-slate-400">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 ? (
                  <ChevronRight className="h-3 w-3 text-slate-500" aria-hidden />
                ) : null}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-semibold text-accent-400">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[2.6rem]">
          {title}
        </h1>

        {description ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
