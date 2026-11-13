import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import MenuCard, { outletMenuCard } from '@/components/ui/MenuCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { MENUS } from '@/lib/menus'
import { HABIBI } from '@/lib/habibi'

export const metadata = pageMeta({
  title: 'Menus | Mahabelly, Mahabelly Canteen & Mahabelly Habibi',
  description:
    'Browse Mahabelly’s web-readable menus by outlet: the flagship Saket dining menu, the Mahabelly Canteen menus at Saidulajab and Vasant Kunj, and online-only Mahabelly Habibi.',
  path: '/menu',
})

const groups = [
  { brand: 'mahabelly' as const, title: 'Mahabelly', blurb: 'The full Kerala dining experience: coastal curries, seafood, biriyani and hidden gems.' },
  { brand: 'canteen' as const, title: 'Mahabelly Canteen', blurb: 'Everyday Kerala food: Kerala Meals, tiffin favourites, Porotta, curries and teatime bites, served without ceremony.' },
]

export default function MenuIndex() {
  return (
    <>
      <PageHero
        kicker="Menus"
        title="Choose your outlet"
        subtitle="Three brands, one soul. Pick a menu to explore."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Menu' }]}
        image="/photos/sadhya-serving.jpg"
      />

      <section className="paper py-16 md:py-24">
        <div className="container-x space-y-16">
          {groups.map((g) => {
            const menus = MENUS.filter((m) => m.brand === g.brand)
            return (
              <div key={g.brand}>
                <SectionHeading kicker={g.title} title={g.title === 'Mahabelly' ? 'Flagship Dining' : 'The Canteen'} subtitle={g.blurb} align="left" className="!mx-0 mb-10" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menus.map((m, i) => (
                    <Reveal key={m.slug} delay={(i % 3) * 0.08}>
                      <MenuCard {...outletMenuCard(m)} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Mahabelly Habibi — its own group, online-only (kept out of the Canteen section) */}
          <div>
            <SectionHeading
              kicker="Mahabelly Habibi"
              title="Kerala x Gulf"
              subtitle="A specialist Kerala-Arabic menu of Shawarma, Al Faham, Shawai and Mandhi, delivered across serviceable areas in Delhi and Gurgaon."
              align="left"
              className="!mx-0 mb-10"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Reveal>
                <MenuCard
                  href={HABIBI.menuHref}
                  name={HABIBI.name}
                  kicker={HABIBI.descriptor}
                  intro="Kerala’s Gulf favourites with a home of their own. See the signature dishes, then order from your city on Swiggy or Zomato."
                  accent="habibi"
                />
              </Reveal>
            </div>
          </div>

          <Reveal className="bg-ink text-cream/70 rounded-3xl p-8 text-center">
            <p className="font-serif italic text-lg text-cream">
              Menus, prices and availability vary by outlet and may change.
            </p>
            <p className="text-sm mt-2">
              Our Gurgaon (DLF Phase IV) kitchen serves the Mahabelly menu for delivery, and our O.P. Jindal University outlet serves a campus selection.{' '}
              <Link href="/locations" className="text-red-light hover:underline">See all locations</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
