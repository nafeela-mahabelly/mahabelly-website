import { Star } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import Reviews from '@/components/Reviews'
import Reveal from '@/components/ui/Reveal'
import CTABand from '@/components/layout/CTABand'
import { pageMeta } from '@/lib/seo'
import { REVIEW_PLATFORMS } from '@/lib/content'

export const metadata = pageMeta({
  title: 'Reviews | What Our Guests Say About Mahabelly',
  description:
    'Read what guests say about Mahabelly’s Kerala cuisine, and leave a review on Google or Zomato for your outlet.',
  path: '/reviews',
})

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        kicker="Reviews"
        title="What our guests say"
        subtitle="Taste, warmth, nostalgia and discovery — in our guests’ own words."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]}
        image="/photos/sadhya-serving.jpg"
      />

      <Reviews />

      {/* Leave a review */}
      <section className="bg-ink text-cream py-16 md:py-20">
        <div className="container-x text-center max-w-2xl mx-auto">
          <Reveal>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={22} className="text-gold-light fill-gold-light" />)}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Enjoyed your meal?</h2>
            <p className="text-cream/65 mt-3">Leave a review for your outlet — it means the world to our team.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {REVIEW_PLATFORMS.map((p) => (
                <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className="btn-outline">{p.label}</a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand showExplore={false} />
    </>
  )
}
