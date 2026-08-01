import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, Phone, MessageCircle, Navigation as NavIcon, BookOpen, CalendarCheck, ShoppingBag } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import ReserveButton from '@/components/reserve/ReserveButton'
import JsonLd from '@/components/ui/JsonLd'
import { pageMeta, restaurantLd } from '@/lib/seo'
import { OUTLETS, SITE, LINKS, mapsUrl, mapsEmbed, waLink } from '@/lib/site'

export function generateStaticParams() {
  return OUTLETS.map((o) => ({ slug: o.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const o = OUTLETS.find((x) => x.slug === slug)
  if (!o) return {}
  return pageMeta({
    title: `${o.name} | ${o.city}`,
    description: `${o.name} — ${o.format} in ${o.area}, ${o.city}. Address, hours, directions, menu, reservations and online ordering.`,
    path: `/locations/${o.slug}`,
  })
}

export default async function OutletPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const o = OUTLETS.find((x) => x.slug === slug)
  if (!o) notFound()

  const services = [
    o.dineIn && 'Dine-in',
    o.takeaway && 'Takeaway',
    o.delivery && 'Delivery',
    o.reservation && 'Reservations',
  ].filter(Boolean) as string[]

  return (
    <>
      <JsonLd data={restaurantLd(o.slug)} />
      <PageHero
        kicker={o.brand === 'canteen' ? 'Mahabelly Canteen' : 'Mahabelly'}
        title={o.name}
        subtitle={`${o.format} · ${o.area}`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: o.area }]}
      />

      <section className="paper py-14 md:py-20">
        <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14">
          {/* Details */}
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-6">
              {services.map((s) => (
                <span key={s} className="font-sans text-[11px] tracking-widest uppercase bg-sand/70 text-charcoal-soft px-3 py-1">{s}</span>
              ))}
              {o.note && <span className="font-sans text-[11px] tracking-widest uppercase bg-red/10 text-red px-3 py-1">{o.note}</span>}
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-sm font-semibold text-ink">Address</p>
                  <p className="text-sm text-charcoal-soft mt-0.5 leading-relaxed">{o.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-red mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-sm font-semibold text-ink">Hours</p>
                  <p className="text-sm text-charcoal-soft mt-0.5">{o.hours}</p>
                  <p className="text-xs text-charcoal-mute mt-0.5">Hours may vary on festivals — please call to confirm.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-red mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-sm font-semibold text-ink">Phone & WhatsApp</p>
                  <a href={`tel:${SITE.phoneRaw}`} className="text-sm text-charcoal-soft hover:text-red block mt-0.5">{SITE.phone}</a>
                </div>
              </li>
            </ul>

            {/* Actions */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              <a href={mapsUrl(o.mapsQuery)} target="_blank" rel="noopener noreferrer" className="btn-outline-ink w-full">
                <NavIcon size={15} /> Get Directions
              </a>
              <a href={waLink(`Hi Mahabelly, I have a question about ${o.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-outline-ink w-full">
                <MessageCircle size={15} /> WhatsApp
              </a>
              {o.reservation && (
                <ReserveButton className="btn-red w-full">
                  <CalendarCheck size={15} /> Reserve a Table
                </ReserveButton>
              )}
              {o.delivery && (
                <a href={LINKS.orderOnline} className="btn-red w-full">
                  <ShoppingBag size={15} /> Order Online
                </a>
              )}
              {o.menuSlug && (
                <Link href={`/menu/${o.menuSlug}`} className="btn-ink w-full sm:col-span-2">
                  <BookOpen size={15} /> View this outlet’s menu
                </Link>
              )}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[360px] border border-ink/10 overflow-hidden">
              <iframe
                title={`Map of ${o.name}`}
                src={mapsEmbed(o.mapsQuery)}
                className="w-full h-full min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand showExplore={false} />
    </>
  )
}
