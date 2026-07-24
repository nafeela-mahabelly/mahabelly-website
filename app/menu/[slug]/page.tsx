import { notFound } from 'next/navigation'
import PageHero from '@/components/layout/PageHero'
import MenuView from '@/components/menu/MenuView'
import CTABand from '@/components/layout/CTABand'
import JsonLd from '@/components/ui/JsonLd'
import { pageMeta } from '@/lib/seo'
import { MENUS, getMenu } from '@/lib/menus'
import { SITE } from '@/lib/site'

export function generateStaticParams() {
  return MENUS.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const menu = getMenu(slug)
  if (!menu) return {}
  return pageMeta({
    title: `${menu.outletName} Menu`,
    description: `${menu.intro} Web-readable menu with prices.`,
    path: `/menu/${menu.slug}`,
  })
}

export default async function MenuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const menu = getMenu(slug)
  if (!menu) notFound()

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
      <div className="paper">
        <MenuView menu={menu} />
      </div>
      <CTABand title="Ready to order?" subtitle="Order in, or reserve a table at this outlet." />
    </>
  )
}
