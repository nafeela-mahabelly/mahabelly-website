import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function SadhyaSection() {
  return (
    <section className="relative bg-red text-cream-soft overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[320px] lg:min-h-[560px]">
          <Image src="/photos/onam-real.jpg" alt="An Onam Sadhya served on a banana leaf" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-red/70 via-red/10 to-transparent" />
        </div>

        {/* Copy */}
        <div className="flex items-center py-16 md:py-20">
          <Reveal className="container-x lg:px-14 max-w-2xl">
            <span className="kicker text-cream-soft/80">A Feast That Brings Everyone Together</span>
            <div className="rule rule-left" style={{ background: 'linear-gradient(90deg,transparent,#f4ecd8,transparent)' }} />
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">The Onam Sadhya</h2>
            <div className="space-y-4 mt-6 text-cream-soft/85 leading-relaxed">
              <p>
                For Mahabelly, the Onam Sadhya is more than a festive meal. It is one of the most beautiful expressions of Kerala’s culture: generous, colourful, emotional and deeply rooted in community.
              </p>
              <p>
                Over the years, Mahabelly has become one of Delhi NCR’s recognised homes for the Sadhya. For Malayalis, it is a reminder of home. For many others, it is their first introduction to the extraordinary depth of Kerala’s vegetarian cuisine.
              </p>
            </div>
            <Link href="/sadhya-festivals" className="btn bg-cream-soft text-red hover:bg-cream mt-8 group">
              Explore Sadhya & Festivals <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
