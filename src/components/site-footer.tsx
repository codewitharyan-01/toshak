import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { mainNav, site } from "@/data/site";
import { products } from "@/data/products";

export function SiteFooter() {
  const sales = site.contacts[0];

  return (
    <footer className="border-t border-navy-900 bg-navy-950 text-slate-300">
      {/* Top Industrial Assurance Strip - Hidden on small mobile to reduce excessive scrolling */}
      <div className="border-b border-white/5 bg-navy-900/60 py-3.5 sm:py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-tech-green" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-white">
              Vatva Manufacturing Plant Active &bull; Ahmedabad
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3 w-3 text-accent-400" />
              100% Factory Pressure Inspected
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3 w-3 text-accent-400" />
              ISO 9001:2015 Adherence
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3 w-3 text-accent-400" />
              Pan-India & Global Dispatch
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer - Compact grid on mobile (2 cols instead of long 1 col), 4 cols on desktop */}
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:py-12 sm:px-6 grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Col 1: Brand & Plant Overview (spans 2 cols on mobile for clean header) */}
        <div className="col-span-2 space-y-3 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white p-1 shrink-0">
              <Image
                src="/img/logo.png"
                alt=""
                width={28}
                height={28}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="block text-sm font-extrabold tracking-tight text-white">
                TOSHAK ANCILLARY
              </span>
              <span className="block font-mono text-[8.5px] uppercase tracking-[0.2em] text-accent-400">
                Industrial Auxiliary Systems
              </span>
            </div>
          </Link>

          <p className="text-xs leading-relaxed text-slate-400 line-clamp-3 lg:line-clamp-none">
            Ahmedabad-based manufacturer and exporter of auxiliary machinery for plastic processing lines — chillers, hopper dryers, dosing and blending systems, mixers, and mould temperature controllers.
          </p>

          <div className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300 font-mono">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-400" />
            <span>ISO 9001:2015 Certified Plant</span>
          </div>
        </div>

        {/* Col 2: Navigation & Company */}
        <nav aria-label="Footer Navigation">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
            Quick Links
          </p>
          <ul className="mt-3 space-y-1.5 text-xs">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact-us"
                className="font-semibold text-accent-400 hover:text-accent-300"
              >
                Request RFQ &rarr;
              </Link>
            </li>
          </ul>
        </nav>

        {/* Col 3: Product Lines Index */}
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
            Core Machinery
          </p>
          <ul className="mt-3 space-y-1.5 text-xs">
            {products.slice(0, 5).map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="transition-colors hover:text-white truncate block"
                >
                  {product.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/products"
                className="font-semibold text-accent-400 hover:text-accent-300"
              >
                All 14+ Machines &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Factory Works & Sales Contacts (spans 2 cols on mobile for compact layout) */}
        <div className="col-span-2 lg:col-span-1 border-t border-white/5 pt-4 lg:border-t-0 lg:pt-0">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
            Factory & Contacts
          </p>
          <address className="mt-2.5 space-y-2 text-xs not-italic text-slate-400">
            <p className="flex gap-2 text-[11px] leading-relaxed">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-400" />
              <span>Vatva Industrial Estate, Ahmedabad – 382445, Gujarat</span>
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
              <a
                href={`tel:${sales.phoneRaw}`}
                className="flex items-center gap-1.5 font-mono text-xs font-bold text-white hover:text-accent-400"
              >
                <Phone className="h-3 w-3 text-accent-400" />
                {sales.phone}
              </a>
              <a
                href={`mailto:${sales.email}`}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
              >
                <Mail className="h-3 w-3 text-accent-400" />
                {sales.email}
              </a>
            </div>
            <div className="pt-1">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-tech-green hover:underline"
              >
                WhatsApp Technical Desk &rarr;
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom Legal / Copyright Strip */}
      <div className="border-t border-white/5 bg-navy-950/90 py-3">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1.5 px-4 text-[11px] text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; 2026 {site.name}. All rights reserved.</p>
          <p className="font-mono text-[10px] text-slate-500">
            Precision Manufacturing &bull; Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
