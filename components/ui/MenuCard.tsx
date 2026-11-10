import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import type { Menu } from '@/lib/menus'

type Accent = 'mahabelly' | 'canteen' | 'habibi'

const accentIcon: Record<Accent, string> = {
  mahabelly: 'text-red',
  canteen: 'text-gold',
  habibi: 'text-habibi',
}

interface MenuCardProps {
  href: string
  name: string
  kicker?: string
  intro: string
  accent: Accent
}

/**
 * Menu card — shared by /menu and /our-brands so every "View menu" card has
 * the same icon size, spacing and link treatment.
 *
 * Site convention for menu CTAs:
 *  - Buttons: <BookOpen size={15} /> leading icon, default .btn sizing.
 *  - Card links: "View menu" + <ArrowRight size={14} /> trailing.
 */
export default function MenuCard({ href, name, kicker, intro, accent }: MenuCardProps) {
  return (
    <Link
      href={href}
      className="lift group flex flex-col h-full bg-cream-soft border border-ink/10 rounded-2xl hover:border-red/40 hover:shadow-lg p-6 md:p-7"
    >
      <BookOpen size={24} className={`shrink-0 ${accentIcon[accent]}`} />
      <h3 className="font-display text-2xl font-bold text-ink mt-4">{name}</h3>
      {kicker && <p className="font-serif italic text-sm text-charcoal-soft mt-1">{kicker}</p>}
      <p className="text-sm text-charcoal-soft mt-3 leading-relaxed flex-1">{intro}</p>
      <span className="inline-flex items-center gap-1.5 self-start font-sans text-[11px] font-semibold tracking-widest uppercase text-red mt-5 group-hover:gap-2.5 transition-all">
        View menu <ArrowRight size={14} className="shrink-0" />
      </span>
    </Link>
  )
}

/** Props for an outlet menu from lib/menus. */
export const outletMenuCard = (m: Menu): MenuCardProps => ({
  href: `/menu/${m.slug}`,
  name: m.outletName,
  kicker: m.kicker,
  intro: m.intro,
  accent: m.brand,
})
