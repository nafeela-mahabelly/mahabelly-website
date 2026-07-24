import Link from 'next/link'
import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import ContactForm from '@/components/forms/ContactForm'
import { pageMeta } from '@/lib/seo'
import { SITE, OUTLETS, waLink, mapsUrl } from '@/lib/site'

export const metadata = pageMeta({
  title: 'Contact Mahabelly | Get in Touch',
  description:
    'Contact Mahabelly — central phone, email and WhatsApp, outlet-wise details, and catering & press enquiry routes across Delhi NCR.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Get in touch"
        subtitle="Questions, reservations, catering or feedback — we’d love to hear from you."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        image="/photos/storefront-onam.jpg"
      />

      <section className="paper py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: quick contact + outlets */}
          <div>
            <Reveal>
              <SectionHeading kicker="Talk to us" title="Central contacts" align="left" className="!mx-0 mb-8" />
              <div className="grid sm:grid-cols-3 gap-3">
                <a href={`tel:${SITE.phoneRaw}`} className="lift flex flex-col items-center text-center gap-2 bg-cream-soft border border-ink/10 rounded-2xl p-5 hover:border-red/40">
                  <Phone size={22} className="text-red" />
                  <span className="font-sans text-xs font-semibold text-ink">Call</span>
                  <span className="text-[11px] text-charcoal-mute">{SITE.phone}</span>
                </a>
                <a href={waLink('Hi Mahabelly!')} target="_blank" rel="noopener noreferrer" className="lift flex flex-col items-center text-center gap-2 bg-cream-soft border border-ink/10 rounded-2xl p-5 hover:border-red/40">
                  <MessageCircle size={22} className="text-red" />
                  <span className="font-sans text-xs font-semibold text-ink">WhatsApp</span>
                  <span className="text-[11px] text-charcoal-mute">Chat with us</span>
                </a>
                <a href={`mailto:${SITE.email}`} className="lift flex flex-col items-center text-center gap-2 bg-cream-soft border border-ink/10 rounded-2xl p-5 hover:border-red/40">
                  <Mail size={22} className="text-red" />
                  <span className="font-sans text-xs font-semibold text-ink">Email</span>
                  <span className="text-[11px] text-charcoal-mute break-all">{SITE.email}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm text-charcoal-soft">
                <Clock size={16} className="text-red" /> We usually respond within one business day.
              </div>

              {/* Routes */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="border border-ink/10 rounded-2xl p-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-red">Catering</p>
                  <p className="text-sm text-charcoal-soft mt-1">Plan an event with our team.</p>
                  <Link href="/catering" className="btn-ghost mt-2 text-[11px]">Catering enquiry →</Link>
                </div>
                <div className="border border-ink/10 rounded-2xl p-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-red">Press & Media</p>
                  <p className="text-sm text-charcoal-soft mt-1">Interviews, features and assets.</p>
                  <a href={`mailto:${SITE.email}`} className="btn-ghost mt-2 text-[11px]">Email us →</a>
                </div>
              </div>
            </Reveal>

            {/* Outlet-wise */}
            <Reveal className="mt-10">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-charcoal-mute mb-4">Outlet-wise</h3>
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {OUTLETS.map((o) => (
                  <li key={o.slug} className="flex items-center justify-between gap-4 py-3">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <MapPin size={15} className="text-red mt-0.5 shrink-0" />
                      <div className="min-w-0">
                        <Link href={`/locations/${o.slug}`} className="font-sans text-sm font-medium text-ink hover:text-red">{o.name}</Link>
                        <p className="text-xs text-charcoal-mute truncate">{o.area}, {o.city}</p>
                      </div>
                    </div>
                    <a href={mapsUrl(o.mapsQuery)} target="_blank" rel="noopener noreferrer" className="font-sans text-[11px] tracking-wide uppercase text-charcoal-mute hover:text-red shrink-0">Map</a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <SectionHeading kicker="Send a message" title="General enquiry" align="left" className="!mx-0 mb-8" />
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
