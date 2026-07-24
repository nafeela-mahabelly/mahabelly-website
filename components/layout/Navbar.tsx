'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, ChevronDown, CalendarCheck, ShoppingBag } from 'lucide-react'
import { PRIMARY_NAV, MORE_NAV, ALL_NAV, LINKS } from '@/lib/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const pathname = usePathname()
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close menus on route change
  useEffect(() => { setOpen(false); setMoreOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const solid = scrolled || open
  const linkColor = solid ? 'text-charcoal' : 'text-cream/90'

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-cream-soft/95 backdrop-blur-md shadow-sm border-b border-ink/5 py-1'
            : 'bg-gradient-to-b from-ink/50 to-transparent py-3'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          {/* Logo — sits on a soft backdrop over the hero so it stays legible on any image */}
          <Link href="/" aria-label="Mahabelly home" className="shrink-0">
            <Image
              src={solid ? '/brand/logo-dark.png' : '/brand/logo-light.png'}
              alt="Mahabelly"
              width={190}
              height={90}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                solid ? 'h-16' : 'h-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]'
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Primary">
            {PRIMARY_NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-active={isActive(l.href)}
                className={`nav-link font-sans text-[13.5px] font-medium tracking-normal transition-colors ${linkColor} ${
                  isActive(l.href) ? 'opacity-100' : 'opacity-85 hover:opacity-100'
                }`}
              >
                {l.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className={`nav-link flex items-center gap-1 font-sans text-[13.5px] font-medium tracking-normal transition-colors ${linkColor}`}
              >
                More <ChevronDown size={13} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full pt-3"
                  >
                    <ul className="min-w-[190px] bg-cream-soft border border-ink/10 rounded-2xl shadow-xl py-2 overflow-hidden">
                      {MORE_NAV.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className={`block px-5 py-2.5 font-sans text-[13.5px] tracking-normal text-charcoal hover:bg-cream hover:text-red transition-colors ${
                              isActive(l.href) ? 'text-red' : ''
                            }`}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href={LINKS.reserve}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${solid ? 'btn-outline-ink' : 'btn-outline'} !px-5 !py-2.5`}
            >
              <CalendarCheck size={14} /> Reserve
            </a>
            <Link
              href={LINKS.orderOnline}
              className="btn-red !px-5 !py-2.5"
            >
              <ShoppingBag size={14} /> Order
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`xl:hidden p-2 ${solid ? 'text-charcoal' : 'text-cream'}`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden fixed inset-0 z-40 bg-ink flex flex-col pt-24 pb-10 overflow-y-auto"
          >
            <nav className="flex-1 flex flex-col px-8 gap-1" aria-label="Mobile">
              {ALL_NAV.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.035 }}
                >
                  <Link
                    href={l.href}
                    className={`block py-2.5 font-display text-3xl transition-colors ${
                      isActive(l.href) ? 'text-red-light' : 'text-cream hover:text-gold-light'
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-8 mt-6 grid grid-cols-2 gap-3">
              <a href={LINKS.reserve} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                <CalendarCheck size={15} /> Reserve
              </a>
              <Link href={LINKS.orderOnline} className="btn-red w-full">
                <ShoppingBag size={15} /> Order
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
