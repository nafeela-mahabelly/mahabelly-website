import Link from 'next/link'
import { Crown, ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function GoldTeaser() {
  return (
    <section className="bg-ink text-cream py-16 md:py-20">
      <div className="container-x">
        <Reveal className="rounded-3xl border border-gold/30 bg-gradient-to-br from-ink-soft to-ink p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 justify-between">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
              <Crown size={26} className="text-gold-light" />
            </div>
            <div>
              <span className="kicker text-gold-light">Mahabelly Gold · Now Live</span>
              <h2 className="font-display text-2xl md:text-4xl font-bold mt-2 leading-tight">
                A loyalty programme for the Mahabelly family.
              </h2>
              <p className="text-cream/65 mt-3 max-w-xl">
                Rewards, festive treats and members-only perks for the people who keep coming back for Kerala.
              </p>
            </div>
          </div>
          <Link href="/mahabelly-gold" className="btn bg-gold text-ink hover:bg-gold-light shrink-0 group">
            Join our programme <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
