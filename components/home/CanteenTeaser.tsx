import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function CanteenTeaser() {
  return (
    <section className="relative bg-sand py-20 md:py-28 overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="kicker text-gold">Kerala Meets the Gulf</span>
          <div className="rule rule-left rule-gold" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            Mahabelly Canteen
          </h2>
          <div className="space-y-4 mt-6 text-charcoal-soft leading-relaxed max-w-xl">
            <p>
              Almost every Malayali family has a Gulf story — and that connection has transformed the way Kerala eats.
            </p>
            <p>
              The Canteen is our younger, more casual format. Alongside comforting Kerala Meals and familiar favourites, it celebrates Kerala’s own versions of <strong className="text-ink">Al Faham, Shawaya and Shawarma</strong> — dishes that travelled from the Middle East and found a distinct second home in Kerala.
            </p>
          </div>
          <blockquote className="font-serif italic text-xl text-gold mt-6">
            Everyday Kerala. Served without ceremony, but never without soul.
          </blockquote>
          <Link href="/canteen" className="btn-ghost !text-gold hover:!text-gold-light mt-7 group">
            Explore the Canteen <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-cream-soft border border-gold/30 flex items-center justify-center shadow-xl">
              <Image src="/brand/canteen-kathakali.png" alt="Mahabelly Canteen" width={320} height={320} className="w-52 md:w-64 h-auto object-contain" />
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gold text-ink font-sans text-[10px] tracking-widest uppercase rounded-full px-4 py-1.5 whitespace-nowrap shadow-lg">
              Al Faham · Shawaya · Mandhi
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
