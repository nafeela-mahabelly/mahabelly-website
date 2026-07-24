import type { Metadata } from 'next'
import { SITE, OUTLETS } from './site'

const BASE = SITE.url

interface PageMeta {
  title: string
  description: string
  path: string
  image?: string
}

/** Build per-page metadata with unique title + canonical (brief §8). */
export function pageMeta({ title, description, path, image = '/og-image.jpg' }: PageMeta): Metadata {
  const url = `${BASE}${path}`
  return {
    // absolute → bypass the layout's "%s | Mahabelly" template so the
    // brief's exact SEO titles are used verbatim (no double branding)
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

// ── Structured data ─────────────────────────────────────────────
export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  legalName: SITE.legalName,
  url: BASE,
  logo: `${BASE}/brand/logo-dark.png`,
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: String(SITE.since),
  sameAs: [
    'https://instagram.com/mahabelly',
    'https://facebook.com/mahabelly',
  ],
  areaServed: 'Delhi NCR',
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: BASE,
}

/** LocalBusiness / Restaurant node for an outlet. */
export function restaurantLd(slug: string) {
  const o = OUTLETS.find((x) => x.slug === slug)
  if (!o) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: o.name,
    servesCuisine: 'Kerala, South Indian',
    priceRange: '₹₹',
    url: `${BASE}/locations/${o.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: o.address,
      addressLocality: o.city,
      addressRegion: o.city === 'Gurugram' || o.city === 'Sonipat' ? 'Haryana' : 'Delhi',
      addressCountry: 'IN',
    },
    openingHours: o.hours,
    ...(o.menuSlug ? { hasMenu: `${BASE}/menu/${o.menuSlug}` } : {}),
  }
}
