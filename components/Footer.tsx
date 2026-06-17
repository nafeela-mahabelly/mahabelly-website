'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import FadeInView from './ui/FadeInView'

const quickLinks = [
  { label: 'Our Story',    href: '#story' },
  { label: 'Experiences',  href: '#experiences' },
  { label: 'Locations',    href: '#locations' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Order Online', href: 'https://mahabelly.co/onlineorder/' },
]

const branchLinks = [
  { label: 'Mahabelly Canteen, Green Park', href: 'https://maps.google.com/?q=Mahabelly+Canteen+Green+Park+Delhi' },
  { label: 'Mahabelly GK, Greater Kailash', href: 'https://maps.google.com/?q=Mahabelly+GK+Delhi' },
  { label: 'Mahabelly Saket',               href: 'https://maps.google.com/?q=Mahabelly+Saket+Delhi' },
  { label: 'Delivery Kitchen, Gurgaon',     href: 'https://maps.google.com/?q=Mahabelly+Gurgaon' },
  { label: 'OP Jindal University, Sonepat', href: 'https://maps.google.com/?q=OP+Jindal+Global+University+Sonepat' },
]

const socials = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/mahabelly' },
  { label: 'Facebook',  icon: Facebook,  href: 'https://facebook.com/mahabelly' },
]

const scrollTo = (href: string) => {
  if (href.startsWith('#')) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.open(href, '_blank', 'noopener noreferrer')
  }
}

export default function Footer() {
  return (
    <footer className="bg-kerala-green-dark text-kerala-cream/70 overflow-hidden relative">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <FadeInView className="lg:col-span-1" direction="none">
            {/* Logo — inverted to white on dark background */}
            <div className="mb-6">
              <div className="mb-2">
                <Image
                  src="/logo_alter.PNG"
                  alt="Mahabelly"
                  width={280}
                  height={140}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-kerala-cream/55 mb-7">
              Home of the Onam Sadhya and winner of the Times Food & Nightlife Award for "Best South Indian Restaurant" in Delhi three times in a row, Mahabelly is the ultimate stop for all the culinary treasures that God’s Own Country has to offer.
            </p>
            {/* Social icons — Instagram & Facebook only */}
            <div className="flex gap-4">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-kerala-green-mid/60 flex items-center justify-center text-kerala-cream/50 hover:border-kerala-gold hover:text-kerala-gold transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </FadeInView>

          {/* Quick links */}
          <FadeInView delay={0.1} direction="none">
            <h4 className="font-sans text-[10px] tracking-ultra uppercase text-kerala-gold font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-sans text-sm text-kerala-cream/55 hover:text-kerala-cream transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-kerala-gold/0 group-hover:bg-kerala-gold/60 transition-all duration-300 flex-shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </FadeInView>

          {/* Branches */}
          <FadeInView delay={0.2} direction="none">
            <h4 className="font-sans text-[10px] tracking-ultra uppercase text-kerala-gold font-semibold mb-6">
              Locations
            </h4>
            <ul className="space-y-3">
              {branchLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-kerala-cream/55 hover:text-kerala-cream transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-kerala-gold/0 group-hover:bg-kerala-gold/60 transition-all duration-300 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeInView>

          {/* Contact */}
          <FadeInView delay={0.3} direction="none">
            <h4 className="font-sans text-[10px] tracking-ultra uppercase text-kerala-gold font-semibold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-kerala-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:connect@mahabelly.com"
                  className="font-sans text-sm text-kerala-cream/55 hover:text-kerala-cream transition-colors"
                >
                  connect@mahabelly.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-kerala-gold mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+919017906907" className="block font-sans text-sm text-kerala-cream/55 hover:text-kerala-cream transition-colors">
                    +91 90179 06907
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-kerala-gold mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-kerala-cream/55">
                  Delhi NCR, India
                </span>
              </li>
            </ul>

            {/* Newsletter mini */}
            <div className="mt-8">
              <p className="font-sans text-xs text-kerala-cream/40 mb-3">
                Stories, recipes & specials — in your inbox.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-kerala-green/30 border border-kerala-green-mid/40 text-kerala-cream placeholder:text-kerala-cream/30 font-sans text-xs px-3 py-2.5 focus:outline-none focus:border-kerala-gold transition-colors"
                />
                <button
                  type="submit"
                  className="bg-kerala-gold text-white font-sans text-[10px] font-semibold tracking-widest uppercase px-3 py-2.5 hover:bg-kerala-green-mid transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </FadeInView>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-kerala-gold/30 to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-sans text-xs text-kerala-cream/30">
          © {new Date().getFullYear()} Mahabelly / FENN & JACOB ASSOCIATES LLP. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { label: 'Privacy Policy',          href: 'https://mahabelly.co/privacy-policy' },
            { label: 'Terms & Conditions',       href: 'https://mahabelly.co/terms-conditions' },
            { label: 'Cancellation & Refund',    href: 'https://mahabelly.co/cancellation-refund-policy' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-kerala-cream/30 hover:text-kerala-cream/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>

  )
}
