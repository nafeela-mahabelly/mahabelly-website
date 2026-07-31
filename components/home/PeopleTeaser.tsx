import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

export default function PeopleTeaser() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center py-16 md:py-24">
          <Reveal className="container-x lg:pr-14 max-w-xl">
            <span className="kicker text-gold-light">The People Behind the Plates</span>
            <div className="rule rule-left rule-gold" />
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Built by around 160 people.
            </h2>
            <p className="text-cream/70 leading-relaxed mt-6">
              Mahabelly is built by chefs, servers, stewards, managers, delivery teams and many others whose care is felt in every meal. Meet the people who make the brand what it is.
            </p>
            <Link href="/our-people" className="btn-outline mt-8 group">
              Meet the Mahabelly family <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
        <div className="relative min-h-[300px] lg:min-h-[520px] order-first lg:order-last">
          <Image src="/photos/team-garland.jpg" alt="The Mahabelly team" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-ink/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
