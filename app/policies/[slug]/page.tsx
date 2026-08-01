import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import { pageMeta } from '@/lib/seo'
import { POLICIES, getPolicy, ENTITY_INTRO } from '@/lib/policies'

export function generateStaticParams() {
  return POLICIES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getPolicy(slug)
  if (!p) return {}
  return pageMeta({ title: p.metaTitle, description: p.metaDesc, path: `/policies/${p.slug}` })
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const policy = getPolicy(slug)
  if (!policy) notFound()

  return (
    <>
      <PageHero
        kicker="Legal"
        title={policy.title}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Policies', href: '/policies' }, { label: policy.title }]}
      />

      <section className="paper py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="font-sans text-xs text-charcoal-mute mb-8">
              Effective date &amp; last updated: 1 August 2026.
            </p>
            <p className="text-sm text-charcoal-soft leading-relaxed border-l-2 border-red pl-5 mb-8">{ENTITY_INTRO}</p>
            <p className="font-serif italic text-lg text-ink mb-10">{policy.intro}</p>

            <div className="prose-belly">
              {policy.blocks.map((b, i) => (
                <div key={i}>
                  {b.h && <h2>{b.h}</h2>}
                  {b.p && <p>{b.p}</p>}
                  {b.list && (
                    <ul>
                      {b.list.map((li, j) => <li key={j}>{li}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-ink/10 flex flex-wrap gap-x-6 gap-y-2">
              {POLICIES.filter((p) => p.slug !== policy.slug).map((p) => (
                <Link key={p.slug} href={`/policies/${p.slug}`} className="font-sans text-sm text-red hover:underline">
                  {p.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
