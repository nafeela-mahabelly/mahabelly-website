import { Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { REVIEWS, REVIEW_PLATFORMS } from '@/lib/content'

/** Guest reviews — shared by home and the Reviews page. */
export default function Reviews({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <section className={dark ? 'bg-ink text-cream py-20 md:py-28' : 'paper py-20 md:py-28'}>
      <div className="container-x">
        <SectionHeading
          kicker="What Our Guests Say"
          title="Warmth, nostalgia, discovery"
          tone={dark ? 'light' : 'dark'}
        />

        <div className="grid sm:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08}>
              <figure
                className={`h-full p-7 border rounded-2xl ${
                  dark ? 'bg-ink-soft/60 border-cream/10' : 'bg-cream-soft border-ink/10'
                }`}
              >
                <Quote size={26} className="text-red-light mb-4" />
                <blockquote className={`font-serif text-xl leading-relaxed ${dark ? 'text-cream/85' : 'text-ink'}`}>
                  “{r.quote}”
                </blockquote>
                <figcaption className={`font-sans text-[11px] tracking-widest uppercase mt-5 ${dark ? 'text-cream/45' : 'text-charcoal-mute'}`}>
                  {r.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-wrap justify-center gap-3 mt-12">
          {REVIEW_PLATFORMS.map((p) => (
            <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className={dark ? 'btn-outline' : 'btn-outline-ink'}>
              {p.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
