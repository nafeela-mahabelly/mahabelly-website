import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, ExternalLink, Store, Star, MapPin, BookOpen } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import { pageMeta } from '@/lib/seo'
import { LINKS, ORDER_OUTLETS, OrderOutlet } from '@/lib/site'
import { HABIBI } from '@/lib/habibi'
import HabibiCityPicker from '@/components/habibi/HabibiCityPicker'

export const metadata = pageMeta({
  title: 'Order Online | Mahabelly, Mahabelly Canteen & Mahabelly Habibi',
  description:
    'Order Mahabelly and Mahabelly Canteen online with direct delivery, or via Zomato and Swiggy across Delhi NCR and Gurgaon. Mahabelly Habibi delivers online-only in Delhi and Gurgaon.',
  path: '/order',
})

const brandTag = {
  Mahabelly: 'text-red',
  'Mahabelly Canteen': 'text-gold',
} as const

function AppButton({ href, platform }: { href: string; platform: 'Zomato' | 'Swiggy' }) {
  const color = platform === 'Zomato' ? 'bg-[#e23744]' : 'bg-[#fc8019]'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex-1 inline-flex items-center justify-center gap-2 rounded-full ${color} text-white font-sans text-[13px] font-semibold px-4 py-2.5 hover:opacity-90 transition-opacity`}
    >
      {platform}
      <ExternalLink size={14} className="opacity-80 group-hover:translate-x-0.5 transition-transform" />
    </a>
  )
}

function OutletCard({ o }: { o: OrderOutlet }) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl border border-ink/10 bg-cream-soft p-5">
      <div>
        <span className={`font-sans text-[10px] tracking-widest uppercase ${brandTag[o.brand]}`}>{o.brand}</span>
        <h3 className="font-display text-lg font-bold text-ink leading-tight mt-0.5">{o.name}</h3>
        <p className="flex items-center gap-1.5 text-xs text-charcoal-mute mt-1">
          <MapPin size={12} /> {o.area}
        </p>
      </div>
      <div className="flex gap-2.5">
        {o.zomato && <AppButton href={o.zomato} platform="Zomato" />}
        {o.swiggy && <AppButton href={o.swiggy} platform="Swiggy" />}
      </div>
    </div>
  )
}

export default function OrderPage() {
  return (
    <>
      <PageHero
        kicker="Order Online"
        title="Order from Mahabelly"
        subtitle="Direct delivery, or pick your outlet on Zomato or Swiggy (including online-only Mahabelly Habibi)."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Order Online' }]}
      />

      <section className="paper py-16 md:py-24">
        <div className="container-x max-w-3xl space-y-10">
          {/* Direct — recommended */}
          <Reveal>
            <a
              href={LINKS.orderDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="lift group flex items-center gap-4 rounded-2xl bg-red text-cream-soft p-6 hover:bg-red-dark transition-colors"
            >
              <span className="w-12 h-12 rounded-full bg-cream-soft/20 flex items-center justify-center shrink-0">
                <Store size={22} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="flex items-center gap-2">
                  <span className="font-display text-xl font-bold">Order Direct</span>
                  <span className="hidden sm:inline-flex items-center gap-1 font-sans text-[10px] tracking-widest uppercase bg-cream-soft/20 px-2 py-0.5 rounded-full">
                    <Star size={10} className="fill-current" /> Best value
                  </span>
                </span>
                <span className="block text-sm text-cream-soft/80 mt-0.5">Delivery straight from Mahabelly</span>
              </span>
              <ExternalLink size={20} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Reveal>

          {/* Delivery apps by outlet */}
          <Reveal>
            <div className="flex items-center gap-3 mb-1">
              <span className="h-px flex-1 bg-ink/10" />
              <span className="font-sans text-[11px] tracking-widest uppercase text-charcoal-mute">Mahabelly &amp; Canteen on delivery apps</span>
              <span className="h-px flex-1 bg-ink/10" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {ORDER_OUTLETS.map((o, i) => (
              <Reveal key={o.name} delay={(i % 2) * 0.06}>
                <OutletCard o={o} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="flex items-start gap-2 text-sm text-charcoal-mute">
              <ShoppingBag size={16} className="text-red mt-0.5 shrink-0" />
              Ordering direct supports the restaurant most. Delivery areas and availability vary by app and outlet hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mahabelly Habibi — online-only; its own section so it stays separate from the Canteen listing */}
      <section id="habibi" className="bg-sand py-16 md:py-24 scroll-mt-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 mb-10">
              <Image src={HABIBI.logo} alt={`${HABIBI.name} logo`} width={761} height={900} className="w-28 h-auto shrink-0" />
              <div>
                <span className="kicker text-habibi">{HABIBI.descriptor}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mt-1">Order {HABIBI.name}</h2>
                <p className="text-charcoal-soft mt-2 leading-relaxed">
                  Shawarma, Al Faham, Shawai and Mandhi, delivered across serviceable areas in Delhi and Gurgaon.
                </p>
                <Link href={HABIBI.menuHref} className="inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-habibi-dark hover:underline mt-3">
                  <BookOpen size={15} className="shrink-0" /> View Habibi Menu
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <HabibiCityPicker />
          </Reveal>
        </div>
      </section>
    </>
  )
}
