import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Download, Utensils, MapPin } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import CTABand from '@/components/layout/CTABand'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import JsonLd from '@/components/ui/JsonLd'
import { pageMeta } from '@/lib/seo'
import { MENUS, getMenu } from '@/lib/menus'
import { getMenuBook } from '@/lib/menuBooks'
import MenuFlipbook from '@/components/menu/MenuFlipbook'
import { SITE, LINKS, OUTLETS } from '@/lib/site'

export function generateStaticParams() {
  return MENUS.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const menu = getMenu(slug)
  if (!menu) return {}
  return pageMeta({
    title: `${menu.outletName} Menu`,
    description: `${menu.intro} See the signature dishes and order online.`,
    path: `/menu/${menu.slug}`,
  })
}

export default async function MenuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const menu = getMenu(slug)
  if (!menu) notFound()

  const outlet = OUTLETS.find((o) => o.slug === menu.outletSlug)
  const book = getMenuBook(menu.slug)

  // Menu structured data (item names — crawlable, no prices)
  const menuLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `${menu.outletName} Menu`,
    url: `${SITE.url}/menu/${menu.slug}`,
    hasMenuSection: menu.sections.map((s) => ({
      '@type': 'MenuSection',
      name: s.name,
      hasMenuItem: s.groups.flatMap((g) =>
        g.items.map((it) => ({ '@type': 'MenuItem', name: it.name, ...(it.desc ? { description: it.desc } : {}) })),
      ),
    })),
  }

  return (
    <>
      <JsonLd data={menuLd} />
      <PageHero
        kicker={menu.kicker}
        title={`${menu.outletName} — Menu`}
        subtitle={menu.intro}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Menu', href: '/menu' }, { label: menu.outletName }]}
      />

      {/* Actions */}
      <section className="bg-sand border-b border-ink/10">
        <div className="container-x py-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className="text-sm text-charcoal-soft max-w-lg">
            Browse the full menu below, or order online to see live prices{menu.pdf ? ' and download the menu as a PDF' : ''}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={LINKS.orderOnline} className="btn-red">
              <ShoppingBag size={15} /> Order Online
            </Link>
            {menu.pdf && (
              <a href={menu.pdf} target="_blank" rel="noopener noreferrer" className="btn-outline-ink">
                <Download size={15} /> Menu PDF
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Menu book */}
      <section className="paper py-16 md:py-24">
        <div className="container-x">
          {book ? (
            <>
              <SectionHeading
                kicker="The Menu"
                title="Flip through the menu"
                subtitle="Swipe, use the arrows, or tap any page to view it full-screen."
              />
              <MenuFlipbook pages={book} label={`${menu.outletName} menu`} />
            </>
          ) : (
            <>
              <SectionHeading
                kicker="Specials"
                title="Signature dishes at this outlet"
                subtitle="A taste of what to look for. Explore the full range when you order online."
              />
              {menu.specials && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
                  {menu.specials.map((d, i) => (
                    <Reveal key={d.name} delay={(i % 3) * 0.06}>
                      <article className="lift group h-full overflow-hidden rounded-2xl border border-ink/10 bg-cream-soft">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={d.image}
                            alt={d.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                            <Utensils size={16} className={menu.brand === 'canteen' ? 'text-gold' : 'text-red'} /> {d.name}
                          </h3>
                          {d.desc && <p className="text-sm text-charcoal-soft mt-1.5 leading-relaxed">{d.desc}</p>}
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}

          {outlet && (
            <Reveal className="mt-12 text-center">
              <Link href={`/locations/${outlet.slug}`} className="btn-outline-ink group">
                <MapPin size={15} /> Visit {outlet.name}
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      <CTABand title="Ready to order?" subtitle="Order in, or reserve a table at this outlet." />
    </>
  )
}
