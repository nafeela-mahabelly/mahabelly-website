import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { EXPERIENCES } from '@/lib/content'

export default function Experiences() {
  return (
    <section className="paper py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          kicker="Signature Experiences"
          title="Six ways into Kerala"
          subtitle="From the everyday meal to the grand feast."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.title} delay={(i % 3) * 0.08}>
              <article className="lift group relative h-72 overflow-hidden rounded-2xl bg-ink">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-cream">{exp.title}</h3>
                  <p className="font-sans text-sm text-cream/75 mt-1.5 leading-snug">{exp.blurb}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <Link href="/menu" className="btn-outline-ink group">
            Explore the full menu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
