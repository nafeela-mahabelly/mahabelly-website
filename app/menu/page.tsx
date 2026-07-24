import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { MENUS } from '@/lib/menus'

export const metadata = pageMeta({
  title: 'Menus | Mahabelly & Mahabelly Canteen',
  description:
    'Browse Mahabelly’s web-readable menus by outlet — the flagship Saket dining menu and the Mahabelly Canteen menus at Saidulajab and Vasant Kunj.',
  path: '/menu',
})

const groups = [
  { brand: 'mahabelly' as const, title: 'Mahabelly', blurb: 'The full flagship dining experience — coastal curries, seafood, biryani and hidden gems.' },
  { brand: 'canteen' as const, title: 'Mahabelly Canteen', blurb: 'Everyday Kerala meals, tiffin and Kerala–Gulf grills, served without ceremony.' },
]

export default function MenuIndex() {
  return (
    <>
      <PageHero
        kicker="Menus"
        title="Choose your outlet"
        subtitle="Two brands, one soul. Pick a menu to explore."
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
                      <Link
                        href={`/menu/${m.slug}`}
                        className="lift group flex flex-col h-full bg-cream-soft border border-ink/10 rounded-2xl hover:border-red/40 hover:shadow-lg p-7"
                      >
                        <BookOpen size={26} className={g.brand === 'canteen' ? 'text-gold' : 'text-red'} />
                        <h3 className="font-display text-2xl font-bold text-ink mt-5">{m.outletName}</h3>
                        <p className="font-serif italic text-sm text-charcoal-soft mt-1">{m.kicker}</p>
                        <p className="text-sm text-charcoal-soft mt-4 leading-relaxed flex-1">{m.intro}</p>
                        <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold tracking-widest uppercase text-red mt-6 group-hover:gap-2.5 transition-all">
                          View menu <ArrowRight size={14} />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}

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
