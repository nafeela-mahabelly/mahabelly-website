'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Check } from 'lucide-react'
import { SITE, LINKS, SOCIALS, AWARD } from '@/lib/site'

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Menu', href: '/menu' },
      { label: 'Locations', href: '/locations' },
      { label: 'Mahabelly Canteen', href: '/canteen' },
      { label: 'Our People', href: '/our-people' },
    ],
  },
  {
    title: 'Plan',
    links: [
      { label: 'Reserve a Table', href: LINKS.reserve, external: true },
      { label: 'Order Online', href: LINKS.orderOnline },
      { label: 'Catering', href: '/catering' },
      { label: 'Sadhya & Festivals', href: '/sadhya-festivals' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'In the News', href: '/press' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Gallery', href: '/#gallery' },
      { label: 'Instagram', href: SOCIALS[0].href, external: true },
      { label: 'Careers', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/policies/privacy' },
      { label: 'Terms & Conditions', href: '/policies/terms' },
      { label: 'Cancellation & Refund', href: '/policies/cancellation-refund' },
      { label: 'Shipping & Delivery', href: '/policies/shipping-delivery' },
      { label: 'Accessibility', href: '/policies/accessibility' },
    ],
  },
]

const socialIcons = { Instagram, Facebook, YouTube: Youtube } as const

export default function Footer() {
  const [sent, setSent] = useState(false)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream/70 relative">
      <div className="container-x pt-16 pb-12">
        <div className="grid gap-12 lg:gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/brand/logo-light.png"
              alt="Mahabelly"
              width={180}
              height={90}
              className="h-16 w-auto object-contain mb-5"
            />
            <p className="font-serif italic text-lg text-cream/70 mb-4">{SITE.masterLine}</p>
            <p className="font-sans text-sm leading-relaxed text-cream/50 mb-6 max-w-sm">{AWARD}.</p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 border border-cream/20 flex items-center justify-center text-cream/60 hover:border-red hover:text-red-light transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Sitemap columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="kicker text-gold-light mb-5">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {'external' in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-cream/55 hover:text-cream transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="font-sans text-sm text-cream/55 hover:text-cream transition-colors">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact + newsletter row */}
        <div className="mt-14 pt-10 border-t border-cream/10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="kicker text-gold-light mb-5">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-red-light shrink-0" />
                <a href={`mailto:${SITE.email}`} className="font-sans text-sm text-cream/60 hover:text-cream">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-red-light shrink-0" />
                <a href={`tel:${SITE.phoneRaw}`} className="font-sans text-sm text-cream/60 hover:text-cream">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={15} className="text-red-light shrink-0" />
                <span className="font-sans text-sm text-cream/60">{SITE.region}, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="kicker text-gold-light mb-5">Stay in the Loop</h3>
            <p className="font-sans text-sm text-cream/50 mb-4 max-w-sm">
              Sadhya announcements, new openings and Kerala stories — occasionally, never spammy.
            </p>
            {sent ? (
              <p className="flex items-center gap-2 font-sans text-sm text-gold-light">
                <Check size={16} /> Thank you — we’ll be in touch.
              </p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                className="flex gap-2 max-w-sm"
              >
                <label htmlFor="nl-email" className="sr-only">Email address</label>
                <input
                  id="nl-email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="flex-1 bg-ink-soft border border-cream/15 text-cream placeholder:text-cream/30 font-sans text-sm px-4 py-2.5 focus:outline-none focus:border-red transition-colors"
                />
                <button type="submit" className="btn-red !px-5 !py-2.5">Join</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-cream/35 text-center sm:text-left">
            © {year} {SITE.name} · {SITE.legalName}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/35">Born in Delhi. Rooted in Kerala. Since {SITE.since}.</p>
        </div>
      </div>
    </footer>
  )
}
