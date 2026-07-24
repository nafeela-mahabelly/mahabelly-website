import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import { pageMeta } from '@/lib/seo'
import { POLICIES, ENTITY_INTRO } from '@/lib/policies'

export const metadata = pageMeta({
  title: 'Policies | Mahabelly',
  description:
    'Mahabelly’s Privacy Policy, Terms & Conditions, Cancellation & Refund, Shipping & Delivery and Accessibility Statement.',
  path: '/policies',
})

export default function PoliciesIndex() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Policies"
        subtitle="The terms that govern using our website and ordering with us."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Policies' }]}
      />

      <section className="paper py-16 md:py-24">
        <div className="container-x max-w-4xl">
          <Reveal>
            <p className="text-charcoal-soft leading-relaxed border-l-2 border-red pl-5 mb-12">{ENTITY_INTRO}</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {POLICIES.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.06}>
                <Link
                  href={`/policies/${p.slug}`}
                  className="lift group flex items-start gap-4 bg-cream-soft border border-ink/10 rounded-2xl hover:border-red/40 p-6 h-full"
                >
                  <ShieldCheck size={22} className="text-red shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-ink group-hover:text-red transition-colors">{p.title}</h2>
                    <p className="text-sm text-charcoal-soft mt-1.5 leading-relaxed">{p.intro}</p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[11px] tracking-widest uppercase text-red mt-3 group-hover:gap-2.5 transition-all">
                      Read <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
