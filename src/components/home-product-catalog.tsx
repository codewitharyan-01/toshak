"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import { products, productCategories } from "@/data/products";
import type { ProductCategory, Product } from "@/data/products/types";
import { ProductCard } from "@/components/product-card";

export function HomeProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Filters and Search Bar */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === "All"
                ? "bg-navy-950 text-white shadow-xs"
                : "border border-navy-200/80 bg-white text-slate-600 hover:border-navy-300 hover:text-navy-950"
            }`}
          >
            All Machines ({products.length})
          </button>
          {productCategories.map((cat) => {
            const count = products.filter((p) => p.category === cat).length;
            if (count === 0) return null;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-navy-950 text-white shadow-xs"
                    : "border border-navy-200/80 bg-white text-slate-600 hover:border-navy-300 hover:text-navy-950"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Filter models by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-navy-200 bg-white py-1.5 pl-9 pr-3 text-xs text-navy-950 placeholder-slate-400 focus:border-navy-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-navy-200 bg-white p-12 text-center text-slate-500">
          <SlidersHorizontal className="mx-auto mb-2 h-8 w-8 text-slate-300" />
          <p className="text-sm font-semibold text-navy-900">
            No equipment matched &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-semibold text-accent-600 hover:underline"
          >
            Reset Filters &rarr;
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}

      {/* Bottom Summary Bar */}
      <div className="flex flex-col items-center justify-between gap-3 rounded-xl border border-navy-100 bg-white p-4 text-xs text-slate-500 sm:flex-row">
        <span>
          Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> auxiliary production units.
        </span>
        <Link
          href="/products"
          className="font-semibold text-navy-950 transition-colors hover:text-accent-600 inline-flex items-center gap-1"
        >
          View Full Specification Matrix
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
