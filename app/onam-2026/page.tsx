import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Utensils, ShoppingBag, Bike, ArrowRight, Info } from 'lucide-react'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Reveal from '@/components/ui/Reveal'
import { pageMeta } from '@/lib/seo'
import { ONAM, ONAM_BOOKINGS, OnamBooking } from '@/lib/onam'

export const metadata = pageMeta({
  title: 'Book Onam Sadhya 2026 | Mahabelly',
  description:
    'Book Mahabelly’s Onam Sadhya 2026 — dine-in at Saket, Saidulajab or The Kunj, takeaway from Lado Sarai, or home delivery across Delhi NCR. Secure your seat via Razorpay.',
  path: '/onam-2026',
})

const formatMeta = {
  'Dine-In': { icon: Utensils, order: 1 },
  Takeaway: { icon: ShoppingBag, order: 2 },
  'Home Delivery': { icon: Bike, order: 3 },
} as const

const formats: OnamBooking['format'][] = ['Dine-In', 'Takeaway', 'Home Delivery']

function BookingCard({ b }: { b: OnamBooking }) {
  return (
    <a
      href={b.href}
      target="_blank"
      rel="noopener noreferrer"
      className="lift group flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream-soft p-5 hover:border-gold/50"
    >
      <span className="flex-1 min-w-0">
        <span className="block font-display text-lg font-bold text-ink">{b.label}</span>
        <span className="block text-xs text-charcoal-mute mt-0.5">{b.where}</span>
        <span className="block font-sans text-sm font-semibold text-red mt-1.5">{b.price}</span>
      </span>
      <span className="inline-flex items-center gap-1.5 shrink-0 font-sans text-[11px] font-semibold tracking-widest uppercase bg-ink text-cream-soft rounded-full px-4 py-2.5 group-hover:bg-red transition-colors">
        Book <ExternalLink size={13} />
      </span>
    </a>
  )
}

export default function Onam2026Page() {
  return (
    <>
      {/* Hero with a half-translucent festive backdrop */}
      <header className="relative bg-ink pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Image
          src="/festivals/onam-cover.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" />
        <div className="container-x relative">
          <Reveal>
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: 'Events', href: '/events' }, { label: 'Book Onam ’26' }]}
              tone="dark"
            />
            <span className="kicker text-gold-light block mt-6">Onam Sadhya · {ONAM.year}</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream leading-[1.05] mt-3 max-w-4xl">
              Book your Onam Sadhya
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-cream/75 mt-5 max-w-2xl">{ONAM.dates}</p>
          </Reveal>
        </div>
      </header>

      {/* Booking options */}
      <section className="paper py-14 md:py-20">
        <div className="container-x max-w-3xl space-y-12">
          {formats.map((fmt) => {
            const items = ONAM_BOOKINGS.filter((b) => b.format === fmt)
            if (!items.length) return null
            const Icon = formatMeta[fmt].icon
            return (
              <Reveal key={fmt}>
                <div className="flex items-center gap-3 mb-5">
                  <Icon size={20} className="text-red" />
                  <h2 className="font-display text-2xl font-bold text-ink">{fmt}</h2>
                  <span className="flex-1 h-px bg-ink/10" />
                </div>
                <div className="grid gap-3">
                  {items.map((b) => <BookingCard key={b.href} b={b} />)}
                </div>
              </Reveal>
            )
          })}

          <Reveal className="rounded-2xl bg-ink text-cream/80 p-6">
            <p className="flex items-start gap-2.5 text-sm leading-relaxed">
              <Info size={18} className="text-gold-light mt-0.5 shrink-0" />
              <span>
                Payments are handled securely by <strong className="text-cream">Razorpay</strong>; your email / WhatsApp receipt is your booking confirmation. Tickets are non-refundable and slots are limited — early booking is recommended.
              </span>
            </p>
            <Link href="/sadhya-festivals" className="inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold tracking-widest uppercase text-gold-light mt-4 hover:gap-2.5 transition-all">
              Full details, timings & FAQs <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
