'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import FadeInView from './ui/FadeInView'

const pages = [
  { src: '/menu1.png', label: 'Menu — Page 1', width: 1920, height: 1357 },
  { src: '/menu2.png', label: 'Menu — Page 2', width: 2481, height: 1754 },
]

export default function Menu() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section id="menu" className="bg-kerala-cream py-28 lg:py-36 overflow-hidden">
      {/* Section header */}
      <FadeInView className="text-center mb-16 px-6">
        <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
          What We Serve
        </span>
        <div className="gold-divider" />
        <h2 className="font-display text-5xl lg:text-6xl text-kerala-green-dark font-bold leading-tight">
          Our Menu
        </h2>
        <p className="font-serif italic text-xl text-kerala-charcoal-mid mt-4 max-w-xl mx-auto">
          From the coastlines of Malabar to the hills of Wayanad — every page, a journey.
        </p>
      </FadeInView>

      {/* Menu pages grid */}
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-8 lg:gap-12">
        {pages.map((page, i) => (
          <FadeInView key={i} delay={i * 0.15} direction={i === 0 ? 'left' : 'right'}>
            <button
              onClick={() => setLightbox(i)}
              className="group relative w-full text-left focus:outline-none"
              aria-label={`View ${page.label} full size`}
            >
              {/* Gold offset frame */}
              <div className="absolute inset-0 border border-kerala-gold/30 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={page.src}
                  alt={page.label}
                  width={page.width}
                  height={page.height}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-kerala-green-dark/0 group-hover:bg-kerala-green-dark/30 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-kerala-cream/90 text-kerala-green-dark px-4 py-2">
                    <ZoomIn size={16} />
                    <span className="font-sans text-xs font-semibold tracking-widest uppercase">
                      View Full Size
                    </span>
                  </div>
                </div>
              </div>

              {/* Label */}
              <p className="mt-4 font-sans text-xs tracking-widest uppercase text-kerala-charcoal-mid text-center">
                {page.label}
              </p>
            </button>
          </FadeInView>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-kerala-green-dark/95 flex items-center justify-center p-4 lg:p-10"
            onClick={() => setLightbox(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-kerala-cream/30 text-kerala-cream hover:border-kerala-gold hover:text-kerala-gold transition-all duration-300 z-10"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Previous / Next */}
            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1) }}
                className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 border border-kerala-cream/30 text-kerala-cream hover:border-kerala-gold hover:text-kerala-gold transition-all duration-300 text-xl font-light z-10"
                aria-label="Previous"
              >‹</button>
            )}
            {lightbox < pages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1) }}
                className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 border border-kerala-cream/30 text-kerala-cream hover:border-kerala-gold hover:text-kerala-gold transition-all duration-300 text-xl font-light z-10"
                aria-label="Next"
              >›</button>
            )}

            {/* Full-size image */}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={pages[lightbox].src}
                alt={pages[lightbox].label}
                width={pages[lightbox].width}
                height={pages[lightbox].height}
                className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
