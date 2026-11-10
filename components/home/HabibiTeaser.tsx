import Image from 'next/image'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import HabibiCityPicker from '@/components/habibi/HabibiCityPicker'
import { HABIBI, HABIBI_DISHES } from '@/lib/habibi'

// Homepage launch block for Mahabelly Habibi (online-only, delivery-only).
const featured = ['Kerala Shawarma', 'Al Faham', 'Mandhi'].map((n) => HABIBI_DISHES.find((d) => d.name === n)!)

export default function HabibiTeaser() {
  return (
    <section aria-labelledby="habibi-home" className="relative bg-habibi-pale/60 py-20 md:py-28 overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <Image src={HABIBI.logo} alt={`${HABIBI.name}, ${HABIBI.tagline}`} width={761} height={900} className="w-36 md:w-44 h-auto" />
            <span className="kicker text-habibi block mt-6">New · {HABIBI.descriptor}</span>
            <h2 id="habibi-home" className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mt-2">
              {HABIBI.headline}
            </h2>
            <p className="text-charcoal-soft leading-relaxed mt-5 max-w-xl">{HABIBI.story[0]}</p>
            <p className="text-charcoal-soft leading-relaxed mt-3 max-w-xl">{HABIBI.story[2]}</p>
            <Link href={HABIBI.menuHref} className="btn-ink mt-7 w-full sm:w-auto">
              <BookOpen size={15} className="shrink-0" /> View Habibi Menu
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-3">
              {featured.map((d) => (
                <figure key={d.name} className="overflow-hidden rounded-2xl bg-cream-soft border border-ink/10">
                  <div className="relative aspect-square">
                    <Image src={d.image} alt={d.name} fill className="object-cover" sizes="(max-width:1024px) 33vw, 16vw" />
                  </div>
                  <figcaption className="px-2 py-2 text-center font-sans text-[11px] sm:text-xs font-semibold text-ink leading-tight">
                    {d.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Outlet-specific ordering, by city */}
        <Reveal className="mt-12 max-w-4xl">
          <h3 className="font-display text-2xl font-bold text-ink mb-5">Order Habibi</h3>
          <HabibiCityPicker />
        </Reveal>
      </div>
    </section>
  )
}
