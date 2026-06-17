'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imageY     = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY       = useTransform(scrollYProgress, [0, 0.5], ['0%', '-15%'])

  const scrollToStory = () => {
    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 scale-110 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1920&q=80"
          alt="Kerala cuisine — authentic Malayali food"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Warm colour vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-kerala-green-dark/40 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 lg:pb-32"
      >
        {/* Eye-brow label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-kerala-gold" />
          <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold-light font-medium">
            Authentic Kerala Cuisine
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-kerala-cream font-bold leading-none mb-6 max-w-4xl"
        >
          Kerala,
          <br />
          <span className="font-serif italic font-normal text-kerala-gold-light">
            Served With Soul
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="font-sans text-base lg:text-lg text-kerala-cream/80 max-w-xl mb-10 leading-relaxed"
        >
          Home of the Onam Sadhya and winner of the Times Food & Nightlife Award for "Best South Indian Restaurant" in Delhi three times in a row, Mahabelly is the ultimate stop for all the culinary treasures that God’s Own Country has to offer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="https://mahabelly.co/onlineorder/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Order Online
          </a>
          <button onClick={scrollToStory} className="btn-outline">
            Our Story
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToStory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-kerala-cream/60 hover:text-kerala-cream transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase rotate-90 origin-center">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
