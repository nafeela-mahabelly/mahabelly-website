# Mahabelly Website

Premium Next.js 15 website for Mahabelly — authentic Kerala cuisine.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion v11**
- **Lucide React** (icons)
- **Google Fonts** — Playfair Display, Cormorant Garamond, Inter

## Project Structure

```
mahabelly-website/
├── app/
│   ├── globals.css          # Design system: tokens, utilities, base styles
│   ├── layout.tsx           # Root layout: fonts, SEO metadata
│   └── page.tsx             # Home page — assembles all sections
├── components/
│   ├── ui/
│   │   └── FadeInView.tsx   # Reusable scroll-triggered animation wrapper
│   ├── Navigation.tsx       # Sticky nav (transparent → solid on scroll)
│   ├── Hero.tsx             # Full-screen cinematic hero with parallax
│   ├── BrandStory.tsx       # Alternating image/text storytelling
│   ├── SignatureExperiences.tsx  # Premium food card grid
│   ├── WhyMahabelly.tsx     # 6-pillar hospitality section
│   ├── Locations.tsx        # Location cards for all 5 outlets
│   ├── Gallery.tsx          # Masonry photo gallery
│   ├── Testimonials.tsx     # Auto-rotating review carousel
│   ├── CallToAction.tsx     # Full-bleed CTA with Order Online
│   └── Footer.tsx           # Multi-column footer with newsletter
├── public/
│   ├── logo.svg
│   └── favicon.svg
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Colour Tokens (Tailwind)

| Token                    | Hex       | Use                       |
|--------------------------|-----------|---------------------------|
| `kerala-green`           | `#1B4D3E` | Primary brand green       |
| `kerala-green-dark`      | `#0F2E25` | Dark sections, overlays   |
| `kerala-green-mid`       | `#2A6B57` | Mid-tone accents          |
| `kerala-gold`            | `#C9A84C` | Accent, CTAs, icons       |
| `kerala-gold-light`      | `#E2C97E` | Hover states, highlights  |
| `kerala-cream`           | `#FAF8F3` | Light background          |
| `kerala-charcoal`        | `#2C2C2C` | Body text                 |

## Typography

- **Headings**: Playfair Display (`font-display`)
- **Subheadings / Pull quotes**: Cormorant Garamond (`font-serif`)
- **Body / UI**: Inter (`font-sans`)

## Deployment (Vercel)

```bash
npm run build   # Local build check
vercel deploy   # Deploy to Vercel
```

Set your custom domain `mahabelly.com` in Vercel's project settings.

## Replacing Placeholder Images

All images currently use Unsplash URLs. Replace them with your own photography:
1. Add images to `/public/images/`
2. Update `src` props in each component
3. Remove `images.unsplash.com` from `next.config.ts` remotePatterns if no longer needed

## Online Ordering

The Order Online button redirects to:
`https://mahabelly.co/onlineorder/`

Update this URL in `components/Hero.tsx`, `components/SignatureExperiences.tsx`,
`components/CallToAction.tsx`, and `components/Navigation.tsx` when the new
domain is live.
