import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface Crumb {
  label: string
  href?: string
}

/** Accessible breadcrumb trail + BreadcrumbList JSON-LD. */
export default function Breadcrumbs({ items, tone = 'dark' }: { items: Crumb[]; tone?: 'light' | 'dark' }) {
  const base = tone === 'dark' ? 'text-cream/55' : 'text-charcoal-mute'
  const active = tone === 'dark' ? 'text-cream/90' : 'text-charcoal'
  const hover = tone === 'dark' ? 'hover:text-red-light' : 'hover:text-red'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://www.mahabelly.com${c.href}` } : {}),
    })),
  }

  return (
    <nav aria-label="Breadcrumb" className={`font-sans text-[11px] tracking-wide ${base}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {c.href ? (
              <Link href={c.href} className={`${base} ${hover} transition-colors`}>
                {c.label}
              </Link>
            ) : (
              <span className={active} aria-current="page">
                {c.label}
              </span>
            )}
            {i < items.length - 1 && <ChevronRight size={11} className="opacity-50" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}
