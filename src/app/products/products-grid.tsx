"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { productCategories, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

const ALL = "All";

export function ProductsGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<string>(ALL);
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = active === ALL || product.category === active;
      const matchesQuery =
        !query.trim() ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.tagline.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [products, active, query]);

  return (
    <div className="space-y-8">
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter products by category"
          className="flex flex-wrap items-center gap-2"
        >
          {[ALL, ...productCategories].map((category) => {
            const count =
              category === ALL
                ? products.length
                : products.filter((p) => p.category === category).length;
            const isSelected = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isSelected}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                  isSelected
                    ? "bg-navy-950 text-white shadow-xs"
                    : "border border-navy-200/80 bg-white text-slate-600 hover:border-navy-300 hover:text-navy-950"
                )}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        {/* Real-time search filter */}
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search all 14+ equipment lines..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-navy-200 bg-white py-1.5 pl-9 pr-3 text-xs text-navy-950 placeholder-slate-400 focus:border-navy-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Grid of Product Cards with Motion Entry */}
      {filtered.length > 0 ? (
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {filtered.map((product, i) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
              >
                <ProductCard product={product} priority={i < 4} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="rounded-xl border border-dashed border-navy-200 bg-white p-12 text-center text-slate-500">
          <SlidersHorizontal className="mx-auto mb-2 h-8 w-8 text-slate-300" />
          <p className="text-sm font-semibold text-navy-950">
            No equipment matches &ldquo;{query}&rdquo; in {active}.
          </p>
          <button
            onClick={() => {
              setActive(ALL);
              setQuery("");
            }}
            className="mt-3 text-xs font-semibold text-accent-600 hover:underline"
          >
            Reset Filters &rarr;
          </button>
        </div>
      )}

      {/* Counter summary */}
      <div className="flex items-center justify-between border-t border-navy-100/80 pt-4 text-xs font-mono text-slate-500">
        <span>
          Showing <strong>{filtered.length}</strong> of <strong>{products.length}</strong> verified industrial lines
          {active !== ALL ? ` in ${active}` : ""}.
        </span>
        <span className="hidden sm:inline">100% In-House Manufactured &bull; Ahmedabad, Gujarat</span>
      </div>
    </div>
  );
}
