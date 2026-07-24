import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

const publications = [
  'The Hindu', 'NDTV Food', 'Times Now', 'Livemint', 'Deccan Herald',
  'Time Out', 'The Established', 'LBB', 'The New Indian Express', 'Bar & Bench', 'The Times of India',
]

export default function PressStrip() {
  return (
    <section className="bg-cream-soft border-y border-ink/10 py-16">
      <div className="container-x text-center mb-10">
        <Reveal>
          <span className="kicker text-red">Mahabelly in the News</span>
          <p className="font-serif italic text-xl text-charcoal-soft mt-3">
            Featured across India’s leading food and culture press.
          </p>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-2" aria-hidden>
        <div className="flex w-max motion-safe:animate-marquee gap-12 pr-12">
          {[...publications, ...publications].map((p, i) => (
            <span key={i} className="font-display text-2xl md:text-3xl text-ink/35 whitespace-nowrap">
              {p}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-soft to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-soft to-transparent" />
      </div>

      <div className="text-center mt-10">
        <Link href="/press" className="btn-ghost group">
          View press & awards <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
