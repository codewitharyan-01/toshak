import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Product } from "@/data/products/types";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  // Grab up to 2 key spec highlights from features or specs
  const keyFeature = product.features[0]?.title || "Precision Industrial Spec";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-navy-200/80 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg">
      {/* Top category label & technical tag */}
      <div className="flex items-center justify-between border-b border-navy-100/80 bg-navy-50/50 px-4 py-2 text-[11px] font-mono">
        <span className="font-semibold uppercase tracking-wider text-slate-500">
          {product.category}
        </span>
        <span className="text-[10px] text-accent-600 font-bold">
          ISO 9001
        </span>
      </div>

      {/* Clean high-contrast product image preview */}
      <Link
        href={`/products/${product.slug}`}
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white p-6"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute bottom-2 right-2 rounded-full border border-navy-200/60 bg-white/90 p-1.5 opacity-0 shadow-xs transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="h-3.5 w-3.5 text-navy-950" />
        </div>
      </Link>

      {/* Product Details & Specifications */}
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-base font-bold text-navy-950 transition-colors group-hover:text-accent-600 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600">
          {product.tagline}
        </p>

        {/* Technical highlight chip */}
        <div className="mt-3 flex items-center gap-1.5 rounded-md border border-navy-100 bg-navy-50/60 px-2.5 py-1 text-[11px] text-slate-600">
          <CheckCircle2 className="h-3 w-3 shrink-0 text-accent-600" />
          <span className="truncate font-medium">{keyFeature}</span>
        </div>

        {/* Action Row */}
        <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-3 text-xs">
          <Link
            href={`/products/${product.slug}`}
            className="font-semibold text-navy-900 transition-colors hover:text-accent-600 inline-flex items-center gap-1"
          >
            Full Specs
            <span aria-hidden>&rarr;</span>
          </Link>
          <Link
            href={`/contact-us?product=${encodeURIComponent(product.name)}`}
            className="font-medium text-accent-600 hover:text-accent-700"
          >
            Inquire Price
          </Link>
        </div>
      </div>
    </div>
  );
}
