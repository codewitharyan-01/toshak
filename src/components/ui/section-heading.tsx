import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-mono text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-accent-600" : "text-accent-400",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-2 text-3xl font-bold tracking-tight text-balance md:text-4xl",
          tone === "light" && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed",
            tone === "dark" ? "text-slate-600" : "text-navy-200",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
