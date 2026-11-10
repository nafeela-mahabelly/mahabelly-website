import { ExternalLink, Info } from 'lucide-react'
import { HABIBI, HABIBI_ORDER } from '@/lib/habibi'

function AppLink({ href, platform, city }: { href: string; platform: 'Swiggy' | 'Zomato'; city: string }) {
  const color = platform === 'Zomato' ? 'bg-[#e23744]' : 'bg-[#fc8019]'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Order Mahabelly Habibi ${city} on ${platform}`}
      className={`group flex-1 inline-flex items-center justify-center gap-2 rounded-full ${color} text-white font-sans text-[13px] font-semibold px-4 py-3 hover:opacity-90 transition-opacity`}
    >
      {platform}
      <ExternalLink size={14} className="shrink-0 opacity-80 group-hover:translate-x-0.5 transition-transform" />
    </a>
  )
}

/**
 * "Order Habibi" city selector — Delhi / Gurgaon, each with its own Swiggy &
 * Zomato outlet link. Delivery-only brand: no reserve / directions here.
 */
export default function HabibiCityPicker({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <div>
      <p className={`kicker mb-4 ${dark ? 'text-habibi-pale' : 'text-habibi'}`}>Choose your city</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {HABIBI_ORDER.map((c) => (
          <div
            key={c.city}
            className={`rounded-2xl border p-5 ${dark ? 'border-cream/15 bg-ink-soft/60' : 'border-ink/10 bg-cream-soft'}`}
          >
            <h3 className={`font-display text-2xl font-bold ${dark ? 'text-cream' : 'text-ink'}`}>{c.city}</h3>
            <p className={`text-xs mt-1 ${dark ? 'text-cream/55' : 'text-charcoal-mute'}`}>Delivery only · order on Swiggy or Zomato</p>
            <div className="flex gap-2.5 mt-4">
              <AppLink href={c.swiggy} platform="Swiggy" city={c.city} />
              <AppLink href={c.zomato} platform="Zomato" city={c.city} />
            </div>
          </div>
        ))}
      </div>
      <p className={`flex items-start gap-2 text-sm mt-4 ${dark ? 'text-cream/60' : 'text-charcoal-soft'}`}>
        <Info size={16} className={`mt-0.5 shrink-0 ${dark ? 'text-habibi-pale' : 'text-habibi'}`} />
        {HABIBI.availabilityNote}
      </p>
    </div>
  )
}
