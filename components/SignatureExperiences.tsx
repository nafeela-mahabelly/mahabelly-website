'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeInView from './ui/FadeInView'

const dishes = [
  {
    name: 'Appam & Stew',
    tagline: 'The Quintessential Kerala Breakfast',
    description:
      'Lacy rice hoppers crisped at the edges, pillowy at the centre — cradling a fragrant coconut milk stew of vegetables or meat. A dish that belongs to Sunday mornings and slow conversations.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
    alt: 'Appam with Kerala stew',
    tag: 'Breakfast',
  },
  {
    name: 'Kerala Seafood',
    tagline: 'Straight from the Malabar Coast',
    description:
      "Pearl spot in banana leaf. Karimeen curry. Prawns in tamarind. Our seafood celebrates the bounty of the Arabian Sea with spice, heat, and the irreplaceable depth of Kerala's coastal cuisine.",
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80',
    alt: 'Kerala seafood platter',
    tag: 'Coastal',
  },
  {
    name: 'Malabar Biryani',
    tagline: 'A Legacy of Centuries',
    description:
      'Slow-cooked in dum, layered with Malabar spices, golden fried onions, and the warm perfume of ghee. A rice dish unlike any other — light, aromatic, and deeply satisfying.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
    alt: 'Malabar Biryani',
    tag: 'Signature',
  },
  {
    name: 'Thali Experience',
    tagline: 'The Full Kerala Spread',
    description:
      'A banana leaf laden with rice, an array of curries, thoran, pachadi, pickle, and payasam. Eating with your hands on a banana leaf is not just tradition — it is the only correct way.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
    alt: 'Kerala thali on banana leaf',
    tag: 'Feast',
  },
  {
    name: 'Toddy Shop Plates',
    tagline: 'Kallu Shappu Originals',
    description:
      "Beef fry. Kappa. Squid roast. Duck mappas. These are the dishes Kerala's toddy shops perfected over generations — bold, punchy, made for sharing, and utterly addictive.",
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
    alt: 'Kerala toddy shop small plates',
    tag: 'Small Plates',
  },
]

export default function SignatureExperiences() {
  return (
    <section
      id="experiences"
      className="bg-kerala-green-dark py-28 lg:py-40 overflow-hidden"
    >
      {/* Header with Bharatanatyam flanking illustrations — flex-row layout */}
      <FadeInView className="mb-20">
        <div className="flex items-center justify-center">
          {/* Left — Bharatanatyam dancer 1 */}
          <div className="hidden lg:block flex-shrink-0 w-[130px] xl:w-[160px] pointer-events-none select-none">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 w-14 z-10 bg-gradient-to-l from-kerala-green-dark to-transparent" />
              <Image
                src="/kerala-bharatanatyam-1.png"
                alt=""
                width={312}
                height={429}
                aria-hidden={true}
                className="w-full h-auto opacity-50"
              />
            </div>
          </div>

          {/* Centre header text */}
          <div className="flex-1 text-center px-6 max-w-2xl">
            <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
              On The Table
            </span>
            <div className="gold-divider" />
            <h2 className="font-display text-5xl lg:text-6xl text-kerala-cream font-bold leading-tight">
              Signature Experiences
            </h2>
            <p className="font-serif italic text-xl text-kerala-cream/60 mt-4 max-w-lg mx-auto">
              Each dish tells a story. Each plate is a journey.
            </p>
          </div>

          {/* Right — Bharatanatyam dancer 2 */}
          <div className="hidden lg:block flex-shrink-0 w-[130px] xl:w-[160px] pointer-events-none select-none">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-14 z-10 bg-gradient-to-r from-kerala-green-dark to-transparent" />
              <Image
                src="/kerala-bharatanatyam-2.png"
                alt=""
                width={303}
                height={438}
                aria-hidden={true}
                className="w-full h-auto opacity-50"
              />
            </div>
          </div>
        </div>
      </FadeInView>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, i) => (
            <FadeInView key={i} delay={i * 0.08} direction="up">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-kerala-green/30 border border-kerala-green-mid/30 overflow-hidden cursor-default"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-kerala-green-dark via-kerala-green-dark/30 to-transparent" />

                  {/* Tag chip */}
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-[10px] tracking-widest uppercase bg-kerala-gold text-kerala-green-dark px-3 py-1 font-semibold">
                      {dish.tag}
                    </span>
                  </div>

                  {/* Text on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-serif italic text-sm text-kerala-gold-light mb-1">
                      {dish.tagline}
                    </p>
                    <h3 className="font-display text-2xl lg:text-3xl text-kerala-cream font-bold leading-tight">
                      {dish.name}
                    </h3>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: 'auto' }}
                      className="font-sans text-sm text-kerala-cream/80 mt-3 leading-relaxed overflow-hidden"
                    >
                      {dish.description}
                    </motion.p>
                  </div>
                </div>

                {/* Description strip — always visible on mobile */}
                <div className="block lg:hidden p-5 bg-kerala-green-dark/80">
                  <p className="font-sans text-sm text-kerala-cream/75 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </motion.article>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* CTA nudge */}
      <FadeInView className="text-center mt-16">
        <a
          href="https://mahabelly.co/onlineorder/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Order Online
        </a>
      </FadeInView>
    </section>
  )
}
