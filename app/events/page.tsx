import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, CalendarDays } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { LINKS } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Events & Festivals | Mahabelly Delhi NCR',
  description:
    'Mahabelly’s festivals and special events across Delhi NCR — starting with the Onam Sadhya 2026. Book your seat for Kerala’s grand feast.',
  path: '/events',
})

// Festivals & events. Add new entries here as they’re announced.
const EVENTS = [
  {
    title: 'Onam Sadhya ’26',
    when: '24 Aug (Dinner) · 25–27 Aug (Lunch & Dinner)',
    blurb: 'Kerala’s grand vegetarian feast, served on a banana leaf — dine-in, takeaway or home delivery across Delhi NCR.',
    image: '/festivals/onam-banner.jpg',
    href: '/sadhya-festivals',
    live: true,
  },
]

export default function EventsPage() {
  return (
    <>
      <PageHero
        kicker="Events"
        title="Festivals at Mahabelly"
        subtitle="Kerala’s celebrations, brought to your table across Delhi NCR."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Events' }]}
        image="/photos/sadhya-spread.jpg"
      />

      <section className="paper py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="What’s On" title="Upcoming events" align="left" className="!mx-0 mb-12" />

          <div className="grid gap-6 md:grid-cols-2">
            {EVENTS.map((e) => (
              <Reveal key={e.title}>
                <Link
                  href={e.href}
                  className="lift group flex flex-col h-full overflow-hidden rounded-2xl border border-ink/10 bg-cream-soft"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={e.image} alt={e.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 50vw" />
                    {e.live && (
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-gold text-ink font-sans text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                        <Sparkles size={11} /> Booking open
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="flex items-center gap-1.5 font-sans text-[11px] tracking-widest uppercase text-red">
                      <CalendarDays size={13} /> {e.when}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-ink mt-2">{e.title}</h3>
                    <p className="text-sm text-charcoal-soft mt-2 leading-relaxed">{e.blurb}</p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold tracking-widest uppercase text-red mt-5 group-hover:gap-2.5 transition-all">
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            {/* Placeholder for future events */}
            <Reveal>
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[220px] rounded-2xl border border-dashed border-ink/20 bg-transparent p-8">
                <Sparkles size={24} className="text-gold" />
                <h3 className="font-display text-xl font-bold text-ink mt-3">More celebrations coming</h3>
                <p className="text-sm text-charcoal-soft mt-2 max-w-xs">
                  Vishu, Christmas and other special menus will appear here through the year.
                </p>
                <Link href={LINKS.onam} className="btn bg-gold text-ink hover:bg-gold-light mt-5">
                  <Sparkles size={14} /> Book Onam ’26
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand title="Celebrate Kerala with us" subtitle="Reserve for the next festival, or enquire about a Sadhya at your event." showExplore={false} />
    </>
  )
}
