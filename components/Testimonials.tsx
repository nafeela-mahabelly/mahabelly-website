'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import FadeInView from './ui/FadeInView'

const reviews = [
  {
    name: 'Deepti Sharma',
    location: 'New Delhi',
    rating: 5,
    image: '/t1.png',
    text: "I went with a friend and got idli, masala pea curry and malabar parotta. The price of the curry on the menu might seem a bit high but the portion sizes are generous...the malabar parotta was so flaky and crispy to eat. The Idlis were made fresh...steaming hot and both their chutneys were delicious. Do give them a visit if u wanna taste authentic South Indian food other than the usual dosa idli.",
    dish: 'Dosa & Idly',
  },
  {
    name: 'vikas kamal',
    location: 'Gurgaon',
    rating: 5,
    image: '/t2.png',
    text: "Totally worth..Visited for lunch and found each and every dish I loved wheather it's North Indian or south Indian with good taste also they served liquor.. so for each time of taste you will found there..Highly recommended place for couple, families & also for alone...10 out of 10 for food😀😀",
    dish: 'Malabar Biryani',
  },
  {
    name: 'Kanishka Dasgupta',
    location: 'Saket, Delhi',
    rating: 5,
    image: '/t3.png',
    text: 'Amidst a whirlwind of meetings, we found solace at Mahabelly, a culinary delight for those like me with a penchant for South Indian non-vegetarian cuisine. The expansive menu and inviting ambiance elevated the entire dining experience.',
    dish: 'Thali Experience',
  },
  {
    name: 'Nikhil Nangia',
    location: 'Greater Kailash',
    rating: 5,
    image: '/t4.png',
    text: "One of the best Malabar food I've eaten in Delhi. Recommended by a friend, I came here and boy I was definitely not disappointed by the mood or the service. So impressed that I got my family along the next time and not so surprising that they loved the food as well. A definite reccomend. Prawn with Mango curry, Chicken chettinad dosa, Prawn Varathathu, Fish fry and their Mushroom Mappas along with Appam and Malabar porotta. Absolute delish.",
    dish: 'Appam & Malabar Porotta',
  },
  {
    name: 'sreelakshmi menon',
    location: 'New Delhi',
    rating: 5,
    image: '/t5.png',
    text: 'The food was very tasty, vegetarian must try vegetables biriyani, plus kadala curry with malabar parota.',
    dish: 'Biriyani & Kadala Curry',
  },
]

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % reviews.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  const review = reviews[current]

  return (
    <section className="bg-kerala-cream-dark py-28 lg:py-40 overflow-hidden">
      {/* Header with Theyyam flanking illustrations — flex row */}
      <FadeInView className="mb-16">
        <div className="flex items-center justify-center">
          {/* Left — Theyyam dancer */}
          <div className="hidden lg:block flex-shrink-0 w-[130px] xl:w-[160px] pointer-events-none select-none">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-kerala-cream-dark to-transparent" />
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

          {/* Centre header text */}
          <div className="flex-1 text-center px-6 max-w-2xl">
            <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
              Guest Voices
            </span>
            <div className="gold-divider" />
            <h2 className="font-display text-5xl lg:text-6xl text-kerala-green-dark font-bold leading-tight">
              What Our Guests Say
            </h2>
          </div>

          {/* Right — Theyyam dancer mirrored */}
          <div className="hidden lg:block flex-shrink-0 w-[130px] xl:w-[160px] pointer-events-none select-none">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-kerala-cream-dark to-transparent" />
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

      {/* Carousel */}
      <div
        className="max-w-4xl mx-auto px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-kerala-gold fill-kerala-gold" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="font-serif text-2xl lg:text-3xl text-kerala-green-dark leading-snug mb-8 max-w-3xl mx-auto">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-kerala-gold/40 mb-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-display text-lg text-kerala-green font-semibold">
                  {review.name}
                </span>
                <span className="font-sans text-xs tracking-widest uppercase text-kerala-charcoal-mid">
                  {review.location}
                </span>
                <span className="font-serif italic text-sm text-kerala-gold mt-1">
                  {review.dish}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 border border-kerala-green/30 flex items-center justify-center text-kerala-green hover:border-kerala-green hover:bg-kerala-green hover:text-kerala-cream transition-all duration-300"
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-6 h-2 bg-kerala-gold'
                    : 'w-2 h-2 bg-kerala-green/30 hover:bg-kerala-green/60'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-kerala-green/30 flex items-center justify-center text-kerala-green hover:border-kerala-green hover:bg-kerala-green hover:text-kerala-cream transition-all duration-300"
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Platform row */}
      <FadeInView className="max-w-7xl mx-auto px-6 mt-20">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { platform: 'Google Reviews', rating: '4.7', count: '2,300+' },
            { platform: 'Zomato',         rating: '4.5', count: '1,800+' },
            { platform: 'Swiggy',         rating: '4.6', count: '950+' },
          ].map((p) => (
            <div key={p.platform} className="text-center">
              <div className="font-display text-3xl text-kerala-green-dark font-bold">
                {p.rating}
                <span className="text-kerala-gold text-lg">★</span>
              </div>
              <div className="font-sans text-xs text-kerala-charcoal-mid mt-1">{p.count} reviews</div>
              <div className="font-sans text-[10px] tracking-widest uppercase text-kerala-mist mt-1">{p.platform}</div>
            </div>
          ))}
        </div>
      </FadeInView>
    </section>
  )
}
