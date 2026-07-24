import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import OutletCard from '@/components/ui/OutletCard'
import Reveal from '@/components/ui/Reveal'
import { OUTLETS } from '@/lib/site'

const featured = ['saket', 'saidulajab', 'vasant-kunj']

export default function FeaturedOutlets() {
  const outlets = OUTLETS.filter((o) => featured.includes(o.slug))
  return (
    <section className="paper py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading kicker="Find a Table" title="Featured outlets" align="left" className="!mx-0" />
          <Reveal>
            <Link href="/locations" className="btn-outline-ink group">
              All locations <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {outlets.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 3) * 0.08}>
              <OutletCard outlet={o} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
