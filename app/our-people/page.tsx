import Image from 'next/image'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { PEOPLE_GROUPS } from '@/lib/content'

export const metadata = pageMeta({
  title: 'Our People | The Mahabelly Family',
  description:
    'Meet the people behind Mahabelly — the founders, the family that runs it today, and the ~160-strong team who serve Kerala with soul every day.',
  path: '/our-people',
})

export default function OurPeoplePage() {
  return (
    <>
      <PageHero
        kicker="Our People"
        title="The people behind the plates"
        subtitle="Mahabelly is built by chefs, servers, stewards, managers and delivery teams whose care is felt in every meal."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Our People' }]}
        image="/photos/team-garland.jpg"
      />

      <section className="paper py-16 md:py-24">
        <div className="container-x space-y-16 md:space-y-24">
          {PEOPLE_GROUPS.map((g, i) => (
            <Reveal key={g.title}>
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? 'lg:order-2' : ''}`}>
                  <Image src={g.image} alt={g.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                </div>
                <div className={i % 2 ? 'lg:order-1' : ''}>
                  <span className="kicker text-red">{`0${i + 1}`}</span>
                  <div className="rule rule-left" />
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">{g.title}</h2>
                  <p className="text-charcoal-soft leading-relaxed mt-5 text-lg">{g.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 160 family */}
      <section className="bg-ink text-cream py-20 md:py-24">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="font-display text-6xl md:text-7xl font-black text-red-light">≈ 160</p>
            <p className="font-serif italic text-2xl text-cream/80 mt-3">One Mahabelly family.</p>
            <p className="text-cream/60 mt-6 leading-relaxed">
              Around 160 people cook, serve, manage, deliver and carry the story forward every day. Many have grown with the brand — from steward to captain, from cook to kitchen leader. Their care is the real recipe.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand title="Meet us in person" subtitle="Reserve a table and let our team look after you." showExplore />
    </>
  )
}
