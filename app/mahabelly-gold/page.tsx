import Image from 'next/image'
import { Crown, QrCode, BadgeCheck, Gift, ArrowRight, Check } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Mahabelly Gold | Our New Exclusive Loyalty Club',
  description:
    'Mahabelly Gold is our new exclusive loyalty club. Earn 10% cashback at any Mahabelly or Mahabelly Canteen outlet, with a welcome gift when you enrol. Scan, claim and redeem.',
  path: '/mahabelly-gold',
})

// Client-supplied join link (WhatsApp). Kept verbatim, including the QR Code ID.
const GOLD_JOIN_URL =
  'https://wa.me/919717116015?text=Halla%20%F0%9F%91%8B%20I%20want%20to%20join%20the%20MAHABELLY%20GOLD%20club%20and%20unlock%20the%20best%20of%20Mahabelly%21%20%F0%9F%94%91%20%20%20QR%20Code%20ID%3A%20QR%23D5le8F_G'

const GOLD_TERMS_URL =
  'https://docs.google.com/document/d/11PuoFxjYEO4ggnNQYMvuXnLSHZmXF_oF3avy1DlrDPA/edit?tab=t.0#heading=h.891vynwuqskb'

const steps = [
  { icon: QrCode, label: 'Scan' },
  { icon: BadgeCheck, label: 'Claim' },
  { icon: Gift, label: 'Redeem' },
]

const benefits = [
  'Earn 10% cashback on every rupee you spend at any Mahabelly or Mahabelly Canteen outlet.',
  'Enjoy a welcome gift when you enrol, along with special surprises on your milestones.',
]

export default function MahabellyGoldPage() {
  return (
    <>
      <PageHero
        kicker="Loyalty Club"
        title="Mahabelly Gold"
        subtitle="Our New Exclusive Loyalty Club"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Mahabelly Gold' }]}
      />

      <section className="bg-ink text-cream py-16 md:py-24">
        <div className="container-x max-w-5xl">
          {/* Tagline */}
          <Reveal className="text-center">
            <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto">
              <Crown size={34} className="text-gold-light" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-6 leading-tight">
              Your golden ticket to eat more &amp; earn more!
            </h2>
          </Reveal>

          {/* Scan → Claim → Redeem */}
          <Reveal className="mt-12">
            <ol className="flex items-center justify-center gap-2 sm:gap-6" aria-label="How to join Mahabelly Gold">
              {steps.map((s, i) => (
                <li key={s.label} className="flex items-center gap-2 sm:gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-ink-soft border border-gold/40 flex items-center justify-center">
                      <s.icon size={26} className="text-gold-light" />
                    </div>
                    <span className="font-sans text-[11px] tracking-widest uppercase text-gold-light mt-3">Step {i + 1}</span>
                    <span className="font-display text-xl sm:text-2xl font-bold mt-0.5">{s.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight size={22} className="text-gold/60 shrink-0 -mt-10" aria-hidden />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>

          {/* QR (desktop scan) + benefits */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-14 md:mt-16 items-center">
            <Reveal className="text-center">
              {/* The QR is for scanning from another screen, so it is shown from tablet up.
                  On phones the button below opens WhatsApp directly. */}
              <a
                href={GOLD_JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block mx-auto w-64 lg:w-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gold/30"
                aria-label="Mahabelly Gold QR code: scan with your phone, or click to join on WhatsApp"
              >
                <Image
                  src="/gold/mahabelly-gold-qr.png"
                  alt="QR code to join Mahabelly Gold on WhatsApp"
                  width={900}
                  height={900}
                  className="w-full h-auto"
                  sizes="288px"
                />
              </a>
              <a
                href={GOLD_JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gold text-ink hover:bg-gold-light mt-0 md:mt-6"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="md:hidden">Tap to join Mahabelly Gold</span>
                <span className="hidden md:inline">Scan now to join Mahabelly Gold</span>
              </a>
              <p className="hidden md:block text-xs text-cream/50 mt-3">
                Scan with your phone camera, or click to open WhatsApp.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-ink-soft/60 border border-gold/30 rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold text-gold-light">Unlock the best of Mahabelly:</h3>
                <ul className="mt-5 space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-cream/85 leading-relaxed">
                      <Check size={18} className="text-gold-light shrink-0 mt-1" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-cream/60 mt-5">
                For terms and conditions on Mahabelly gold,{' '}
                <a
                  href={GOLD_TERMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-light underline underline-offset-2 hover:text-gold"
                >
                  click here
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
