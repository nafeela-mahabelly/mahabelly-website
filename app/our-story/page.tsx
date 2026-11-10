import Image from 'next/image'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { TIMELINE, PEOPLE_GROUPS } from '@/lib/content'

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
        image="/photos/team-garland.jpg"
      />

      {/* Intro */}
      <section className="paper py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/photos/team-mahabelly.jpg" alt="The Mahabelly restaurant team outside the Mahabelly storefront" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="prose-belly">
            {/* The single founder introduction on this page */}
            <p className="text-lg text-charcoal leading-relaxed">
              Mahabelly was founded in Delhi in 2015 by childhood friends <strong>Zachariah Jacob</strong>, <strong>Thomas Fenn</strong> and <strong>Dr. Prem Kiran</strong>. What began as a college dream became a restaurant built with determination, support from friends and family, and a belief that Kerala’s food and culture deserved a larger stage.
            </p>
            <p>
              Thomas has since hung up his boots at Mahabelly. His contribution to its founding years remains a valued part of the story, and the team looks back on that chapter with gratitude.
            </p>
            <p>
              Mahabelly is run by Zachariah Jacob with the support of his family. The mission is bigger than running restaurants. It is about celebrating Kerala through food, festivals, stories, experiences and community. It is also about creating opportunities for the people building Mahabelly and sharing the warmth and depth of Kerala’s culture with people from every background.
            </p>
            <p>
              For Malayalis, Mahabelly is a taste of home. For those discovering Kerala for the first time, it is an invitation to pull up a chair and explore, one honest and generous meal at a time.
            </p>
          </Reveal>
        </div>

        {/* Team photo strip: same 4:3, rounded-2xl treatment as Our People below */}
        <div className="container-x grid sm:grid-cols-2 gap-5 mt-14 md:mt-20">
          {[
            { src: '/photos/team/staff-team-kitchen.jpg', alt: 'The Mahabelly kitchen team in chef whites', caption: 'Our kitchen team' },
            { src: '/photos/team/staff-team-service.jpg', alt: 'The Mahabelly service team in the dining room', caption: 'Our service team' },
          ].map((p, i) => (
            <Reveal key={p.src} delay={i * 0.08}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={p.src} alt={p.alt} fill className="object-cover object-[50%_60%]" sizes="(max-width:640px) 100vw, 50vw" />
                </div>
                <figcaption className="mt-2.5 text-sm text-charcoal-soft">{p.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
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

      {/* Mission */}
      <section className="paper py-20 md:py-28">
        <div className="container-x max-w-4xl">
          <Reveal className="bg-cream-soft border border-ink/10 p-8 md:p-12 text-center">
            <span className="kicker text-red">The Larger Mission</span>
            <blockquote className="font-serif italic text-2xl md:text-3xl text-ink leading-snug mt-4">
              To make Kerala cuisine better understood, and more widely celebrated, beyond the familiar shorthand of ‘South Indian food’.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Our People */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-x">
          <SectionHeading kicker="Our People" title="The people behind the plates" subtitle="Mahabelly is built by chefs, servers, stewards, managers and delivery teams whose care is felt in every meal." />
          <div className="space-y-14 md:space-y-20 mt-16">
            {PEOPLE_GROUPS.filter((g) => g.title !== 'The founders').map((g, i) => (
              <Reveal key={g.title}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${i % 2 ? 'lg:order-2' : ''}`}>
                    <Image src={g.image} alt={g.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                  </div>
                  <div className={i % 2 ? 'lg:order-1' : ''}>
                    <span className="kicker text-red">{`0${i + 1}`}</span>
                    <div className="rule rule-left" />
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ink leading-tight">{g.title}</h3>
                    <p className="text-charcoal-soft leading-relaxed mt-4 text-lg">{g.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center max-w-3xl mx-auto">
            <p className="font-display text-5xl md:text-6xl font-black text-red">≈ 160</p>
            <p className="font-serif italic text-2xl text-ink mt-2">One Mahabelly family.</p>
            <p className="text-charcoal-soft mt-4 leading-relaxed">
              Around 160 people cook, serve, manage, deliver and carry the story forward every day, many of whom have grown with the brand, from steward to captain, from cook to kitchen leader.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-ink text-cream py-16 md:py-20">
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <p className="font-serif italic text-2xl md:text-3xl leading-snug text-cream">
              Our purpose is to share Kerala’s food and culture, bring people together and create opportunities for our team.
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-red-light mt-4">More Malayali food for more people.</p>
          </Reveal>
        </div>
      </section>

      <CTABand title="Come taste the story" subtitle="Reserve a table, order in, or explore the menu." />
    </>
  )
}
