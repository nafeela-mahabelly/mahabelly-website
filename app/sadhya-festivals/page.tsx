import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarCheck, ShoppingBag } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import ReserveButton from '@/components/reserve/ReserveButton'
import { pageMeta } from '@/lib/seo'
import { LINKS } from '@/lib/site'
import { ONAM_2026_ARCHIVE, SADHYA_GALLERY, SADHYA_LEAF_GUIDE } from '@/lib/onam'

// Non-booking Sadhya story & gallery. Onam 2026 has concluded — no booking
// or payment links live here; the event itself is archived under /events.
export const metadata = pageMeta({
  title: 'Sadhya & Festivals | Mahabelly Delhi NCR',
  description:
    'The story of the Onam Sadhya at Mahabelly, Kerala’s grand vegetarian feast on a banana leaf. Memories from Onam 2026 and a guide to the dishes on the leaf.',
  path: '/sadhya-festivals',
})

export default function SadhyaPage() {
  return (
    <>
      <PageHero
        kicker="Sadhya & Festivals"
        title="A feast that brings everyone together"
        subtitle="Kerala’s grand vegetarian feast, served on a banana leaf."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Events', href: '/events' }, { label: 'Sadhya & Festivals' }]}
      />

      {/* Story */}
      <section className="paper py-14 md:py-20">
        <div className="container-x grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <Reveal>
            <span className="kicker text-red">The Sadhya</span>
            <div className="rule rule-left" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">The Onam Sadhya, on a banana leaf.</h2>
            <p className="text-charcoal-soft leading-relaxed mt-5 text-lg">
              For Mahabelly, the Onam Sadhya is more than a festive meal. It is one of the most beautiful expressions of Kerala’s culture: generous, colourful, emotional and deeply rooted in community.
            </p>
            <p className="text-charcoal-soft leading-relaxed mt-4">
              Over the years, Mahabelly has become one of Delhi NCR’s recognised homes for the Sadhya. For Malayalis, it is a reminder of home. For many others, it is their first introduction to the extraordinary depth of Kerala’s vegetarian cuisine.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-ink text-cream p-7">
            <span className="kicker text-gold-light">Past Event</span>
            <h3 className="font-display text-2xl font-bold mt-2">{ONAM_2026_ARCHIVE.title}</h3>
            <p className="text-sm text-cream/75 mt-3 leading-relaxed">{ONAM_2026_ARCHIVE.closedNote}</p>
            <Link href="/events#past-events" className="inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold tracking-widest uppercase text-gold-light mt-5 hover:gap-2.5 transition-all">
              All past events <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Memories gallery */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="Memories from the Feast" title="Onam at Mahabelly" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-12">
            {SADHYA_GALLERY.map((s, i) => (
              <Reveal key={s.src} delay={(i % 3) * 0.05}>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-ink/10">
                  <Image src={s.src} alt={s.alt} fill className="object-cover" style={{ objectPosition: `50% ${s.focus ?? '50%'}` }} sizes="(max-width:768px) 50vw, 33vw" />
                </div>
              </Reveal>
            ))}
          </div>
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
              A Sadhya is a generous procession of curries, thorans, pickles, pappadam and payasams, each with its own place on the banana leaf. Here’s your guide to the spread.
            </p>
            <p className="text-sm text-charcoal-mute mt-4">
              As a rule of thumb: round one is rice, parippu, ney &amp; pappadam; round two with sambar; round three with pulissery. Be creative with rasam and pacha moru.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-ink/10 bg-cream-soft" style={{ aspectRatio: '1131 / 1600' }}>
              <Image src={SADHYA_LEAF_GUIDE} alt="Guide to the dishes of the Mahabelly Onam Sadhya" fill className="object-contain" sizes="(max-width:1024px) 100vw, 40vw" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA — everyday actions, no festival booking */}
      <section className="bg-red text-cream-soft py-14">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Kerala, all year round. 🌼</h2>
            <p className="text-cream-soft/85 mt-2">Stay in touch for future celebrations, or join us at the table today.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <ReserveButton className="btn bg-cream-soft text-red hover:bg-cream">
                <CalendarCheck size={15} /> Reserve a Table
              </ReserveButton>
              <Link href={LINKS.orderOnline} className="btn-outline">
                <ShoppingBag size={15} /> Order Online
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
