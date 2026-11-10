import Image from 'next/image'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { EXPERIENCES } from '@/lib/content'

export default function Experiences() {
  return (
    <section className="paper py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          kicker="Signature Experiences"
          title="Seven ways into Kerala"
          subtitle="From the everyday meal to the grand feast."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {EXPERIENCES.map((exp, i) => {
            const card = (
              <article className="lift group relative h-72 overflow-hidden rounded-2xl bg-ink">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-cream">{exp.title}</h3>
                  <p className="font-sans text-sm text-cream/80 mt-1.5 leading-snug">{exp.blurb}</p>
                </div>
              </article>
            )
            return (
              <Reveal key={exp.title} delay={(i % 3) * 0.08}>
                {'href' in exp && exp.href ? (
                  <Link href={exp.href} className="block rounded-2xl" aria-label={`${exp.title}: view menu`}>
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal className="text-center mt-12">
          <Link href="/menu" className="btn-outline-ink">
            <BookOpen size={15} className="shrink-0" /> Explore the full menu
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
