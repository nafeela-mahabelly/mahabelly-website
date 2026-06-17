'use client'

import Image from 'next/image'
import FadeInView from './ui/FadeInView'
import {
  BookOpen, Sprout, Flame, Heart, Award, Clock
} from 'lucide-react'

const pillars = [
  {
    icon: BookOpen,
    title: 'Authentic Recipes',
    description:
      "Every dish is rooted in Kerala's culinary canon sourced from home kitchens, regional cooks and generations of Malayali families who never wrote their recipes down.",
  },
  {
    icon: Sprout,
    title: 'Fresh Ingredients',
    description:
      'Coconut oil, curry leaves, Malabar spices and fresh seafood. We choose ingredients with the same scrutiny a Kerala grandmother would bring to the morning market.',
  },
  {
    icon: Flame,
    title: 'Traditional Methods',
    description:
      'Slow cooking. Clay pots. Banana leaf wrapping. Stone-ground masalas. We resist shortcuts because the process is where the flavour lives.',
  },
  {
    icon: Heart,
    title: 'Warm Hospitality',
    description:
      'In Kerala, a guest is God - Atithi Devo Bhava flows through every interaction. From the first welcome to the last payasam, you are family here.',
  },
  {
    icon: Award,
    title: 'Modern Presentation',
    description:
      'Heritage on the palate, contemporary on the eye. We believe great food deserves beautiful setting - plated with care, served with intention.',
  },
  {
    icon: Clock,
    title: 'Consistent Excellence',
    description:
      'Whether it is your first visit or your fiftieth, the fish curry tastes the same. Consistency is our quiet promise to everyone who loves Mahabelly.',
  },
]

export default function WhyMahabelly() {
  return (
    <section className="bg-kerala-cream-dark py-28 lg:py-40 overflow-hidden relative">
      {/* Background texture layer */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_1px_1px,_#1B4D3E_1px,_transparent_0)] bg-[length:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header with Kerala lion flanking illustrations — flex row */}
        <FadeInView className="mb-20">
          <div className="flex items-center justify-center">
            {/* Left — Kerala lion */}
            <div className="hidden lg:block flex-shrink-0 w-[130px] xl:w-[160px] pointer-events-none select-none">
              <div className="relative">
                <div className="absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-kerala-cream-dark to-transparent" />
                <Image
                  src="/kerala-lion1.png"
                  alt=""
                  width={529}
                  height={608}
                  aria-hidden={true}
                  className="w-full h-auto mix-blend-multiply opacity-60"
                />
              </div>
            </div>

            {/* Centre header text */}
            <div className="flex-1 text-center px-6 max-w-2xl">
              <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
                The Mahabelly Way
              </span>
              <div className="gold-divider" />
              <h2 className="font-display text-5xl lg:text-6xl text-kerala-green-dark font-bold leading-tight">
                Why Mahabelly
              </h2>
              <p className="font-serif italic text-xl text-kerala-charcoal-mid mt-4 max-w-xl mx-auto">
                Six commitments we make to every guest, every day.
              </p>
            </div>

            {/* Right — Kerala lion 2 */}
            <div className="hidden lg:block flex-shrink-0 w-[130px] xl:w-[160px] pointer-events-none select-none">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-kerala-cream-dark to-transparent" />
                <Image
                  src="/kerala-lion2.png"
                  alt=""
                  width={535}
                  height={597}
                  aria-hidden={true}
                  className="w-full h-auto mix-blend-multiply opacity-60"
                />
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <FadeInView key={i} delay={i * 0.08} direction="up">
                <div className="group bg-kerala-cream border border-kerala-green/10 p-8 hover:border-kerala-gold/50 hover:shadow-lg transition-all duration-500">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center border border-kerala-green/20 group-hover:border-kerala-gold/60 group-hover:bg-kerala-gold/5 transition-all duration-500 mb-6">
                    <Icon size={20} className="text-kerala-green group-hover:text-kerala-gold transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl text-kerala-green-dark font-bold mb-3">
                    {pillar.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-0.5 bg-kerala-gold/40 mb-4 group-hover:w-12 group-hover:bg-kerala-gold transition-all duration-500" />

                  {/* Description */}
                  <p className="font-sans text-sm text-kerala-charcoal-mid leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </FadeInView>
            )
          })}
        </div>

        {/* Pull quote + Theyyam dancer pair */}
        <FadeInView className="mt-24" delay={0.2}>
          <div className="relative flex items-center justify-center gap-0">
            {/* Theyyam dancer — left side, desktop only */}
            <div className="hidden lg:block flex-shrink-0 w-[160px] xl:w-[200px] pointer-events-none select-none">
              <div className="relative">
                <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-kerala-cream-dark to-transparent" />
                <Image
                  src="/kerala-theyyam.png"
                  alt=""
                  width={407}
                  height={577}
                  aria-hidden={true}
                  className="w-full h-auto mix-blend-multiply opacity-55"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-3xl mx-auto text-center px-4">
              <div className="w-16 h-px bg-kerala-gold mx-auto mb-8" />
              <blockquote className="font-serif text-3xl lg:text-4xl text-kerala-green-dark leading-snug italic">
                &ldquo;Contemporary Kerala meets modern hospitality — without losing a single drop of soul.&rdquo;
              </blockquote>
              <div className="w-16 h-px bg-kerala-gold mx-auto mt-8" />
            </div>

            {/* Theyyam dancer — right side, mirrored, desktop only */}
            <div className="hidden lg:block flex-shrink-0 w-[160px] xl:w-[200px] pointer-events-none select-none">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-kerala-cream-dark to-transparent" />
                <Image
                  src="/kerala-theyyam.png"
                  alt=""
                  width={407}
                  height={577}
                  aria-hidden={true}
                  className="w-full h-auto mix-blend-multiply opacity-55"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
