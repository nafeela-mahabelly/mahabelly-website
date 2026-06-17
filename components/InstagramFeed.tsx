'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import FadeInView from './ui/FadeInView'

// Replace these with real Instagram post image URLs or local images
const posts = [
  {
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
    alt: 'Kerala thali at Mahabelly',
  },
  {
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    alt: 'Malabar biryani',
  },
  {
    src: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80',
    alt: 'Kerala seafood',
  },
  {
    src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80',
    alt: 'Kerala spices',
  },
  {
    src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    alt: 'Appam and stew',
  },
  {
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80',
    alt: 'Kerala kitchen',
  },
]

export default function InstagramFeed() {
  return (
    <section className="bg-kerala-cream-dark py-28 lg:py-36 overflow-hidden">
      {/* Header */}
      <FadeInView className="max-w-7xl mx-auto px-6 mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
            Follow Along
          </span>
          <div className="w-12 h-0.5 bg-kerala-gold/50 my-3" />
          <h2 className="font-display text-5xl lg:text-6xl text-kerala-green-dark font-bold leading-tight">
            @mahabelly
          </h2>
          <p className="font-serif italic text-lg text-kerala-charcoal-mid mt-3">
            Kerala on your feed, every day.
          </p>
        </div>

        {/* Follow button */}
        <a
          href="https://instagram.com/mahabelly"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-kerala-green text-kerala-green font-sans text-xs font-semibold tracking-widest uppercase px-7 py-4 hover:bg-kerala-green hover:text-white transition-all duration-300 self-start sm:self-auto flex-shrink-0"
        >
          <Instagram size={14} />
          Follow on Instagram
        </a>
      </FadeInView>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {posts.map((post, i) => (
            <FadeInView key={i} delay={i * 0.06}>
              <motion.a
                href="https://instagram.com/mahabelly"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative block aspect-square overflow-hidden"
                aria-label={`View ${post.alt} on Instagram`}
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-kerala-green/0 group-hover:bg-kerala-green/50 transition-colors duration-400 flex items-center justify-center">
                  <Instagram
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.a>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* Bottom nudge */}
      <FadeInView className="text-center mt-12">
        <p className="font-sans text-sm text-kerala-charcoal-mid">
          Tag us{' '}
          <a
            href="https://instagram.com/mahabelly"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-kerala-green hover:text-kerala-gold transition-colors underline underline-offset-4"
          >
            @mahabelly
          </a>{' '}
          and we might feature you
        </p>
      </FadeInView>
    </section>
  )
}
