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
              <Image src="/brand/canteen-logo.png" alt="Mahabelly Canteen" width={320} height={320} className="w-52 md:w-60 h-auto object-contain" />
            </div>
            {/* Everyday-Kerala Canteen dishes (real Canteen photography).
                Both sit on the upper corners, outside the logo's wordmark band, so neither covers "Mahabelly Canteen". */}
            <div className="absolute -left-8 top-0 md:-left-10 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-sand shadow-lg">
              <Image src="/dishes/said-porotta-chicken.jpg" alt="Porotta and chicken curry at Mahabelly Canteen" fill className="object-cover" sizes="96px" />
            </div>
            <div className="absolute -right-8 top-0 md:-right-10 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-sand shadow-lg">
              <Image src="/dishes/vk-appam-kurma.jpg" alt="Appam and vegetable kurma at Mahabelly Canteen" fill className="object-cover" sizes="96px" />
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
