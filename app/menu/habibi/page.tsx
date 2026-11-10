import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import HabibiCityPicker from '@/components/habibi/HabibiCityPicker'
import { pageMeta } from '@/lib/seo'
import { HABIBI, HABIBI_DISHES } from '@/lib/habibi'

// Mahabelly Habibi — online-only, delivery-only brand.
// No Reserve a Table, no dine-in directions, no CTABand (it offers Reserve).
export const metadata = pageMeta({
  title: 'Mahabelly Habibi Menu | Shawarma, Al Faham & Mandhi in Delhi & Gurgaon',
  description:
    'Mahabelly Habibi: Kerala meets the Gulf. Shawarma, Al Faham, Shawai and Mandhi, online-only across serviceable areas in Delhi and Gurgaon. Order on Swiggy or Zomato.',
  path: '/menu/habibi',
})

export default function HabibiMenuPage() {
  return (
    <>
      <PageHero
        kicker={`${HABIBI.name} · ${HABIBI.descriptor}`}
        title="Kerala’s Gulf favourites, with a home of their own"
        subtitle="Shawarma, Al Faham, Shawai and Mandhi, delivered across Delhi and Gurgaon."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Menu', href: '/menu' }, { label: HABIBI.name }]}
        image="/photos/habibi/al-faham.jpg"
      />

      {/* Brand introduction */}
      <section className="paper py-14 md:py-20">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center">
          <Reveal className="flex justify-center">
            <Image src={HABIBI.logo} alt={`${HABIBI.name}, ${HABIBI.tagline}`} width={761} height={900} className="w-56 md:w-72 h-auto" priority />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="kicker text-habibi">{HABIBI.tagline}</span>
            <div className="rule rule-left" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">{HABIBI.headline}</h2>
            <div className="space-y-4 mt-6 text-charcoal-soft leading-relaxed">
              {HABIBI.story.map((p) => <p key={p}>{p}</p>)}
            </div>
            <Link href="#order" className="btn bg-habibi text-white hover:bg-habibi-dark mt-8 w-full sm:w-auto">
              <ShoppingBag size={15} className="shrink-0" /> Order Habibi
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Signature dishes — real Habibi photography */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="Signature Dishes" title="From the Habibi grill" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-12">
            {HABIBI_DISHES.map((d, i) => (
              <Reveal key={d.name} delay={(i % 3) * 0.06}>
                <figure className="h-full overflow-hidden rounded-2xl border border-ink/10 bg-cream-soft">
                  <div className="relative aspect-square">
                    <Image src={d.image} alt={d.name} fill className="object-cover" sizes="(max-width:1024px) 50vw, 33vw" />
                  </div>
                  <figcaption className="p-4 sm:p-5">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-ink">{d.name}</h3>
                    <p className="text-xs sm:text-sm text-charcoal-soft mt-1 leading-relaxed">{d.desc}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="text-sm text-charcoal-mute text-center mt-8">
            The full Habibi menu, with live prices and availability, is on Swiggy and Zomato.
          </p>
        </div>
      </section>

      {/* Order — city selector */}
      <section id="order" className="paper py-16 md:py-24 scroll-mt-24">
        <div className="container-x max-w-3xl">
          <SectionHeading kicker="Order Habibi" title="Delivered to your door" subtitle="Online-only. Pick your city, then your app." align="left" className="!mx-0 mb-10" />
          <HabibiCityPicker />
        </div>
      </section>
    </>
  )
}
