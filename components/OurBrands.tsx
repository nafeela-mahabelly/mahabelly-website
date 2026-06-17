'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeInView from './ui/FadeInView'
import { ArrowUpRight } from 'lucide-react'

const brands = [
  {
    name: 'Mahabelly',
    tagline: 'The Original',
    description:
      "The restaurant that started it all. Mahabelly brings the bold, layered flavours of Kerala — from its fish-perfumed coastline to its spice-laden hills — to the heart of Delhi. Every dish is a love letter to God's Own Country.",
    logo: '/logo.avif',
    logoWidth: 160,
    logoHeight: 80,
    accent: 'Since 2016',
    href: 'https://mahabelly.co',
    locations: ['Green Park', 'Greater Kailash', 'Saket'],
    bg: 'bg-kerala-cream',
    border: 'border-kerala-green/10',
    tag: 'bg-kerala-green text-white',
  },
  {
    name: 'Mahabelly Canteen',
    tagline: 'A New Chapter',
    description:
      'Mahabelly Canteen distills the spirit of a Kerala canteen — unpretentious, generous, and deeply satisfying. Quick service, big flavours, and the same commitment to authentic Malayali cooking in a relaxed, everyday setting.',
    logo: '/logo-canteen.png',
    logoWidth: 200,
    logoHeight: 100,
    accent: 'Canteen Culture',
    href: 'https://mahabelly.co/onlineorder/',
    locations: ['Gurgaon', 'Sonepat'],
    bg: 'bg-kerala-cream-dark',
    border: 'border-kerala-green/10',
    tag: 'bg-kerala-green text-white',
  },
]

export default function OurBrands() {
  return (
    <section id="brands" className="bg-white py-28 lg:py-40 overflow-hidden">
        {/* Header with Kerala elephant flanking illustrations — flex row */}
      <FadeInView className="mb-20">
        <div className="flex items-center justify-center">
          {/* Left — Elephant 1 */}
          <div className="hidden lg:block flex-shrink-0 w-[160px] xl:w-[200px] pointer-events-none select-none">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />
              <Image
                src="/kerala-eleph1.PNG"
                alt=""
                width={2392}
                height={1652}
                aria-hidden={true}
                className="w-full h-auto mix-blend-multiply opacity-80"
              />
            </div>
          </div>

          {/* Centre header text */}
          <div className="flex-1 text-center px-6 max-w-2xl">
            <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
              The Family
            </span>
            <div className="gold-divider" />
            <h2 className="font-display text-5xl lg:text-6xl text-kerala-green-dark font-bold leading-tight">
              Our Brands
            </h2>
            <p className="font-serif italic text-xl text-kerala-charcoal-mid mt-4 max-w-lg mx-auto">
              Two experiences. One soul.
            </p>
          </div>

          {/* Right — Elephant 2 */}
          <div className="hidden lg:block flex-shrink-0 w-[160px] xl:w-[200px] pointer-events-none select-none">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
              <Image
                src="/kerala-eleph2.PNG"
                alt=""
                width={4961}
                height={3508}
                aria-hidden={true}
                className="w-full h-auto mix-blend-multiply opacity-80"
              />
            </div>
          </div>
        </div>
      </FadeInView>

      {/* Brand cards */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        {brands.map((brand, i) => (
          <FadeInView key={i} delay={i * 0.15} direction={i === 0 ? 'left' : 'right'}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`group ${brand.bg} border ${brand.border} p-10 lg:p-12 flex flex-col h-full`}
            >
              {/* Logo */}
              <div className="mb-8 flex items-center justify-start">
                <div className="bg-white p-4 inline-flex rounded-sm shadow-sm">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={brand.logoWidth}
                    height={brand.logoHeight}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Tag */}
              <div className="mb-5">
                <span className={`font-sans text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 ${brand.tag}`}>
                  {brand.tagline}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-display text-3xl lg:text-4xl text-kerala-green-dark font-bold mb-2">
                {brand.name}
              </h3>

              {/* Accent */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-px bg-kerala-gold" />
                <span className="font-serif italic text-sm text-kerala-gold">
                  {brand.accent}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-kerala-charcoal-mid leading-relaxed mb-7 flex-1">
                {brand.description}
              </p>

              {/* Locations */}
              <div className="flex flex-wrap gap-2 mb-8">
                {brand.locations.map((loc) => (
                  <span
                    key={loc}
                    className="font-sans text-[10px] tracking-wider uppercase border border-kerala-green/30 text-kerala-green px-3 py-1"
                  >
                    {loc}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-widest uppercase text-kerala-green border-b border-kerala-green pb-0.5 hover:text-kerala-gold hover:border-kerala-gold transition-colors duration-300 self-start"
              >
                Explore
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </FadeInView>
        ))}
      </div>
    </section>
  )
}
