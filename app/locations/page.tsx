import PageHero from '@/components/layout/PageHero'
import OutletCard from '@/components/ui/OutletCard'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { OUTLETS } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Mahabelly Locations | Delhi NCR, Gurgaon & Sonipat',
  description:
    'Find Mahabelly and Mahabelly Canteen locations across Delhi NCR — menus, timings, directions, reservations and online ordering links.',
  path: '/locations',
})

const cities = ['New Delhi', 'Gurugram', 'Sonipat']

export default function LocationsPage() {
  return (
    <>
      <PageHero
        kicker="Find Us"
        title="Kerala, wherever you are in the NCR"
        subtitle="Six outlets across Delhi NCR and Sonipat."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
        image="/photos/catering-lights.jpg"
      />

      <section className="paper py-16 md:py-24">
        <div className="container-x space-y-16">
          {cities.map((city) => {
            const outlets = OUTLETS.filter((o) => o.city === city)
            if (!outlets.length) return null
            return (
              <div key={city}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-display text-2xl font-bold text-ink">{city}</h2>
                  <span className="flex-1 h-px bg-ink/10" />
                  <span className="font-sans text-xs tracking-widest uppercase text-charcoal-mute">
                    {outlets.length} {outlets.length > 1 ? 'outlets' : 'outlet'}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {outlets.map((o, i) => (
                    <Reveal key={o.slug} delay={(i % 3) * 0.08}>
                      <OutletCard outlet={o} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTABand title="Can’t decide?" subtitle="Reserve a table or order from your nearest outlet." showExplore={false} />
    </>
  )
}
