import Image from 'next/image'
import { ExternalLink, Play, Award } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import Reviews from '@/components/Reviews'
import { pageMeta } from '@/lib/seo'
import { PRESS_AWARDS, PRESS_ARTICLES, PRESS_VIDEOS } from '@/lib/content'
import { SITE } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Mahabelly in the News | Press & Awards',
  description:
    'Mahabelly in the media — awards, reviews and features from The Hindu, NDTV Food, Times Now, Livemint, Time Out and more.',
  path: '/press',
})

export default function PressPage() {
  return (
    <>
      <PageHero
        kicker="In the News"
        title="Mahabelly in the media"
        subtitle="From restaurant reviews and awards to stories about Kerala food, festivals and entrepreneurship."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'In the News' }]}
        image="/festivals/times-food-award.jpg"
      />

      {/* Awards */}
      <section className="paper py-16 md:py-20">
        <div className="container-x">
          <SectionHeading kicker="Recognition" title="Awards" align="left" className="!mx-0 mb-10" />
          {PRESS_AWARDS.map((a) => (
            <Reveal key={a.title}>
              <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-center bg-ink text-cream overflow-hidden rounded-3xl">
                <div className="relative aspect-[27/10] min-h-[170px] p-4">
                  <Image src={a.image} alt={a.title} fill className="object-contain" sizes="(max-width:768px) 100vw, 55vw" />
                </div>
                <div className="p-8">
                  <Award size={28} className="text-gold-light" />
                  <p className="font-sans text-xs tracking-widest uppercase text-gold-light mt-4">{a.publication}</p>
                  <h3 className="font-display text-2xl font-bold mt-2 leading-snug">{a.title}</h3>
                  <p className="text-cream/60 text-sm mt-2">{a.note}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Team receiving the Times Food Awards */}
          <Reveal className="mt-6 grid md:grid-cols-[1fr_1.1fr] gap-6 items-center">
            <figure className="rounded-3xl overflow-hidden border border-ink/10 bg-cream-soft">
              <Image
                src="/festivals/times-food-award-team.jpg"
                alt="The Mahabelly team receiving the Times Food & Nightlife Awards"
                width={1280}
                height={1280}
                className="w-full h-auto object-cover"
                sizes="(max-width:768px) 100vw, 45vw"
              />
            </figure>
            <div>
              <p className="font-serif italic text-2xl text-ink leading-snug">
                “Best South Indian &amp; Coastal Cuisine Restaurant, Delhi.”
              </p>
              <p className="text-charcoal-soft mt-4 leading-relaxed">
                The Mahabelly team, on stage to receive the Times Food &amp; Nightlife Awards across the years — a recognition we owe entirely to our guests.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-sand py-16 md:py-20">
        <div className="container-x">
          <SectionHeading kicker="Press & Reviews" title="Featured articles" align="left" className="!mx-0 mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRESS_ARTICLES.map((p, i) => (
              <Reveal key={p.href} delay={(i % 3) * 0.05}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift group flex flex-col h-full bg-cream-soft border border-ink/10 rounded-2xl hover:border-red/40 p-6"
                >
                  <p className="font-sans text-[11px] tracking-widest uppercase text-red">{p.publication}</p>
                  <h3 className="font-display text-lg font-bold text-ink mt-2 leading-snug flex-1">{p.title}</h3>
                  <span className="inline-flex items-center gap-1.5 font-sans text-[11px] tracking-wide uppercase text-charcoal-mute group-hover:text-red mt-4">
                    Read <ExternalLink size={12} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="paper py-16 md:py-20">
        <div className="container-x">
          <SectionHeading kicker="Watch" title="Video features" align="left" className="!mx-0 mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRESS_VIDEOS.map((v, i) => (
              <Reveal key={v.href} delay={(i % 4) * 0.05}>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift group flex items-center gap-3 bg-ink text-cream rounded-2xl p-5 hover:bg-ink-soft"
                >
                  <span className="w-10 h-10 rounded-full bg-red flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Play size={16} className="text-cream translate-x-0.5" fill="currentColor" />
                  </span>
                  <span>
                    <span className="block font-sans text-sm font-semibold">{v.title}</span>
                    <span className="block font-sans text-[11px] tracking-wide uppercase text-cream/50">{v.publication}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="text-sm text-charcoal-mute mt-8">
            Press enquiries: <a href={`mailto:${SITE.email}`} className="text-red hover:underline">{SITE.email}</a>
          </p>
        </div>
      </section>

      {/* Testimonials / reviews (merged into In the News) */}
      <Reviews tone="dark" />

      <CTABand />
    </>
  )
}
