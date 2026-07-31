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
              <Image src="/photos/team-mahabelly.jpg" alt="The Mahabelly restaurant team" fill className="object-cover object-top" sizes="(max-width:1024px) 100vw, 45vw" />
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
            Some ideas begin not as plans, but as cravings.
          </h2>
          <div className="space-y-4 mt-6 text-charcoal-soft leading-relaxed">
            <p>
              For Mahabelly, the journey began with the longing every Malayali away from home understands — for appam and stew, fish curry and red rice, the crackle of curry leaves in coconut oil, and food that can carry you home in a single bite.
            </p>
            <p>
              Founded in Delhi in 2015 by childhood friends Zachariah Jacob, Thomas Fenn and Dr Prem Kiran, Mahabelly grew from a college-day dream into a larger purpose: to give Kerala’s cuisine and culture the stage they deserve.
            </p>
          </div>
          <blockquote className="font-serif italic text-2xl text-ink mt-8 border-l-2 border-red pl-5">
            For Malayalis, a taste of home. For everyone else, a warm invitation in — one honest, generous meal at a time.
          </blockquote>
          <Link href="/our-story" className="btn-ghost mt-8 group">
            Read our full story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
