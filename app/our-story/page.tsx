import Image from 'next/image'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { TIMELINE, FOUNDERS } from '@/lib/content'

export const metadata = pageMeta({
  title: 'Our Story | Mahabelly Kerala Restaurants',
  description:
    'How three childhood friends founded Mahabelly in Delhi in 2015 and built a restaurant brand celebrating Kerala’s food and culture.',
  path: '/our-story',
})

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        kicker="Our Story"
        title="More than a restaurant"
        subtitle="Mahabelly began as a craving for home and grew into a mission to give Kerala cuisine the larger stage it deserves."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Our Story' }]}
        image="/photos/storefront-onam.jpg"
      />

      {/* Intro */}
      <section className="paper py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/photos/storefront-onam.jpg" alt="Mahabelly’s Delhi home during Onam" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="prose-belly">
            <p className="text-lg text-charcoal leading-relaxed">
              Mahabelly was founded in Delhi in 2015 by three childhood friends — <strong>Zachariah Jacob</strong>, <strong>Thomas Fenn</strong> and <strong>Dr Prem Kiran</strong> — who shared a love for Kerala food and a belief that its story deserved a larger stage.
            </p>
            <p>
              At a time when South Indian food outside the region was still largely understood through dosa, idli, vada and sambar, Mahabelly set out to introduce diners to a far richer culinary world: coastal curries, Syrian Christian classics, Malabar Muslim traditions, temple food, toddy-shop favourites, street food and the many flavours shaped by Kerala’s long relationship with the Gulf.
            </p>
            <p>
              Today, Mahabelly is run by Zachariah Jacob and his family, supported by a growing team that continues to carry the brand’s original purpose forward — to serve Kerala with honesty, warmth and soul.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="container-x">
          <SectionHeading kicker="The Journey" title="One story, many milestones" tone="light" />
          <ol className="mt-16 max-w-3xl mx-auto relative border-l border-cream/15 pl-8 md:pl-10 space-y-12">
            {TIMELINE.map((t, i) => (
              <Reveal key={i} delay={0.05}>
                <li className="relative">
                  <span className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-red border-4 border-ink" />
                  <p className="font-display text-3xl font-black text-red-light">{t.year}</p>
                  <h3 className="font-sans text-base font-bold uppercase tracking-wide text-cream mt-1">{t.title}</h3>
                  <p className="text-cream/65 mt-2 leading-relaxed">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Founders + mission */}
      <section className="paper py-20 md:py-28">
        <div className="container-x max-w-4xl">
          <Reveal className="text-center">
            <span className="kicker text-red">The Founders</span>
            <div className="rule" />
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
              {FOUNDERS.names.join(' · ')}
            </p>
            <p className="text-charcoal-soft leading-relaxed mt-6 max-w-2xl mx-auto">{FOUNDERS.text}</p>
          </Reveal>

          <Reveal className="mt-14 bg-cream-soft border border-ink/10 p-8 md:p-12 text-center">
            <span className="kicker text-red">The Larger Mission</span>
            <blockquote className="font-serif italic text-2xl md:text-3xl text-ink leading-snug mt-4">
              To make Kerala cuisine better understood, and more widely celebrated — beyond the familiar shorthand of ‘South Indian food’.
            </blockquote>
          </Reveal>
        </div>
      </section>

      <CTABand title="Come taste the story" subtitle="Reserve a table, order in, or explore the menu." />
    </>
  )
}
