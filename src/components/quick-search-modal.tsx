"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, Sliders, Shield } from "lucide-react";
import { products } from "@/data/products";
import type { Product } from "@/data/products/types";

export function QuickSearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = useMemo(() => {
    if (!query.trim()) return products.slice(0, 6);
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.applications.some((a) => a.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-navy-950/60 p-4 pt-16 backdrop-blur-sm sm:p-6 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-navy-200/80 bg-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-navy-100 px-4 py-3 sm:px-5">
          <Search className="h-5 w-5 text-slate-400" aria-hidden />
          <input
            type="text"
            placeholder="Search equipment, specs, models (e.g. Chiller, Doser, MTC)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full border-none bg-transparent px-3 py-1.5 text-sm font-medium text-navy-950 placeholder-slate-400 focus:outline-none sm:text-base"
          />
          <div className="flex items-center gap-1.5">
            <kbd className="hidden rounded bg-navy-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-400 sm:inline-block">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-navy-50 hover:text-navy-900"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4">
          <div className="mb-2 flex items-center justify-between px-2 text-[11px] font-mono uppercase tracking-wider text-slate-400">
            <span>
              {query ? `Found ${filtered.length} equipment solutions` : "Quick Access Catalog"}
            </span>
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-accent-600" /> ISO 9001:2015
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-500">
              <Sliders className="mx-auto mb-2 h-6 w-6 text-slate-300" />
              No matching equipment found for &ldquo;{query}&rdquo;.
              <div className="mt-3">
                <Link
                  href="/contact-us"
                  onClick={onClose}
                  className="font-semibold text-accent-600 hover:underline"
                >
                  Contact engineering support for custom configurations &rarr;
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5">
              {filtered.map((item: Product) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  onClick={onClose}
                  className="group flex items-center gap-3.5 rounded-xl border border-transparent p-2.5 transition-all hover:border-navy-200 hover:bg-navy-50/70"
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-navy-100 bg-white p-1">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-600">
                        {item.category}
                      </span>
                    </div>
                    <p className="truncate text-sm font-semibold text-navy-950 group-hover:text-accent-600">
                      {item.name}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {item.tagline}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-navy-900" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex items-center justify-between border-t border-navy-100 bg-navy-50/60 px-4 py-2.5 text-xs text-slate-500">
          <span>Factory direct dispatch from Vatva, Ahmedabad</span>
          <Link
            href="/products"
            onClick={onClose}
            className="font-semibold text-navy-900 hover:text-accent-600"
          >
            All 14+ Machines &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
