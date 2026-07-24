# Mahabelly Website

Static, SEO-focused marketing site for **Mahabelly** — contemporary Kerala cuisine, Delhi NCR.
Built with Next.js 15 (App Router) + Tailwind CSS, exported as a fully static site.

> Born in Delhi. Rooted in Kerala. Served with soul.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

`next.config.ts` sets `output: 'export'`, so `npm run build` produces a static
`out/` folder you can host on any static host (Vercel, Netlify, S3, Nginx…).

## Structure

```
app/
  layout.tsx            # fonts, global metadata, Organization/WebSite JSON-LD, chrome
  page.tsx              # homepage (composed from components/home/*)
  our-story/            # founder story + timeline
  menu/                 # outlet selector  →  menu/[slug] (web-readable menus)
  locations/            # all outlets      →  locations/[slug] (per-outlet + map + Restaurant JSON-LD)
  canteen/              # Mahabelly Canteen format
  sadhya-festivals/     # festivals + FAQ (FAQPage JSON-LD)
  catering/             # catering + enquiry form
  our-people/  press/  reviews/  contact/
  policies/             # index  →  policies/[slug] (privacy, terms, cancellation-refund, shipping-delivery, accessibility)
  sitemap.ts  robots.ts  not-found.tsx
components/
  layout/               # Navbar, Footer, FloatingButtons (call+WhatsApp), MobileActionBar, PageHero, CTABand
  home/                 # homepage sections
  menu/  forms/  ui/     # MenuView, Catering/Contact forms, shared UI
lib/
  site.ts               # business info, nav, outlets, order/reserve links   ← EDIT ME
  menus.ts              # the three outlet menus (transcribed from PDFs)
  content.ts            # story, experiences, press, reviews, people, catering, FAQs
  policies.ts           # full legal policy text (client-supplied)
  seo.ts                # per-page metadata + structured-data helpers
public/
  brand/  art/  photos/  festivals/  menus/   # optimised brand assets & photos
```

## Editing content

Almost everything lives in `lib/`. Common edits:

- **Phone / email / links / outlets** → `lib/site.ts` (`SITE`, `LINKS`, `OUTLETS`)
- **Menus** → `lib/menus.ts`
- **Press, reviews, people, experiences** → `lib/content.ts`
- **Legal policies** → `lib/policies.ts`

## ⚠️ Placeholders to confirm before launch

These are wired but use provisional values — search the code for them:

- **Order Online** → `LINKS.orderOnline` = `https://mahabelly.co/onlineorder/` (confirmed)
- **Reserve** → `LINKS.reserve` = `https://linktr.ee/mahabelly` (confirmed)
- **Zomato / Swiggy** per-outlet links → `LINKS.zomato` / `LINKS.swiggy` (currently `#`)
- **Forms** (Catering, Contact, Newsletter) are static — Catering opens a prefilled
  WhatsApp, Contact opens a prefilled email. Wire a real form endpoint if you want
  server-side submissions (see notes in `components/forms/*`).
- **Reviews** in `lib/content.ts` (`REVIEWS`) are placeholders — replace with verified,
  source-linked guest reviews.
- **Outlet addresses / hours** — Saidulajab & Vasant Kunj are exact; Saket, Lado Serai,
  Gurgaon and Sonipat use area-level info — confirm exact addresses & hours in `OUTLETS`.
- **Policy effective / last-updated dates** and the named Grievance Officer/vendors —
  fill in `lib/policies.ts` (see the client's implementation note).
- **Legal entity** = `Fenn & Jacob Associates LLP` (confirmed).

## Notes

- Floating **Call + WhatsApp** buttons and the mobile sticky **Reserve / Order** bar are global.
- Reduced-motion is respected throughout; images are optimised (WebP/AVIF-friendly sizes).
- SEO: unique titles + meta + canonicals per page, XML sitemap, robots.txt, and JSON-LD
  (Organization, WebSite, BreadcrumbList, Restaurant, Menu, FAQPage).
```
