# Toshak Ancillary — Website

Modern rebuild of [toshakancillary.com](https://toshakancillary.com) — the website of an Ahmedabad-based manufacturer, supplier & exporter of auxiliary equipment for the plastics industry (chillers, hopper dryers, dosing & blending systems, mixers, mould temperature controllers, process controllers, grinders).

Built with the recommended stack from the rebuild specification:

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, static prerendering) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (design tokens in `src/app/globals.css`) |
| Animation | Framer Motion (scroll reveals, `prefers-reduced-motion` safe) |
| Forms | React Hook Form + Zod (shared client/server schema) |
| Fonts | Geist Sans & Geist Mono (self-hosted via `geist`) |
| Icons | lucide-react |

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (32 pages prerendered)
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
```

## Project structure

```
src/
├── app/
│   ├── page.tsx                  # Home
│   ├── about-us/                 # About Us
│   ├── products/                 # Products grid + [slug] detail template
│   ├── application/              # Industries / applications
│   ├── gallery/                  # Photo gallery (filterable)
│   ├── blog/                     # Blog index + [slug] articles
│   ├── contact-us/               # Contact + RFQ form (reads ?product=<slug>)
│   ├── api/rfq/route.ts          # Enquiry endpoint (Zod-validated)
│   ├── layout.tsx                # Shell, metadata, Organization JSON-LD
│   ├── sitemap.ts / robots.ts    # SEO plumbing
│   └── icon.svg                  # Favicon
├── components/                   # Header (mega-menu), footer, cards, tables, form…
├── data/
│   ├── site.ts                   # ← Company info, contacts, nav, strengths, industries
│   ├── products/                 # ← 14-product catalog (structured data model)
│   ├── blog.ts                   # ← 4 seed articles
│   └── gallery.ts                # ← Gallery items
├── lib/
│   ├── rfq-schema.ts             # Shared Zod schema (form ⇄ API contract)
│   └── utils.ts
public/img/                       # Product / industry / gallery photos
scripts/fetch-images.ps1          # Re-downloads photos from the current live site
```

## Editing content

- **Company info, phones, emails, address, nav, stats, strengths, industries** → `src/data/site.ts` (single source of truth).
- **Products** → `src/data/products/*.ts`, grouped by category. Each product carries the full structured model: name, slug, category, tagline, intro paragraphs, features, spec table, applications, industries, FAQs, image and SEO fields. Adding a product to `menuOrder` in `src/data/products/index.ts` puts it in the right position everywhere (nav, grids, sitemap).
- **Blog** → `src/data/blog.ts`. **Gallery** → `src/data/gallery.ts`.
- **Design tokens** (navy scale, accent orange, blueprint textures, fonts) → `src/app/globals.css`.

## Receiving enquiries

`POST /api/rfq` validates every field with the shared Zod schema (`src/lib/rfq-schema.ts`), includes a honeypot field, and accepts an optional PDF/image attachment up to 5 MB (validated, not persisted).

**Until you wire an email provider, submissions are only logged server-side** (see the `TODO(delivery)` comment in `src/app/api/rfq/route.ts`). To deliver them to the sales inbox, e.g. with [Resend](https://resend.com):

```bash
npm install resend
```

```ts
// src/app/api/rfq/route.ts — inside POST, after validation
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "website@toshakancillary.com",
  to: process.env.SALES_EMAIL!,            // e.g. sales.toshakancillary@gmail.com
  subject: `New enquiry ${reference} — ${parsed.data.product}`,
  text: JSON.stringify(parsed.data, null, 2),
});
```

Set `RESEND_API_KEY` and `SALES_EMAIL` in `.env.local` (or the hosting dashboard).

## Deployment

- **Vercel (recommended):** push to Git and import — zero config. Set the env vars above in the dashboard.
- **Self-hosted Node:** `npm run build && npm run start` behind a reverse proxy.

## SEO

- URL structure mirrors the current WordPress site, so existing rankings carry over. Verified live slugs preserved exactly: `/extrusion-process-controller/`, `/water-cooled-water-scroll-chiller/`, `/gravimetric-dosing-blending/`, `/air-cooled-water-chiller/`, `/volumetric-master-batch-doser/`, `/vertical-mixer/`, `/hopper-dryer/`. If any old URL differs after go-live audit, add 301s in `next.config.ts` → `redirects()`.
- Per-page metadata + OpenGraph, `Product`, `FAQPage`, `Article`, `BreadcrumbList` and `Organization` JSON-LD, `sitemap.xml`, `robots.txt`, canonical URLs.

## Before go-live — content checklist

Honest notes on what is verified vs. still to confirm:

1. **Representative spec tables** (clearly noted on the page itself) — the live site has no published table for these three products: **Vacuum Hopper Loader** (its URL 404s on the live site), **Mold Temperature Controller**, **Vertical Mixer with Dryer**. Replace with actual catalogue values.
2. **Volumetric Master Batch Doser** — dosing-accuracy values are omitted with a "being validated" note (the live table literally said "To Be Validated"). Fill in tested values.
3. **VMBD product photo** — the live site currently reuses the Batch Mixer photo (`8.png`) for it; the rebuild mirrors that. Replace with a real VMBD photo in `public/img/products/`.
4. **WhatsApp number** uses the sales line (+91 99788 33984) — confirm before go-live (`src/data/site.ts` → `whatsapp`).
5. **Social links** — the live footer lists Facebook/X/YouTube/Instagram/Pinterest but profile URLs weren't extractable; fill them in `site.ts` → `social` and footer links appear automatically.
6. **Blog** — the live blog is empty; the 4 articles here are seed drafts. Review/adapt before relying on them.
7. **Gallery** — 9 photos from the current site; extend with real installation/shop-floor photos.
8. **Images** — all photos were downloaded from the client's own live site (`scripts/fetch-images.ps1`); confirm usage rights as with any migration.
9. **Brochures / spec-sheet PDFs** — data model has placeholders; drop PDFs into `public/` and link them from product pages when available.
10. **Stats** — "14+ products / 15+ years / 24/7 support" come from the company's own site copy; adjust in `site.ts` if positioning changes.

## Verification performed

- `tsc --noEmit` — clean.
- `next build` — clean, 32/32 pages prerendered, no warnings.
- Production server smoke test — all 17 routes return 200 (unknown routes 404); valid RFQ POST returns `{ok: true, reference}`; invalid POST rejected.
