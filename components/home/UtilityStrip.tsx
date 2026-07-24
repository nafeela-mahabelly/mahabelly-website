import Link from 'next/link'
import { MapPin, BookOpen, CalendarCheck, Bike } from 'lucide-react'
import { LINKS } from '@/lib/site'

const items = [
  { label: 'Find your nearest Mahabelly', icon: MapPin, href: '/locations', external: false },
  { label: 'View the menus', icon: BookOpen, href: '/menu', external: false },
  { label: 'Reserve a table', icon: CalendarCheck, href: LINKS.reserve, external: true },
  { label: 'Order delivery', icon: Bike, href: LINKS.orderOnline, external: false },
]

export default function UtilityStrip() {
  return (
    <section aria-label="Quick actions" className="bg-cream-soft border-b border-ink/10">
      <div className="container-x">
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ink/10">
          {items.map(({ label, icon: Icon, href, external }) => {
            const inner = (
              <span className="flex items-center gap-3 px-5 py-6 group">
                <Icon size={22} className="text-red shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-[13px] font-medium text-charcoal leading-snug">{label}</span>
              </span>
            )
            return (
              <li key={label} className="hover:bg-cream transition-colors">
                {external ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
                ) : (
                  <Link href={href}>{inner}</Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
