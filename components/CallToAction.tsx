'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeInView from './ui/FadeInView'
import { ArrowUpRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="relative py-36 lg:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=1920&q=80"
          alt="Kerala spices — Mahabelly"
          fill
          className="object-cover object-center animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-kerala-green-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-kerala-green-dark/60 to-kerala-green-dark/60" />
      </div>

      {/* Decorative geometric accents */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-kerala-gold/15 rotate-45" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-kerala-gold/15 rotate-12" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Header with Molam flanking illustrations — flex row */}
        <FadeInView className="mb-12">
          <div className="flex items-center justify-center">
            {/* Left — Molam 1 */}
            <div className="hidden lg:block flex-shrink-0 w-[140px] xl:w-[180px] pointer-events-none select-none">
              <div className="relative h-[110px]">
                <div className="absolute inset-y-0 right-0 w-14 z-10 bg-gradient-to-l from-kerala-green-dark to-transparent" />
                <Image
                  src="/kerala-molam2.png"
                  alt=""
                  fill
                  aria-hidden={true}
                  className="object-cover object-right opacity-55 mix-blend-luminosity"
                  sizes="180px"
                />
              </div>
            </div>

            {/* Centre heading */}
            <div className="flex-1 text-center px-6 max-w-2xl">
              <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
                Order Now
              </span>
              <div className="gold-divider" />
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-kerala-cream font-bold leading-tight mb-6">
                Bring Kerala
                <br />
                <span className="font-serif italic font-normal text-kerala-gold-light">
                  To Your Table
                </span>
              </h2>
              <p className="font-sans text-base lg:text-lg text-kerala-cream/70 max-w-lg mx-auto leading-relaxed">
                Order authentic Kerala meals straight to your door — or book a table and
                let us take care of the rest.
              </p>
            </div>

            {/* Right — Molam 2 */}
            <div className="hidden lg:block flex-shrink-0 w-[140px] xl:w-[180px] pointer-events-none select-none">
              <div className="relative h-[110px]">
                <div className="absolute inset-y-0 left-0 w-14 z-10 bg-gradient-to-r from-kerala-green-dark to-transparent" />
                <Image
                  src="/kerala-molam2.png"
                  alt=""
                  fill
                  aria-hidden={true}
                  className="object-cover object-left opacity-55 mix-blend-luminosity"
                  sizes="180px"
                />
              </div>
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <motion.a
              href="https://mahabelly.co/onlineorder/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="btn-primary text-base px-10 py-5 gap-3"
            >
              Order Online
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </FadeInView>

        <FadeInView delay={0.5} className="mt-14">
          <p className="font-sans text-xs text-kerala-cream/40 tracking-widest uppercase mb-5">
            Also Available On
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { name: 'Zomato', href: 'https://www.zomato.com/ncr/mahabelly-saket-new-delhi' },
              { name: 'Swiggy', href: 'https://www.swiggy.com/restaurants/mahabelly-saket-delhi-1187582/dineout' },
              // { name: 'Dunzo',  href: null },
            ].map(({ name, href }) =>
              href ? (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-kerala-cream/60 hover:text-kerala-gold transition-colors"
                >
                  {name}
                </a>
              ) : (
                <span
                  key={name}
                  className="font-sans text-sm font-medium text-kerala-cream/60 cursor-default"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
