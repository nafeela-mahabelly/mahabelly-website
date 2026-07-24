import Reveal from '@/components/ui/Reveal'
import { STATS } from '@/lib/site'

export default function Footprint() {
  return (
    <section className="bg-ink text-cream py-20 md:py-24">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="kicker text-gold-light">One Story. Many Tables.</span>
          <div className="rule rule-gold" />
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            From one restaurant in Delhi to a family of kitchens across the NCR.
          </h2>
          <p className="text-cream/60 mt-4">
            The number that brings us the greatest pride is the Mahabelly family itself.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-5xl md:text-6xl font-black text-red-light">{s.value}</p>
              <p className="font-sans text-xs tracking-wide text-cream/55 mt-2 leading-snug">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
