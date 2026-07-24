import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import OutletCard from '@/components/ui/OutletCard'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { OUTLETS } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Mahabelly Canteen | Kerala Meals, Al Faham & Shawarma',
  description:
    'Discover Mahabelly Canteen’s casual Kerala menu — from comforting Meals to Kerala-style Al Faham, Shawaya, Shawarma and Mandhi.',
  path: '/canteen',
})

const distinctions = [
  'Everyday meals, not a fine-dining occasion',
  'Affordable, informal and quick',
  'Kerala tiffin, thalis and combos',
  'Kerala–Gulf grills: Al Faham, Shawaya, Mandhi',
]

export default function CanteenPage() {
  const canteens = OUTLETS.filter((o) => o.brand === 'canteen')

  return (
    <>
      <PageHero
        kicker="Kerala Meets the Gulf"
        title="Mahabelly Canteen"
        subtitle="Everyday Kerala. Served without ceremony, but never without soul."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Mahabelly Canteen' }]}
        image="/photos/sadhya-serving.jpg"
      />

      {/* Intro */}
      <section className="paper py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="flex justify-center order-2 lg:order-1">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-cream-soft border border-gold/30 flex items-center justify-center shadow-xl">
              <Image src="/brand/canteen-kathakali.png" alt="Mahabelly Canteen" width={340} height={340} className="w-56 md:w-64 h-auto object-contain" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
              A distinct format, with its own purpose.
            </h2>
            <div className="space-y-4 mt-6 text-charcoal-soft leading-relaxed">
              <p>
                Almost every Malayali family has a Gulf story, and that connection has transformed the way Kerala eats. Mahabelly Canteen celebrates it — Kerala’s own versions of Al Faham, Shawaya and Shawarma sit happily beside comforting Kerala Meals and tiffin classics.
              </p>
              <p>
                The Canteen isn’t a lesser Mahabelly. It’s the everyday one — quicker, more casual, and built for the meals you return to again and again.
              </p>
            </div>
            <ul className="mt-6 space-y-2.5">
              {distinctions.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <Check size={17} className="text-gold mt-0.5 shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Canteen outlets */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="Canteen Outlets" title="Find a Canteen" align="left" className="!mx-0 mb-10" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canteens.map((o, i) => (
              <Reveal key={o.slug} delay={(i % 3) * 0.08}>
                <OutletCard outlet={o} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/menu/canteen-saidulajab" className="btn-ghost !text-gold hover:!text-gold-light group">
              View the Canteen menu <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand title="Everyday Kerala, on demand" subtitle="Order the Canteen in, or find your nearest one." showExplore />
    </>
  )
}
