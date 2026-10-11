"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  X,
  FileText,
  ArrowRight,
} from "lucide-react";
import { mainNav, site } from "@/data/site";
import { categoryGroups, products } from "@/data/products";
import { buttonVariants } from "@/components/ui/button";
import { QuickSearchModal } from "@/components/quick-search-modal";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sales = site.contacts[0];
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <QuickSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Industrial Precision Telemetry Bar */}
      <div className="hidden border-b border-white/5 bg-navy-950 text-slate-300 md:block">
        <div className="mx-auto flex h-8 w-full max-w-7xl items-center justify-between px-4 text-[11px] font-mono sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-tech-green">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tech-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-tech-green" />
              </span>
              PLANT OPERATIONAL &bull; VATVA INDUSTRIAL ESTATE
            </span>
            <a
              href={`tel:${sales.phoneRaw}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3 text-slate-400" aria-hidden />
              {sales.phone}
            </a>
            <a
              href={`mailto:${sales.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-white lg:flex"
            >
              <Mail className="h-3 w-3 text-slate-400" aria-hidden />
              {sales.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="h-3 w-3" aria-hidden />
              Ahmedabad, Gujarat, India
            </span>
            <span className="flex items-center gap-1.5 font-medium text-accent-400">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              {site.certification.name} Certified
            </span>
          </div>
        </div>
      </div>

      {/* Main Minimalist Header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200",
          scrolled
            ? "border-b border-navy-200/80 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-b border-navy-100/70 bg-white"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
            aria-label={`${site.name} — home`}
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-navy-100 bg-white p-1 shadow-xs">
              <Image
                src="/img/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[17px] font-extrabold tracking-tight text-navy-950">
                  TOSHAK
                </span>
                <span className="rounded bg-navy-100 px-1.5 py-0.2 font-mono text-[9px] font-bold tracking-wider text-navy-700">
                  SYS
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent-600">
                Ancillary Equipment
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.mega ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-navy-50 text-navy-950 font-semibold"
                        : "text-slate-600 hover:bg-navy-50/80 hover:text-navy-950"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden
                    />
                  </Link>

                  {/* High-Tech Industrial Mega Menu */}
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="w-[780px] overflow-hidden rounded-xl border border-navy-200/90 bg-white p-6 shadow-2xl">
                      <div className="mb-4 flex items-center justify-between border-b border-navy-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-navy-900">
                            Industrial Machine Catalog
                          </span>
                          <span className="rounded-full bg-accent-50 px-2 py-0.5 font-mono text-[10px] font-bold text-accent-700">
                            14 Standard Lines
                          </span>
                        </div>
                        <button
                          onClick={() => setSearchOpen(true)}
                          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-navy-950"
                        >
                          <Search className="h-3.5 w-3.5" />
                          Quick search (Ctrl+K)
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        {categoryGroups.slice(0, 6).map((group) => (
                          <div key={group.category} className="space-y-1.5">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                              {group.category}
                            </p>
                            <ul className="space-y-1">
                              {group.products.map((product) => (
                                <li key={product.slug}>
                                  <Link
                                    href={`/products/${product.slug}`}
                                    className="block rounded-md px-2 py-1 text-[13px] text-slate-700 transition-all hover:bg-navy-50 hover:text-navy-950"
                                  >
                                    {product.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between rounded-lg border border-navy-100 bg-navy-50/70 p-3">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <FileText className="h-4 w-4 text-accent-600" />
                          <span>Need engineering sizing assistance or custom fabrication specs?</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Link
                            href="/products"
                            className="text-xs font-semibold text-navy-900 hover:text-accent-600"
                          >
                            Browse All &rarr;
                          </Link>
                          <Link
                            href="/contact-us"
                            className="text-xs font-semibold text-accent-600 hover:underline"
                          >
                            Custom RFQ &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-navy-50 text-navy-950 font-semibold"
                      : "text-slate-600 hover:bg-navy-50/80 hover:text-navy-950"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Quick Actions (Search, RFQ, Mobile Toggle) */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-9 items-center gap-2 rounded-lg border border-navy-200/80 bg-navy-50/60 px-3 text-xs text-slate-500 transition-all hover:border-navy-300 hover:bg-white hover:text-navy-950"
              aria-label="Search equipment"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">Search machines...</span>
              <kbd className="hidden rounded bg-white px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-400 shadow-2xs sm:inline-block">
                ⌘K
              </kbd>
            </button>

            {/* Direct RFQ CTA */}
            <Link
              href="/contact-us"
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden sm:inline-flex bg-accent-600 text-white font-semibold hover:bg-accent-700 shadow-xs text-xs px-3.5 h-9"
              )}
            >
              Get Engineering Quote
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-navy-200 bg-white text-navy-950 transition-colors hover:bg-navy-50 lg:hidden"
            >
              {open ? (
                <X className="h-4 w-4" aria-hidden />
              ) : (
                <Menu className="h-4 w-4" aria-hidden />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        {/* Minimalist Mobile Navigation Drawer */}
        {open && (
          <div
            id="mobile-nav"
            className="max-h-[85vh] overflow-y-auto border-t border-navy-100 bg-white lg:hidden"
          >
            <div className="p-4">
              {/* Mobile Search Bar */}
              <button
                onClick={() => {
                  setOpen(false);
                  setSearchOpen(true);
                }}
                className="mb-4 flex w-full items-center justify-between rounded-lg border border-navy-200 bg-navy-50/60 px-3 py-2 text-xs text-slate-500"
              >
                <span className="flex items-center gap-2">
                  <Search className="h-3.5 w-3.5" /> Search all 14+ machines...
                </span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <nav aria-label="Mobile" className="space-y-1">
                {mainNav.map((item) =>
                  item.mega ? (
                    <details key={item.href} className="group rounded-lg">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-navy-50 [&::-webkit-details-marker]:hidden">
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-1 space-y-2 rounded-xl border border-navy-100 bg-navy-50/70 p-2.5">
                        {/* Direct link to all products */}
                        <Link
                          href="/products"
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-lg bg-navy-950 px-3 py-2 text-xs font-semibold text-white shadow-2xs transition-colors hover:bg-accent-600"
                        >
                          <span>Browse All 14+ Machinery Lines</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>

                        {/* Compact 2-column category tiles */}
                        <div className="grid grid-cols-2 gap-1.5 pt-1">
                          {categoryGroups.map((group) => (
                            <Link
                              key={group.category}
                              href="/products"
                              onClick={() => setOpen(false)}
                              className="flex flex-col justify-between rounded-lg border border-navy-200/70 bg-white p-2 transition-all hover:border-accent-400 hover:bg-accent-50/30"
                            >
                              <span className="line-clamp-1 text-[11px] font-bold text-navy-950">
                                {group.category}
                              </span>
                              <span className="mt-0.5 font-mono text-[10px] font-semibold text-accent-600">
                                {group.products.length} {group.products.length === 1 ? "Unit" : "Units"} &rarr;
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-navy-50 font-semibold text-navy-950"
                          : "text-slate-700 hover:bg-navy-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="mt-4 border-t border-navy-100 pt-4">
                <Link
                  href="/contact-us"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants(), "w-full justify-center bg-accent-600 text-white")}
                >
                  Request Engineering Quote
                </Link>
                <div className="mt-3 flex items-center justify-around text-xs text-slate-500">
                  <a href={`tel:${sales.phoneRaw}`} className="flex items-center gap-1 hover:text-navy-950">
                    <Phone className="h-3 w-3 text-accent-600" /> Call Sales
                  </a>
                  <span>&bull;</span>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-semibold text-emerald-600"
                  >
                    WhatsApp RFQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
