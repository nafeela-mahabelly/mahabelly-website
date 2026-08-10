import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Home, Sparkles } from 'lucide-react'
import { pageMeta } from '@/lib/seo'
import { SITE } from '@/lib/site'

// Post-payment confirmation page (Razorpay redirects here after a successful
// payment). Kept out of search results — it's only reached after checkout.
export const metadata = {
  ...pageMeta({
    title: 'Thank You for Your Booking | Mahabelly',
    description: 'Your Mahabelly booking is confirmed.',
    path: '/thank-you',
  }),
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <section className="relative bg-ink text-cream min-h-screen flex items-center justify-center py-28 overflow-hidden">
      {/* subtle botanical accent */}
      <Image
        src="/art/curry-leaves.png"
        alt=""
        width={420}
        height={310}
        aria-hidden
        className="absolute -right-16 -bottom-10 w-80 opacity-[0.06] pointer-events-none select-none"
      />

      <div className="container-x max-w-2xl text-center relative">
        <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto">
          <CheckCircle2 size={40} className="text-gold-light" />
        </div>

        <span className="kicker text-gold-light mt-6 inline-block">Payment Successful</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 leading-tight">
          Thank you for booking with Mahabelly 🌼
        </h1>

        <p className="text-lg text-cream/70 mt-5 leading-relaxed">
          Your booking is confirmed. Razorpay has sent a payment receipt to your email and WhatsApp.
          Please keep it handy, as it is your booking confirmation.
        </p>
        <p className="font-serif italic text-xl text-gold-light mt-4">
          We can’t wait to serve you. See you at the feast!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
          <Link href="/" className="btn-red">
            <Home size={16} /> Back to Home
          </Link>
          <Link href="/sadhya-festivals" className="btn-outline">
            <Sparkles size={16} /> Onam Sadhya details
          </Link>
        </div>

        <p className="text-sm text-cream/50 mt-8">
          Questions about your booking? Call{' '}
          <a href={`tel:${SITE.phoneRaw}`} className="text-gold-light hover:underline">{SITE.phone}</a> or email{' '}
          <a href={`mailto:${SITE.email}`} className="text-gold-light hover:underline">{SITE.email}</a>.
        </p>
      </div>
    </section>
  )
}
