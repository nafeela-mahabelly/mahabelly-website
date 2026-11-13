import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { CANTEEN } from '@/lib/canteen'

export default function CanteenTeaser() {
  return (
    <section className="relative bg-sand py-20 md:py-28 overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="kicker text-gold">{CANTEEN.eyebrow}</span>
          <div className="rule rule-left rule-gold" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            Mahabelly Canteen
          </h2>
          <p className="mt-6 text-charcoal-soft leading-relaxed max-w-xl">{CANTEEN.intro}</p>
          <blockquote className="font-serif italic text-xl text-gold mt-6">{CANTEEN.line}</blockquote>
          <Link href="/canteen" className="btn-ghost !text-gold hover:!text-gold-light mt-7 group">
            Explore the Canteen <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-cream-soft border border-gold/30 flex items-center justify-center shadow-xl">
              <Image src="/brand/canteen-logo.png" alt="Mahabelly Canteen" width={320} height={320} className="w-44 md:w-52 h-auto object-contain" />
            </div>
            {/* Single Kerala meal thali, overlapping the upper-right edge of the logo circle,
                above the wordmark band and beside the icon, so it never covers "Mahabelly Canteen". */}
            <div className="absolute -right-10 -top-3 md:-right-14 md:-top-4 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-sand shadow-lg bg-cream-soft">
              <Image src="/photos/canteen-thali.jpg" alt="A Kerala meal thali with rice, chapati, pappadam and curries" fill className="object-cover scale-[1.08]" sizes="144px" />
            </div>
          </div>
          {/* Strip wraps on narrow screens instead of running off the edge */}
          <p className="mt-6 max-w-sm text-center bg-gold text-ink font-sans text-[10px] tracking-widest uppercase rounded-full px-4 py-1.5 shadow-lg">
            {CANTEEN.strip.join(' · ')}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
