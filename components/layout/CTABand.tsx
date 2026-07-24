import Link from 'next/link'
import Image from 'next/image'
import { CalendarCheck, ShoppingBag, ChevronRight } from 'lucide-react'
import { LINKS } from '@/lib/site'
import Reveal from '@/components/ui/Reveal'

interface Props {
  title?: string
  subtitle?: string
  showExplore?: boolean
}

/** Reusable conversion band — Reserve / Order, repeated at natural decision points. */
export default function CTABand({
  title = 'Hungry yet?',
  subtitle = 'Reserve a table, order in, or find your nearest Mahabelly.',
  showExplore = true,
}: Props) {
  return (
    <section className="relative bg-red text-cream-soft overflow-hidden">
      <Image
        src="/art/elephants.png"
        alt=""
        width={640}
        height={440}
        aria-hidden
        className="absolute right-0 bottom-0 w-[26rem] opacity-[0.08] pointer-events-none select-none invert"
      />
      <div className="container-x py-16 md:py-20 relative">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
          <p className="font-serif italic text-xl text-cream-soft/85 mt-3">{subtitle}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn bg-cream-soft text-red hover:bg-cream">
              <CalendarCheck size={15} /> Reserve a Table
            </a>
            <a href={LINKS.orderOnline} className="btn border border-cream-soft/70 text-cream-soft hover:bg-cream-soft hover:text-red">
              <ShoppingBag size={15} /> Order Online
            </a>
            {showExplore && (
              <Link href="/locations" className="btn text-cream-soft hover:text-cream !px-2">
                Find a Location <ChevronRight size={15} />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
