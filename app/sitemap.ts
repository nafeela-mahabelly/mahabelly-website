import type { MetadataRoute } from 'next'
import { SITE, OUTLETS } from '@/lib/site'
import { MENUS } from '@/lib/menus'
import { POLICIES } from '@/lib/policies'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  const staticPaths = [
    '', '/our-story', '/our-brands', '/menu', '/locations', '/canteen',
    '/events', '/sadhya-festivals', '/onam-2026', '/catering', '/order', '/mahabelly-gold',
    '/our-people', '/press', '/reviews', '/contact', '/policies',
  ]
  const routes = [
    ...staticPaths,
    ...MENUS.map((m) => `/menu/${m.slug}`),
    ...OUTLETS.map((o) => `/locations/${o.slug}`),
    ...POLICIES.map((p) => `/policies/${p.slug}`),
  ]
  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
