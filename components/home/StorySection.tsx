import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function StorySection() {
  return (
    <section className="paper py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image collage */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="/photos/storefront-onam.jpg" alt="Mahabelly’s early days in Delhi" fill className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-52 aspect-square border-4 border-cream-soft overflow-hidden shadow-xl hidden sm:block">
              <Image src="/photos/team-garland.jpg" alt="The Mahabelly team" fill className="object-cover" sizes="200px" />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <span className="kicker text-red">More Than a Restaurant</span>
          <div className="rule rule-left" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            A craving for home, grown into a mission.
          </h2>
          <div className="space-y-4 mt-6 text-charcoal-soft leading-relaxed">
            <p>
              Mahabelly was founded in Delhi in 2015 by three childhood friends — Zachariah Jacob, Thomas Fenn and Dr Prem Kiran — who shared a love for Kerala food and a belief that its story deserved a larger stage.
            </p>
            <p>
              At a time when South Indian food was still largely understood through dosa, idli and sambar, Mahabelly set out to introduce diners to a far richer world: coastal curries, Syrian Christian classics, Malabar Muslim traditions, temple food, toddy-shop favourites and the flavours shaped by Kerala’s long relationship with the Gulf.
            </p>
          </div>
          <blockquote className="font-serif italic text-2xl text-ink mt-8 border-l-2 border-red pl-5">
            For Malayalis, it is a taste of home. For everyone else, it is a doorway into Kerala.
          </blockquote>
          <Link href="/our-story" className="btn-ghost mt-8 group">
            Read our full story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
