'use client'

import Image from 'next/image'
import FadeInView from './ui/FadeInView'

const chapters = [
  {
    eyebrow: 'Chapter One',
    title: "Kerala in our heart, \nDelhi is our home...",
    body: `Every dish at Mahabelly begins with a memory, the aroma of coconut oil in a grandmother's kitchen, the hiss of a mustard-seed tempering, the slow simmer of a fish curry left on the wood fire all afternoon. We didn't build a menu; we gathered a legacy.

    We’re a regional Indian restaurant championing Malayali cuisine and the diverse cultural fabric of the great state of Kerala.

    With contemporary native art adorning the walls and Malayali pop music in the background, our menu mirrors the rich tapestry of local produce and eating habits of Kerala’s people. Serving classics such as Prawn Mango Curry, Mutton Roast, Stews cooked in coconut milk, Malabar style Biriyani along with “Thattukada” street food favourites like Kothuporotta, Gunpowder Idlis and Fried Chicken, Mahabelly offers a warm, nostalgic and refreshingly honest dining experience in the heart of Delhi.`,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=900&q=80',
    imageAlt: 'Kerala kitchen — traditional cooking',
    layout: 'text-left' as const,
    accent: 'Coast-to-plate since 2016',
  },
  {
    eyebrow: 'Chapter Two',
    title: 'The Toddy Shop\nChronicles',
    body: `The kallu shappu - Kerala's beloved toddy shop is the original communal dining room. Here, fishermen, farmers and storytellers shared small plates over earthen cups of fermented coconut sap. The menu was never written down; it changed with the day's catch and season's harvest.

    Our fun and inventive bar program matches cool cocktails with “Toddy Shop” small plates, a window into the delicious food pairings born in the heart of rustic local bars serving coconut toddy, called “Kallu Shaap” in local speak.`,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=80',
    imageAlt: 'Kerala small plates — toddy shop style',
    layout: 'text-right' as const,
    accent: 'Kallu Shappu culture',
  },
  {
    eyebrow: 'Chapter Three',
    title: 'From Coast\nto Table',
    body: `Our latest adventure concept Mahabelly Canteen celebrates the undying bridge of love between the Middle East and Kerala serving Al Faham, Shawai and Shawarma, all local takes on Arabic classics along with “Kerala Meals”: the original Malayali style degustation menu.

    Home of the Onam Sadhya and winner of the Times Food & Nightlife Award for "Best South Indian Restaurant" in Delhi three times in a row, Mahabelly is the ultimate stop for all the culinary treasures that God’s Own Country has to offer.

Every ingredient we source is chosen with the same care our grandmothers exercised. Fresh, regional, seasonal and cooked with the patience that great Kerala food deserves.`,
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=900&q=80',
    imageAlt: 'Kerala seafood — fresh catch',
    layout: 'text-left' as const,
    accent: '580 km of coastline',
  },
]

export default function BrandStory() {
  return (
    <section id="story" className="bg-kerala-cream py-28 lg:py-40 overflow-hidden">
      {/* Header with Mohiniyattam flanking illustrations — flex row */}
      <FadeInView className="mb-24">
        <div className="flex items-center justify-center">
          {/* Left — Mohiniyattam */}
          <div className="hidden lg:block flex-shrink-0 w-[160px] xl:w-[200px] pointer-events-none select-none">
            <div className="relative h-[130px]">
              <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-kerala-cream to-transparent" />
              <Image
                src="/kerala-mohiniyattam.png"
                alt=""
                fill
                aria-hidden={true}
                className="object-cover object-right mix-blend-multiply opacity-60"
                sizes="200px"
              />
            </div>
          </div>

          {/* Centre header text */}
          <div className="flex-1 text-center px-6 max-w-2xl">
            <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
              Our Heritage
            </span>
            <div className="gold-divider" />
            <h2 className="font-display text-5xl lg:text-6xl text-kerala-green-dark font-bold max-w-2xl mx-auto leading-tight">
              More Than a Restaurant
            </h2>
            <p className="font-serif text-xl lg:text-2xl text-kerala-charcoal-mid italic mt-6 max-w-xl mx-auto leading-relaxed">
              &ldquo;A living archive of Kerala&apos;s most beloved food traditions.&rdquo;
            </p>
          </div>

          {/* Right — Mohiniyattam mirrored */}
          <div className="hidden lg:block flex-shrink-0 w-[160px] xl:w-[200px] pointer-events-none select-none">
            <div className="relative h-[130px]">
              <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-kerala-cream to-transparent" />
              <Image
                src="/kerala-mohiniyattam.png"
                alt=""
                fill
                aria-hidden={true}
                className="object-cover object-left mix-blend-multiply opacity-60"
                sizes="200px"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </div>
        </div>
      </FadeInView>

      {/* Alternating chapters */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 lg:space-y-40">
        {chapters.map((chapter, i) => (
          <div
            key={i}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              chapter.layout === 'text-right' ? 'lg:[&>*:first-child]:order-last' : ''
            }`}
          >
            {/* Text side */}
            <FadeInView
              delay={0.1}
              direction={chapter.layout === 'text-right' ? 'right' : 'left'}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-kerala-gold" />
                <span className="font-sans text-xs tracking-widest uppercase text-kerala-gold font-medium">
                  {chapter.eyebrow}
                </span>
              </div>
              <h3 className="font-display text-4xl lg:text-5xl text-kerala-green-dark font-bold leading-tight whitespace-pre-line">
                {chapter.title}
              </h3>
              <div className="w-12 h-0.5 bg-kerala-green-light/40" />
              {chapter.body.split('\n\n').map((para, j) => (
                <p key={j} className="font-sans text-base text-kerala-charcoal-mid leading-[1.9]">
                  {para}
                </p>
              ))}
              <div className="inline-flex items-center gap-3 pt-2">
                <div className="w-1 h-1 rounded-full bg-kerala-gold" />
                <span className="font-serif italic text-sm text-kerala-gold">
                  {chapter.accent}
                </span>
              </div>
            </FadeInView>

            {/* Image side */}
            <FadeInView
              delay={0.25}
              direction={chapter.layout === 'text-right' ? 'left' : 'right'}
            >
              <div className="relative group">
                <div
                  className={`absolute inset-0 border border-kerala-gold/30 transition-transform duration-700 ease-out-expo group-hover:scale-[1.02] ${
                    chapter.layout === 'text-right'
                      ? '-translate-x-4 -translate-y-4'
                      : 'translate-x-4 translate-y-4'
                  }`}
                />
                <div className="relative overflow-hidden aspect-[4/5]">
                  <Image
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-kerala-green/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </FadeInView>
          </div>
        ))}
      </div>
    </section>
  )
}
