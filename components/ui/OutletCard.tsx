import Link from 'next/link'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { Outlet, mapsUrl } from '@/lib/site'

const brandBadge = {
  mahabelly: 'bg-red/10 text-red border-red/30',
  canteen: 'bg-gold/10 text-gold border-gold/40',
}

/** Location card used on home + locations pages. */
export default function OutletCard({ outlet, tone = 'light' }: { outlet: Outlet; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  const services = [
    outlet.dineIn && 'Dine-in',
    outlet.takeaway && 'Takeaway',
    outlet.delivery && 'Delivery',
  ].filter(Boolean) as string[]

  return (
    <div
      className={`lift group flex flex-col h-full border rounded-2xl p-6 ${
        dark
          ? 'bg-ink-soft/60 border-cream/10 hover:border-red/40'
          : 'bg-cream-soft border-ink/10 hover:border-red/30 hover:shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`font-sans text-[10px] tracking-widest uppercase border rounded-full px-3 py-1 ${brandBadge[outlet.brand]}`}>
          {outlet.brand === 'canteen' ? 'Canteen' : 'Mahabelly'}
        </span>
        {outlet.note && (
          <span className={`font-sans text-[10px] tracking-wide uppercase ${dark ? 'text-cream/40' : 'text-charcoal-mute'}`}>
            {outlet.note}
          </span>
        )}
      </div>

      <h3 className={`font-display text-xl font-bold mb-1 ${dark ? 'text-cream' : 'text-ink'}`}>{outlet.name}</h3>
      <p className={`font-serif italic text-sm mb-4 ${dark ? 'text-gold-light' : 'text-red'}`}>{outlet.format}</p>

      <ul className={`space-y-2.5 mb-5 text-xs ${dark ? 'text-cream/60' : 'text-charcoal-soft'}`}>
        <li className="flex items-start gap-2.5">
          <MapPin size={14} className="text-red-light mt-0.5 shrink-0" />
          <span className="leading-relaxed">{outlet.address}</span>
        </li>
        <li className="flex items-center gap-2.5">
          <Clock size={14} className="text-red-light shrink-0" />
          <span>{outlet.hours}</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {services.map((s) => (
          <span
            key={s}
            className={`font-sans text-[10px] tracking-wide uppercase rounded-full px-2.5 py-0.5 ${
              dark ? 'bg-cream/5 text-cream/50' : 'bg-sand/60 text-charcoal-soft'
            }`}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-ink/10">
        <Link
          href={`/locations/${outlet.slug}`}
          className={`inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold tracking-widest uppercase ${
            dark ? 'text-cream hover:text-red-light' : 'text-ink hover:text-red'
          } transition-colors`}
        >
          Details <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <a
          href={mapsUrl(outlet.mapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className={`ml-auto font-sans text-[11px] font-semibold tracking-widest uppercase ${
            dark ? 'text-cream/50 hover:text-cream' : 'text-charcoal-mute hover:text-ink'
          } transition-colors`}
        >
          Directions
        </a>
      </div>
    </div>
  )
}
