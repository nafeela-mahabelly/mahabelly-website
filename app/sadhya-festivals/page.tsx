import Image from 'next/image'
import { MessageCircle, CalendarCheck } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import FAQ from '@/components/ui/FAQ'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { SADHYA_FAQS } from '@/lib/content'
import { SITE, LINKS, waLink } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Onam Sadhya in Delhi NCR | Mahabelly',
  description:
    'Explore Mahabelly’s traditional Onam Sadhya — booking dates, locations, menus, takeaway options and festival updates across Delhi NCR.',
  path: '/sadhya-festivals',
})

const festivals = [
  { name: 'Onam Sadhya', when: 'August – September', text: 'Kerala’s grand harvest feast — a full vegetarian banana-leaf Sadhya.' },
  { name: 'Vishu Sadhya', when: 'April', text: 'The Malayali new year, marked with a special festive spread.' },
  { name: 'Christmas & Special Menus', when: 'Seasonal', text: 'Syrian Christian classics and limited festive menus through the year.' },
]

export default function SadhyaPage() {
  return (
    <>
      <PageHero
        kicker="Sadhya & Festivals"
        title="A feast that brings everyone together"
        subtitle="One of Delhi NCR’s recognised homes for the Onam Sadhya."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Sadhya & Festivals' }]}
        image="/photos/sadhya-spread.jpg"
      />

      {/* What is a Sadhya */}
      <section className="paper py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden bg-red">
              <Image src="/art/onam-mahabali.jpg" alt="Illustration of King Mahabali and the Onam legend" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="kicker text-red">Many Dishes. One Leaf.</span>
            <div className="rule rule-left" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">What is an Onam Sadhya?</h2>
            <div className="space-y-4 mt-6 text-charcoal-soft leading-relaxed">
              <p>
                The Sadhya is a traditional vegetarian feast served on a banana leaf — a generous procession of rice, curries, thorans, pickles, pappadam and payasams, each with its own place on the leaf.
              </p>
              <p>
                For Mahabelly, it is more than a meal. It is one of the most beautiful expressions of Kerala’s culture: generous, colourful, emotional and deeply rooted in community.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Festivals */}
      <section className="bg-ink text-cream py-20 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="Through the Year" title="Festivals at Mahabelly" tone="light" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {festivals.map((f, i) => (
              <Reveal key={f.name} delay={(i % 3) * 0.08}>
                <div className="h-full bg-ink-soft/60 border border-cream/10 rounded-2xl p-7">
                  <p className="font-sans text-xs tracking-widest uppercase text-gold-light">{f.when}</p>
                  <h3 className="font-display text-2xl font-bold text-cream mt-2">{f.name}</h3>
                  <p className="text-cream/65 mt-3 leading-relaxed text-sm">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Booking / interest */}
          <Reveal className="mt-12 bg-red text-cream-soft rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold">Bookings for the next Sadhya</h3>
              <p className="text-cream-soft/85 mt-2 max-w-xl">
                Dates, slots, prices and outlets are announced ahead of each festival. Register your interest and we’ll let you know as soon as bookings open.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a href={waLink('Hi Mahabelly, please add me to the Sadhya interest list.')} target="_blank" rel="noopener noreferrer" className="btn bg-cream-soft text-red hover:bg-cream">
                <MessageCircle size={15} /> Register interest
              </a>
              <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn border border-cream-soft/60 text-cream-soft hover:bg-cream-soft hover:text-red">
                <CalendarCheck size={15} /> Reserve a table
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="paper py-20 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="Good to Know" title="Sadhya FAQs" />
          <div className="mt-12">
            <FAQ items={SADHYA_FAQS} />
          </div>
          <p className="text-center text-sm text-charcoal-mute mt-8">
            Still have a question? Call us at{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-red hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </section>

      <CTABand title="Celebrate with Kerala" subtitle="Reserve for the next festival, or enquire about a Sadhya at your event." showExplore={false} />
    </>
  )
}
