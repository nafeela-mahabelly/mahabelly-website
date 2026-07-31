import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, MapPin } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import OutletCard from '@/components/ui/OutletCard'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { OUTLETS } from '@/lib/site'
import { MENUS } from '@/lib/menus'

export const metadata = pageMeta({
  title: 'Our Brands, Menus & Locations | Mahabelly & Mahabelly Canteen',
  description:
    'Two Kerala brands, one soul — the flagship Mahabelly restaurants and the everyday Mahabelly Canteen. Explore menus, outlets and locations across Delhi NCR.',
  path: '/our-brands',
})

const brands = [
  {
    name: 'Mahabelly',
    tag: 'The flagship',
    logo: '/brand/logo-dark.png',
    blurb:
      'The full Kerala table — coastal curries, toddy-shop plates, Malabar biryani, seafood and the grand Onam Sadhya. A sit-down celebration of Kerala’s culinary depth.',
    menu: '/menu/saket',
    accent: 'text-red',
  },
  {
    name: 'Mahabelly Canteen',
    tag: 'Everyday Kerala',
    logo: '/brand/canteen-logo.png',
    blurb:
      'The younger, casual format — comforting Kerala Meals and tiffin alongside Kerala’s own Al Faham, Shawaya, Mandhi and Shawarma. Served without ceremony, never without soul.',
    menu: '/menu/canteen-saidulajab',
    more: '/canteen',
    accent: 'text-gold',
  },
]

const cities = ['New Delhi', 'Gurugram', 'Sonipat']

export default function OurBrandsPage() {
  return (
    <>
      <PageHero
        kicker="Our Brands"
        title="Two brands, one soul"
        subtitle="From the grand Kerala table to the everyday canteen — and where to find each across Delhi NCR."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Our Brands' }]}
      />

      {/* Brands */}
      <section className="paper py-16 md:py-24">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {brands.map((b) => (
            <Reveal key={b.name}>
              <div className="flex flex-col h-full rounded-2xl border border-ink/10 bg-cream-soft p-8">
                <div className="h-24 flex items-center">
                  <Image src={b.logo} alt={b.name} width={260} height={120} className="h-20 w-auto object-contain" />
                </div>
                <span className={`kicker ${b.accent} mt-5`}>{b.tag}</span>
                <p className="text-charcoal-soft leading-relaxed mt-3 flex-1">{b.blurb}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Link href={b.menu} className="btn-ink !py-2.5">
                    <BookOpen size={15} /> View menu
                  </Link>
                  {b.more && (
                    <Link href={b.more} className="btn-outline-ink !py-2.5">
                      About the Canteen <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Outlets / Locations */}
      <section className="bg-sand py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="Find Us" title="Our outlets" subtitle="Six locations across Delhi NCR & Sonipat." align="left" className="!mx-0 mb-12" />
          <div className="space-y-12">
            {cities.map((city) => {
              const outlets = OUTLETS.filter((o) => o.city === city)
              if (!outlets.length) return null
              return (
                <div key={city}>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                      <MapPin size={18} className="text-red" /> {city}
                    </h3>
                    <span className="flex-1 h-px bg-ink/10" />
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {outlets.map((o, i) => (
                      <Reveal key={o.slug} delay={(i % 3) * 0.06}>
                        <OutletCard outlet={o} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Menus */}
      <section className="paper py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="Menus" title="Web-readable menus" subtitle="Browse the full menu for each outlet." align="left" className="!mx-0 mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MENUS.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 0.06}>
                <Link href={`/menu/${m.slug}`} className="lift group flex flex-col h-full rounded-2xl border border-ink/10 bg-cream-soft p-6 hover:border-red/40">
                  <BookOpen size={24} className={m.brand === 'canteen' ? 'text-gold' : 'text-red'} />
                  <h3 className="font-display text-xl font-bold text-ink mt-4">{m.outletName}</h3>
                  <p className="text-sm text-charcoal-soft mt-2 flex-1 leading-relaxed">{m.intro}</p>
                  <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold tracking-widest uppercase text-red mt-5 group-hover:gap-2.5 transition-all">
                    View menu <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
