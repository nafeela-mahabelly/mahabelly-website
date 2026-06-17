'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeInView from './ui/FadeInView'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=80',
    alt: 'Kerala thali on banana leaf',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80',
    alt: 'Malabar biryani',
    aspect: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700&q=80',
    alt: 'Kerala curry preparation',
    aspect: 'aspect-[4/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=700&q=80',
    alt: 'Fresh seafood Kerala style',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=700&q=80',
    alt: 'Kerala spices and ingredients',
    aspect: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80',
    alt: 'Appam with coconut milk stew',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=700&q=80',
    alt: 'Indian street food Kerala',
    aspect: 'aspect-[4/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=700&q=80',
    alt: 'Kerala food photography',
    aspect: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=700&q=80',
    alt: 'Kerala food flat lay',
    aspect: 'aspect-[3/4]',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-kerala-cream py-28 lg:py-40 overflow-hidden">
      {/* Header with Kerala Molam flanking illustrations — flex row */}
      <FadeInView className="mb-20">
        <div className="flex items-center justify-center">
          {/* Left — Molam 1 */}
          <div className="hidden lg:block flex-shrink-0 w-[150px] xl:w-[190px] pointer-events-none select-none">
            <div className="relative h-[120px]">
              <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-kerala-cream to-transparent" />
              <Image
                src="/kerala-molam.png"
                alt=""
                fill
                aria-hidden={true}
                className="object-cover object-right mix-blend-multiply opacity-75"
                sizes="190px"
              />
            </div>
          </div>

          {/* Centre header text */}
          <div className="flex-1 text-center px-6 max-w-2xl">
            <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
              Visual Stories
            </span>
            <div className="gold-divider" />
            <h2 className="font-display text-5xl lg:text-6xl text-kerala-green-dark font-bold leading-tight">
              The Gallery
            </h2>
            <p className="font-serif italic text-xl text-kerala-charcoal-mid mt-4 max-w-lg mx-auto">
              Colours, textures, and moments from our kitchens and dining rooms.
            </p>
          </div>

          {/* Right — Molam 2 */}
          <div className="hidden lg:block flex-shrink-0 w-[150px] xl:w-[190px] pointer-events-none select-none">
            <div className="relative h-[120px]">
              <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-kerala-cream to-transparent" />
              <Image
                src="/kerala-molam.png"
                alt=""
                fill
                aria-hidden={true}
                className="object-cover object-left mix-blend-multiply opacity-75"
                sizes="190px"
              />
            </div>
          </div>
        </div>
      </FadeInView>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="masonry-grid">
          {images.map((img, i) => (
            <FadeInView
              key={i}
              delay={i * 0.04}
              className="masonry-item"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative ${img.aspect} overflow-hidden group cursor-pointer`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-kerala-green-dark/0 group-hover:bg-kerala-green-dark/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-serif italic text-sm text-kerala-cream">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* Follow us nudge */}
      <FadeInView className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <p className="font-sans text-sm text-kerala-charcoal-mid">
          Follow us on Instagram{' '}
          <a
            href="https://instagram.com/mahabelly"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-kerala-green hover:text-kerala-gold transition-colors underline underline-offset-4"
          >
            @mahabelly
          </a>{' '}
          for more
        </p>
      </FadeInView>
    </section>
  )
}
