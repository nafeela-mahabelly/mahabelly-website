import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Check } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import OutletCard from '@/components/ui/OutletCard'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { OUTLETS } from '@/lib/site'
import { CANTEEN } from '@/lib/canteen'

export const metadata = pageMeta({
  title: 'Mahabelly Canteen | Everyday Kerala Food in Delhi',
  description:
    'Discover everyday Kerala food at Mahabelly Canteen in Saidulajab and Vasant Kunj. Explore the menus, find an outlet and order online.',
  path: '/canteen',
})

// Everyday-Kerala Canteen dishes (real Canteen photography from the outlet menus)
const everyday = [
  { name: 'Porotta & Chicken Curry', image: '/dishes/said-porotta-chicken.jpg' },
  { name: 'Appam & Vegetable Kurma', image: '/dishes/vk-appam-kurma.jpg' },
  { name: 'Kizhi Porotta', image: '/dishes/said-kizhi.jpg' },
  { name: 'Kanji & Payar', image: '/dishes/vk-kanji.jpg' },
]

export default function CanteenPage() {
  const canteens = OUTLETS.filter((o) => o.brand === 'canteen')

  return (
    <>
      <PageHero
        kicker={CANTEEN.eyebrow}
        title="Mahabelly Canteen"
        subtitle={CANTEEN.line}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Mahabelly Canteen' }]}
        image="/dishes/said-porotta-chicken.jpg"
      />

      {/* Intro */}
      <section className="paper py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="flex justify-center order-2 lg:order-1">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-cream-soft border border-gold/30 flex items-center justify-center shadow-xl">
              <Image src="/brand/canteen-logo.png" alt="Mahabelly Canteen" width={340} height={340} className="w-56 md:w-60 h-auto object-contain" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
              {CANTEEN.heading}
            </h2>
            <p className="mt-6 text-charcoal-soft leading-relaxed">{CANTEEN.intro}</p>
            <ul className="mt-6 space-y-2.5">
              {CANTEEN.strip.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <Check size={17} className="text-gold mt-0.5 shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Everyday Kerala, in pictures */}
      <section className="paper pb-16 md:pb-24 -mt-4">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {everyday.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <figure className="overflow-hidden rounded-2xl border border-ink/10 bg-cream-soft">
                <div className="relative aspect-square">
                  <Image src={d.image} alt={`${d.name} at Mahabelly Canteen`} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
                </div>
                <figcaption className="px-3 py-2.5 font-sans text-xs font-semibold text-ink">{d.name}</figcaption>
              </figure>
            </Reveal>
          ))}
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
            <Link href="/menu/canteen-saidulajab" className="btn-ink w-full sm:w-auto">
              <BookOpen size={15} className="shrink-0" /> View the Canteen menu
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand title="Everyday Kerala, on demand" subtitle="Order the Canteen in, or find your nearest one." showExplore />
    </>
  )
}
