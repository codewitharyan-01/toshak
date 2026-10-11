import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="bg-navy-950 bg-blueprint-dark">
      <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-7xl font-bold text-accent-500">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
          This page could not be found
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-200">
          The page may have moved or no longer exists. Browse our product range
          or get in touch — our team will point you in the right direction.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className={buttonVariants({ variant: "outline-light" })}
          >
            Back to Home
          </Link>
          <Link href="/products" className={buttonVariants()}>
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
