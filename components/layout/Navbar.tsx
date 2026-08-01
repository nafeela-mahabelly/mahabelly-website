'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, CalendarCheck, ShoppingBag, Sparkles } from 'lucide-react'
import { ALL_NAV, LINKS } from '@/lib/site'
import { useReserve } from '@/components/reserve/ReserveModal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const reduce = useReducedMotion()
  const { open: openReserve } = useReserve()

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

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

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
                solid ? 'h-[72px]' : 'h-[72px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]'
              }`}
            />
          </Link>

          {/* Desktop nav — all sections inline (no dropdown) */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-5" aria-label="Primary">
            {ALL_NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-active={isActive(l.href)}
                className={`nav-link font-sans text-[12.5px] font-medium tracking-normal whitespace-nowrap transition-colors ${linkColor} ${
                  isActive(l.href) ? 'opacity-100' : 'opacity-85 hover:opacity-100'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-2.5">
            <button
              type="button"
              onClick={openReserve}
              className={`btn ${solid ? 'btn-outline-ink' : 'btn-outline'} !px-4 !py-2.5`}
            >
              <CalendarCheck size={14} /> Reserve
            </button>
            <Link href={LINKS.orderOnline} className="btn-red !px-4 !py-2.5">
              <ShoppingBag size={14} /> Order
            </Link>
            <Link href={LINKS.onam} className="btn bg-gold text-ink hover:bg-gold-light !px-4 !py-2.5">
              <Sparkles size={14} /> Onam ’26
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
            <div className="px-8 mt-6 space-y-3">
              <Link href={LINKS.onam} className="btn bg-gold text-ink hover:bg-gold-light w-full">
                <Sparkles size={15} /> Book Onam ’26
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => { setOpen(false); openReserve() }} className="btn-outline w-full">
                  <CalendarCheck size={15} /> Reserve
                </button>
                <Link href={LINKS.orderOnline} className="btn-red w-full">
                  <ShoppingBag size={15} /> Order
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
