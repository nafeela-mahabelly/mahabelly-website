import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { SITE, waLink } from '@/lib/site'

export default function CateringTeaser() {
  return (
    <section className="paper py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image src="/photos/catering-lights.jpg" alt="A Mahabelly catering spread under festive lights" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="kicker text-red">Bring Mahabelly to Your Table</span>
          <div className="rule rule-left" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            Catering, from home tables to grand feasts.
          </h2>
          <p className="text-charcoal-soft leading-relaxed mt-6 max-w-xl">
            From intimate home gatherings to office lunches, weddings, festive Sadhyas and large-format events, Mahabelly offers Kerala menus tailored to the occasion.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/catering" className="btn-red group">
              Send a catering enquiry <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={waLink('Hi Mahabelly, I’d like to talk to your catering team.')} target="_blank" rel="noopener noreferrer" className="btn-outline-ink">
              <MessageCircle size={15} /> Speak to our team
            </a>
          </div>
          <p className="font-sans text-xs text-charcoal-mute mt-5">
            Or call us directly at{' '}
            <a href={`tel:${SITE.phoneRaw}`} className="text-red hover:underline">{SITE.phone}</a>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
