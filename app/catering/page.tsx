import Image from 'next/image'
import { Clock, MapPin, Utensils } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CateringForm from '@/components/forms/CateringForm'
import { pageMeta } from '@/lib/seo'
import { CATERING_FORMATS, CATERING_SAMPLE_MENUS } from '@/lib/content'

export const metadata = pageMeta({
  title: 'Kerala Catering in Delhi NCR | Mahabelly',
  description:
    'Plan home gatherings, corporate meals, weddings and festive Kerala feasts with Mahabelly’s catering team. Send an enquiry — we respond within one business day.',
  path: '/catering',
})

export default function CateringPage() {
  return (
    <>
      <PageHero
        kicker="Catering"
        title="Bring Mahabelly to your table"
        subtitle="From intimate home gatherings to grand festive feasts — Kerala menus tailored to the occasion."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Catering' }]}
        image="/photos/catering-lights.jpg"
      />

      {/* Formats */}
      <section className="paper py-16 md:py-24">
        <div className="container-x">
          <SectionHeading kicker="What We Cater" title="Every kind of gathering" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {CATERING_FORMATS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.06}>
                <div className="lift h-full bg-cream-soft border border-ink/10 rounded-2xl p-7 hover:border-red/30">
                  <Utensils size={22} className="text-red" />
                  <h3 className="font-display text-xl font-bold text-ink mt-4">{c.title}</h3>
                  <p className="text-sm text-charcoal-soft mt-2 leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample menus + trust */}
      <section className="bg-ink text-cream py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="kicker text-gold-light">Sample Menus</span>
            <div className="rule rule-left rule-gold" />
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Menus built around your occasion</h2>
            <p className="text-cream/65 mt-4 leading-relaxed">
              Pricing changes with season and scale, so we shape menus around you rather than fixed packages. A few of the categories our team can build from:
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-6">
              {CATERING_SAMPLE_MENUS.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-cream/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-light mt-1.5 shrink-0" /> {m}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/photos/sadhya-tables.jpg" alt="A large Mahabelly Sadhya catering setup" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3 bg-ink-soft/60 border border-cream/10 rounded-xl p-4">
                <Clock size={20} className="text-gold-light shrink-0" />
                <p className="text-sm text-cream/75">Response within <strong className="text-cream">one business day</strong></p>
              </div>
              <div className="flex items-center gap-3 bg-ink-soft/60 border border-cream/10 rounded-xl p-4">
                <MapPin size={20} className="text-gold-light shrink-0" />
                <p className="text-sm text-cream/75">Serving across <strong className="text-cream">Delhi NCR</strong></p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="paper py-16 md:py-24">
        <div className="container-x max-w-4xl">
          <SectionHeading kicker="Enquire" title="Tell us about your event" subtitle="The more you share, the better we can plan." />
          <div className="mt-12">
            <CateringForm />
          </div>
        </div>
      </section>
    </>
  )
}
