import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, MapPin, Clock, Utensils, ShoppingBag, Bike, Info, Baby } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import FAQ from '@/components/ui/FAQ'
import { pageMeta } from '@/lib/seo'
import { SITE, LINKS, mapsUrl } from '@/lib/site'
import {
  ONAM, ONAM_DINEIN, ONAM_TAKEAWAY, ONAM_DELIVERY,
  ONAM_SLOTS, ONAM_BOOKING_INFO, ONAM_CHILD_POLICY, ONAM_TERMS, ONAM_FAQS,
} from '@/lib/onam'

export const metadata = pageMeta({
  title: 'Onam Sadhya 2026 in Delhi NCR | Mahabelly',
  description:
    'Mahabelly’s Onam Sadhya 2026 — 24–27 August. Dine-in at Saket, Saidulajab & The Kunj, takeaway from Lado Sarai, or home delivery across Delhi NCR. Book online.',
  path: '/sadhya-festivals',
})

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-soft leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-red mt-2 shrink-0" /> {t}
        </li>
      ))}
    </ul>
  )
}

export default function SadhyaPage() {
  return (
    <>
      <PageHero
        kicker={`Onam Sadhya · ${ONAM.year}`}
        title="A feast that brings everyone together"
        subtitle={ONAM.dates}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Events', href: '/events' }, { label: 'Onam Sadhya ’26' }]}
      />

      {/* Banner */}
      <section className="bg-ink">
        <div className="container-x py-8">
          <Reveal>
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '2200 / 814' }}>
              <Image src={ONAM.banner} alt="Mahabelly Onam Sadhya 2026 — menu & details" fill className="object-cover" sizes="100vw" priority />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview + book */}
      <section className="paper py-14 md:py-20">
        <div className="container-x grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <Reveal>
            <span className="kicker text-red">Event Overview</span>
            <div className="rule rule-left" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">The Onam Sadhya, on a banana leaf.</h2>
            <p className="text-charcoal-soft leading-relaxed mt-5 text-lg">{ONAM.intro}</p>
            <div className="flex flex-wrap gap-2.5 mt-6">
              {['Dine-In', 'Takeaway', 'Home Delivery'].map((f) => (
                <span key={f} className="font-sans text-[11px] tracking-widest uppercase bg-sand text-charcoal-soft px-3 py-1.5 rounded-full">{f}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-red text-cream-soft p-7 text-center">
            <Sparkles size={26} className="mx-auto text-gold-light" />
            <p className="font-display text-2xl font-bold mt-3">Bookings are open</p>
            <p className="text-sm text-cream-soft/85 mt-2">{ONAM.dates}</p>
            <Link href={LINKS.onam} className="btn bg-cream-soft text-red hover:bg-cream w-full mt-5">
              <Sparkles size={15} /> Book Onam ’26
            </Link>
            <p className="text-[11px] text-cream-soft/70 mt-3">Secure checkout via Razorpay · non-refundable</p>
          </Reveal>
        </div>
      </section>

      {/* Onam Sadhya on a banana leaf */}
      <section className="paper pt-0 pb-12 md:pb-16">
        <div className="container-x">
          <Reveal className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
              <Image
                src="/photos/onam-real.jpg"
                alt="A Mahabelly Onam Sadhya laid out on a banana leaf"
                width={1410}
                height={1612}
                className="w-full h-auto object-cover"
                sizes="(max-width:768px) 100vw, 768px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="How to Enjoy It" title="Three ways to Sadhya" />

          {/* Dine-in */}
          <Reveal className="mt-14">
            <h3 className="flex items-center gap-2.5 font-display text-2xl font-bold text-ink mb-6"><Utensils size={22} className="text-red" /> Dine-In</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {ONAM_DINEIN.map((d) => (
                <div key={d.name} className="flex flex-col rounded-2xl border border-ink/10 bg-cream-soft p-6">
                  <h4 className="font-display text-lg font-bold text-ink">{d.name}</h4>
                  <p className="flex items-start gap-2 text-xs text-charcoal-soft mt-2 leading-relaxed">
                    <MapPin size={13} className="text-red mt-0.5 shrink-0" /> {d.address}
                  </p>
                  <p className="font-sans text-sm font-semibold text-red mt-3">{d.price}</p>
                  {d.note && <p className="text-xs text-charcoal-mute mt-1.5">{d.note}</p>}
                  <a href={mapsUrl(d.mapsQuery)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold tracking-widest uppercase text-red mt-4 hover:gap-2.5 transition-all">
                    Directions <MapPin size={12} />
                  </a>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mt-6">
              <div className="rounded-2xl border border-ink/10 bg-cream-soft p-6">
                <p className="flex items-center gap-2 kicker text-red"><Clock size={14} /> Time Slots</p>
                <List items={ONAM_SLOTS} />
              </div>
              <div className="rounded-2xl border border-ink/10 bg-cream-soft p-6">
                <p className="flex items-center gap-2 kicker text-red"><Info size={14} /> Booking Info</p>
                <List items={ONAM_BOOKING_INFO} />
              </div>
              <div className="rounded-2xl border border-ink/10 bg-cream-soft p-6">
                <p className="flex items-center gap-2 kicker text-red"><Baby size={14} /> Child Policy</p>
                <List items={ONAM_CHILD_POLICY} />
              </div>
            </div>
          </Reveal>

          {/* Takeaway + Delivery */}
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink/10 bg-cream-soft p-7">
                <h3 className="flex items-center gap-2.5 font-display text-2xl font-bold text-ink mb-4"><ShoppingBag size={22} className="text-red" /> Takeaway</h3>
                <p className="text-sm font-semibold text-ink">{ONAM_TAKEAWAY.location}</p>
                <p className="flex items-start gap-2 text-xs text-charcoal-soft mt-1.5"><MapPin size={13} className="text-red mt-0.5 shrink-0" /> {ONAM_TAKEAWAY.address}</p>
                <p className="font-sans text-sm font-semibold text-red mt-3">{ONAM_TAKEAWAY.price}</p>
                <p className="kicker text-charcoal-mute mt-5">Pickup Timing</p>
                <List items={ONAM_TAKEAWAY.timings} />
                <List items={ONAM_TAKEAWAY.notes} />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-ink/10 bg-cream-soft p-7">
                <h3 className="flex items-center gap-2.5 font-display text-2xl font-bold text-ink mb-4"><Bike size={22} className="text-red" /> Home Delivery</h3>
                <p className="text-sm font-semibold text-ink">{ONAM_DELIVERY.radius}</p>
                <p className="font-sans text-sm font-semibold text-red mt-2">{ONAM_DELIVERY.price}</p>
                <p className="text-xs text-charcoal-mute mt-1.5">{ONAM_DELIVERY.extra}</p>
                <p className="kicker text-charcoal-mute mt-5">Delivery Timing</p>
                <List items={ONAM_DELIVERY.timings} />
                <List items={ONAM_DELIVERY.notes} />
              </div>
            </Reveal>
          </div>

          <Reveal className="text-center mt-10">
            <Link href={LINKS.onam} className="btn bg-gold text-ink hover:bg-gold-light">
              <Sparkles size={15} /> Book Onam ’26
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Sadhya leaf guide */}
      <section className="paper py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="kicker text-red">On the Leaf</span>
            <div className="rule rule-left" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">Twenty-three dishes, one leaf.</h2>
            <p className="text-charcoal-soft leading-relaxed mt-5">
              A Sadhya is a generous procession of curries, thorans, pickles, pappadam and payasams — each with its own place on the banana leaf. Here’s your guide to the spread.
            </p>
            <p className="text-sm text-charcoal-mute mt-4">
              As a rule of thumb: round one is rice, parippu, ney &amp; pappadam; round two with sambar; round three with pulissery. Be creative with rasam and pacha moru.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-ink/10 bg-cream-soft" style={{ aspectRatio: '1131 / 1600' }}>
              <Image src={ONAM.leafGuide} alt="Guide to the 23 dishes of the Mahabelly Onam Sadhya" fill className="object-contain" sizes="(max-width:1024px) 100vw, 40vw" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-ink text-cream py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="Good to Know" title="Onam Sadhya FAQs" tone="light" />
          <div className="mt-12 bg-cream-soft rounded-2xl p-2 md:p-6">
            <FAQ items={ONAM_FAQS} />
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="paper py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <SectionHeading kicker="The Fine Print" title="Terms & conditions" align="left" className="!mx-0 mb-6" />
          <ol className="space-y-3">
            {ONAM_TERMS.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-charcoal-soft">
                <span className="font-display font-bold text-red">{i + 1}.</span> {t}
              </li>
            ))}
          </ol>
          <p className="text-sm text-charcoal-mute mt-8">
            Questions? Call <a href={`tel:${SITE.phoneRaw}`} className="text-red hover:underline">{SITE.phone}</a> or email{' '}
            <a href={`mailto:${SITE.email}`} className="text-red hover:underline">{SITE.email}</a>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red text-cream-soft py-14">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Let the feast begin. 🌼</h2>
            <p className="text-cream-soft/85 mt-2">{ONAM.dates}</p>
            <Link href={LINKS.onam} className="btn bg-cream-soft text-red hover:bg-cream mt-6">
              <Sparkles size={15} /> Book Onam ’26
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
