import Image from 'next/image'
import Link from 'next/link'
import { CalendarCheck, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react'
import { LINKS, AWARD } from '@/lib/site'
import ReserveButton from '@/components/reserve/ReserveButton'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/photos/hero-coastline.jpg"
          alt="Illustration of the Kerala coastline with fishing canoes on the backwaters"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%] motion-safe:animate-ken-burns"
        />
        {/* Left-weighted scrim keeps the artwork bright on the right, text legible on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
      </div>

      <div className="container-x relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="kicker text-gold-light motion-safe:opacity-0 motion-safe:animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Est. 2015 · Delhi NCR
          </span>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-cream leading-[0.98] mt-5 motion-safe:opacity-0 motion-safe:animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            Kerala,<br />
            <span className="text-red-light">Served With Soul</span>
          </h1>

          <p
            className="font-serif text-xl md:text-2xl text-cream/80 mt-6 max-w-xl leading-relaxed motion-safe:opacity-0 motion-safe:animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            From appam and stew to Malabar biryani, toddy-shop favourites and the grand Onam Sadhya, Mahabelly brings the many flavours and stories of Kerala to Delhi NCR.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 mt-9 motion-safe:opacity-0 motion-safe:animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            <ReserveButton className="btn-red">
              <CalendarCheck size={16} /> Reserve a Table
            </ReserveButton>
            <a href={LINKS.orderOnline} className="btn-outline">
              <ShoppingBag size={16} /> Order Online
            </a>
            <Link href={LINKS.onam} className="btn bg-gold text-ink hover:bg-gold-light">
              <Sparkles size={16} /> Book Onam ’26
            </Link>
            <Link href="/our-story" className="btn text-cream hover:text-gold-light !px-2 group">
              Explore Our Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p
            className="font-sans text-xs tracking-widest uppercase text-cream/50 mt-10 motion-safe:opacity-0 motion-safe:animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            Born in Delhi. Rooted in Kerala. Since 2015.
          </p>
        </div>
      </div>

      {/* Award ribbon */}
      <div className="absolute bottom-0 inset-x-0 bg-ink/70 backdrop-blur-sm border-t border-cream/10 hidden sm:block">
        <div className="container-x py-3">
          <p className="font-sans text-[11px] tracking-widest uppercase text-gold-light/90 text-center">
            ★ {AWARD}
          </p>
        </div>
      </div>
    </section>
  )
}
