import { Crown, Gift, Percent, Sparkles, MessageCircle } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import { pageMeta } from '@/lib/seo'
import { SITE, waLink } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Mahabelly Gold | Loyalty Programme',
  description:
    'Mahabelly Gold is our loyalty programme for the Mahabelly family. Rewards, perks and members-only treats. Join us today.',
  path: '/mahabelly-gold',
})

const perks = [
  { icon: Percent, title: 'Member rewards', text: 'Earn on every visit and order, and unlock members-only offers.' },
  { icon: Gift, title: 'Birthday & festive treats', text: 'Little surprises through the year, from us to you.' },
  { icon: Sparkles, title: 'Early access', text: 'First dibs on Sadhya bookings, new openings and special menus.' },
]

export default function MahabellyGoldPage() {
  return (
    <>
      <PageHero
        kicker="Loyalty Programme"
        title="Mahabelly Gold"
        subtitle="Rewards and perks for the Mahabelly family."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Mahabelly Gold' }]}
      />

      <section className="bg-ink text-cream py-16 md:py-24">
        <div className="container-x max-w-4xl text-center">
          <Reveal>
            <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto">
              <Crown size={34} className="text-gold-light" />
            </div>
            <span className="inline-block font-sans text-[11px] tracking-widest uppercase text-gold-light mt-6 border border-gold/40 rounded-full px-4 py-1">
              Now live
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-6 leading-tight">
              Something golden, just for you.
            </h2>
            <p className="text-cream/70 leading-relaxed mt-5 max-w-2xl mx-auto">
              Mahabelly Gold is our way of thanking the guests who keep coming back for Kerala. Rewards, perks and members-only treats, all in one place. Join the programme and start earning on your visits.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5 mt-14 text-left">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                <div className="h-full bg-ink-soft/60 border border-cream/10 rounded-2xl p-6">
                  <p.icon size={24} className="text-gold-light" />
                  <h3 className="font-display text-xl font-bold mt-4">{p.title}</h3>
                  <p className="text-sm text-cream/65 mt-2 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <p className="text-sm text-cream/60 mb-4">Ready to join the Mahabelly family?</p>
            <a href={waLink('Hi Mahabelly, I’d like to join Mahabelly Gold.')} target="_blank" rel="noopener noreferrer" className="btn bg-gold text-ink hover:bg-gold-light">
              <MessageCircle size={15} /> Join on WhatsApp
            </a>
            <p className="text-xs text-cream/40 mt-4">
              Or write to <a href={`mailto:${SITE.email}`} className="text-gold-light hover:underline">{SITE.email}</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
