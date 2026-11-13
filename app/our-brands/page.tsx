import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, CalendarCheck, MapPin, ShoppingBag } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import OutletCard from '@/components/ui/OutletCard'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import MenuCard, { outletMenuCard } from '@/components/ui/MenuCard'
import ReserveButton from '@/components/reserve/ReserveButton'
import { HABIBI } from '@/lib/habibi'
import { pageMeta } from '@/lib/seo'
import { OUTLETS, LINKS } from '@/lib/site'
import { MENUS } from '@/lib/menus'

export const metadata = pageMeta({
  title: 'Our Brands, Menus & Locations | Mahabelly, Mahabelly Canteen & Mahabelly Habibi',
  description:
    'Three Kerala brands, one soul: the flagship Mahabelly restaurants, the everyday Mahabelly Canteen and online-only Mahabelly Habibi. Explore menus, outlets and ordering across Delhi NCR.',
  path: '/our-brands',
})

// Every brand card shows the same three actions, in the same order and style.
// `reserve: true` opens the site-wide Reserve popup (lists Saket + both Canteens).
// `reserve: false` = no reservation link/flow exists for that brand yet, so the
// button is omitted rather than pointed at a guessed destination.
interface BrandActions {
  menu: string
  reserve: boolean
  order: string
}

interface BrandCard {
  name: string
  tag: string
  logo: string
  logoClass?: string
  blurb: string
  accent: string
  actions: BrandActions
}

const brands: BrandCard[] = [
  {
    name: 'Mahabelly',
    tag: 'The flagship',
    logo: '/brand/logo-dark.png',
    blurb:
      'The full Kerala table: coastal curries, toddy-shop plates, Malabar biriyani, seafood and the grand Onam Sadhya. A sit-down celebration of Kerala’s culinary depth.',
    accent: 'text-red',
    actions: { menu: '/menu/saket', reserve: true, order: LINKS.orderOnline },
  },
  {
    name: 'Mahabelly Canteen',
    tag: 'Everyday Kerala',
    logo: '/brand/canteen-logo.png',
    blurb:
      'Everyday Kerala food in a warm, casual setting. Kerala Meals, tiffin favourites, Porotta, curries and teatime bites, made for the meals you return to again and again.',
    accent: 'text-gold',
    actions: { menu: '/menu/canteen-saidulajab', reserve: true, order: LINKS.orderOnline },
  },
  {
    // Reserve Table requested for Habibi too, but no Habibi reservation link/flow
    // exists yet (online-only brand). Set reserve: true once one is provided.
    name: HABIBI.name,
    tag: HABIBI.descriptor,
    logo: HABIBI.logo,
    logoClass: 'h-24',
    blurb: HABIBI.brandCard,
    accent: 'text-habibi',
    actions: { menu: HABIBI.menuHref, reserve: false, order: HABIBI.orderHref },
  },
]

const cities = ['New Delhi', 'Gurugram', 'Sonipat']

export default function OurBrandsPage() {
  return (
    <>
      <PageHero
        kicker="Our Brands"
        title="Three Brands. One Soul."
        subtitle="Three ways to enjoy the Mahabelly family: Kerala dining, everyday Kerala meals and Kerala-Arabic favourites delivered to your door."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Our Brands' }]}
      />

      {/* Brands */}
      <section className="paper py-16 md:py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b) => (
            <Reveal key={b.name}>
              <div className="flex flex-col h-full rounded-2xl border border-ink/10 bg-cream-soft p-8">
                <div className="h-28 flex items-center">
                  <Image src={b.logo} alt={`${b.name} logo`} width={260} height={120} className={`${b.logoClass ?? 'h-20'} w-auto object-contain`} />
                </div>
                <h2 className="font-display text-2xl font-bold text-ink mt-5">{b.name}</h2>
                <span className={`kicker ${b.accent} mt-2`}>{b.tag}</span>
                <p className="text-charcoal-soft leading-relaxed mt-3 flex-1">{b.blurb}</p>
                {/* Same three actions on every card, stacked full-width so they line up across cards */}
                <div className="grid gap-3 mt-6">
                  <Link href={b.actions.menu} className="btn-ink w-full">
                    <BookOpen size={15} className="shrink-0" /> View Menu
                  </Link>
                  {b.actions.reserve && (
                    <ReserveButton className="btn-outline-ink w-full">
                      <CalendarCheck size={15} className="shrink-0" /> Reserve Table
                    </ReserveButton>
                  )}
                  <Link href={b.actions.order} className="btn-red w-full">
                    <ShoppingBag size={15} className="shrink-0" /> Order Online
                  </Link>
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
                        <OutletCard outlet={o} showAmbience />
                      </Reveal>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          {/* Habibi has no outlets to visit — say so rather than listing kitchens */}
          <p className="mt-12 text-sm text-charcoal-soft max-w-2xl">
            <strong className="text-ink">Mahabelly Habibi</strong> is online-only, delivering across serviceable areas in Delhi and Gurgaon.{' '}
            <Link href={HABIBI.orderHref} className="text-habibi-dark font-semibold hover:underline">Order Habibi</Link>
          </p>
        </div>
      </section>

      {/* Menus */}
      <section className="paper py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="Menus" title="Web-readable menus" subtitle="Browse the full menu for each outlet." align="left" className="!mx-0 mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MENUS.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 0.06}>
                <MenuCard {...outletMenuCard(m)} />
              </Reveal>
            ))}
            <Reveal delay={0.12}>
              <MenuCard
                href={HABIBI.menuHref}
                name={HABIBI.name}
                kicker={HABIBI.descriptor}
                intro="A specialist Kerala-Arabic menu of Shawarma, Al Faham, Shawai and Mandhi, with live menus on Zomato & Swiggy."
                accent="habibi"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
