"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  X,
  Maximize2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sliders,
  FileText,
} from "lucide-react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

const ALL = "All";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | typeof ALL>(ALL);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filtered =
    active === ALL
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  const openLightbox = (item: GalleryItem) => {
    const idx = galleryItems.findIndex((g) => g.src === item.src);
    setCurrentIndex(idx >= 0 ? idx : 0);
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIdx);
    setSelectedItem(galleryItems[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(prevIdx);
    setSelectedItem(galleryItems[prevIdx]);
  };

  // Keyboard controls for the modal lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, currentIndex]);

  return (
    <div>
      {/* Category selector pills */}
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="flex flex-wrap items-center gap-2"
      >
        {[ALL, ...galleryCategories].map((category) => {
          const count =
            category === ALL
              ? galleryItems.length
              : galleryItems.filter((g) => g.category === category).length;
          const isSelected = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category as GalleryCategory | typeof ALL)}
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

      {/* Grid of gallery cards with click to open floating detail box */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              onClick={() => openLightbox(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-navy-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-xl"
            >
              {/* Category & model tag */}
              <div className="flex items-center justify-between border-b border-navy-100/80 bg-navy-50/60 px-3.5 py-2 text-[10px] font-mono">
                <span className="font-bold uppercase tracking-wider text-slate-500">
                  {item.category}
                </span>
                <span className="rounded bg-white px-1.5 py-0.5 font-bold text-accent-600 shadow-2xs">
                  {item.model}
                </span>
              </div>

              {/* Image with proper containment and spacious padding */}
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-white p-6 sm:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/20 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-200/80 bg-white/95 px-3 py-1.5 font-mono text-xs font-bold text-navy-950 shadow-md">
                    <Maximize2 className="h-3.5 w-3.5 text-accent-600" />
                    Inspect Details
                  </span>
                </div>
              </div>

              {/* Card Footer info */}
              <div className="p-4">
                <h3 className="line-clamp-1 text-sm font-bold text-navy-950 group-hover:text-accent-600">
                  {item.alt}
                </h3>
                <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-navy-100/70 pt-2.5 text-[11px] font-mono text-accent-600">
                  <span>Click for full specs</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-navy-200 bg-white p-12 text-center text-slate-500">
          <Sliders className="mx-auto mb-2 h-8 w-8 text-slate-300" />
          <p className="text-sm font-medium text-navy-950">
            No equipment photographs found in this category.
          </p>
        </div>
      )}

      {/* Counter summary */}
      <p className="mt-8 font-mono text-xs text-slate-500" aria-live="polite">
        Showing {filtered.length} of {galleryItems.length} verified manufacturing photographs.
      </p>

      {/* FLOATING LIGHTBOX / PRODUCT DETAILS MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-3 backdrop-blur-md sm:p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute right-3.5 top-3.5 z-20 rounded-full border border-navy-200 bg-white/90 p-2 text-slate-600 shadow-md backdrop-blur-md transition-colors hover:bg-navy-950 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full border border-navy-200 bg-white/90 p-2 text-navy-900 shadow-md backdrop-blur-md transition-colors hover:bg-navy-950 hover:text-white md:left-4"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full border border-navy-200 bg-white/90 p-2 text-navy-900 shadow-md backdrop-blur-md transition-colors hover:bg-navy-950 hover:text-white md:right-[390px]"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Left Column: High-Res Image Showcase */}
              <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-navy-950 p-4 md:aspect-auto md:w-[55%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="max-h-[60vh] w-auto max-w-full rounded-lg object-contain shadow-2xl drop-shadow-md md:max-h-[75vh]"
                />
                <div className="absolute bottom-3 left-3 rounded bg-navy-900/90 px-2 py-0.5 font-mono text-[10px] text-slate-300">
                  {currentIndex + 1} / {galleryItems.length}
                </div>
              </div>

              {/* Right Column: Detailed Product Specifications & Actions */}
              <div className="flex flex-1 flex-col justify-between overflow-y-auto p-6 md:w-[45%] md:p-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-600">
                      {selectedItem.category}
                    </span>
                    <span className="rounded bg-navy-100 px-2 py-0.5 font-mono text-[10px] font-bold text-navy-800">
                      {selectedItem.model}
                    </span>
                  </div>

                  <h2 className="mt-2 text-xl font-extrabold tracking-tight text-navy-950 sm:text-2xl">
                    {selectedItem.alt}
                  </h2>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {selectedItem.description}
                  </p>

                  {/* Technical Specifications Matrix */}
                  <div className="mt-5 space-y-2 border-t border-navy-100 pt-4">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Engineering Parameters
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {selectedItem.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-navy-100 bg-navy-50/70 p-2 font-mono"
                        >
                          <span className="block text-[9px] uppercase tracking-wider text-slate-400">
                            {spec.label}
                          </span>
                          <span className="block text-xs font-bold text-navy-950">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Manufacturing Assurance */}
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50/70 px-3 py-2 text-[11px] text-emerald-800">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Fabricated & Tested at Vatva, Ahmedabad plant.</span>
                  </div>
                </div>

                {/* Modal CTA Buttons */}
                <div className="mt-6 flex flex-col gap-2.5 border-t border-navy-100 pt-5 sm:flex-row">
                  {selectedItem.productSlug && (
                    <Link
                      href={`/products/${selectedItem.productSlug}`}
                      onClick={closeLightbox}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-navy-200 bg-navy-50 px-4 py-2.5 text-xs font-bold text-navy-950 transition-colors hover:bg-navy-100"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      View Full Catalog
                    </Link>
                  )}
                  <Link
                    href={`/contact-us?product=${encodeURIComponent(selectedItem.alt)}`}
                    onClick={closeLightbox}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-accent-700"
                  >
                    Request Quotation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
