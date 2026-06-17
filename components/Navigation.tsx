'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Our Story',   href: '#story' },
  { label: 'Menu',        href: '#menu' },
  { label: 'Locations',   href: '#locations' },
  { label: 'Our Brands',  href: '#brands' },
  { label: 'Gallery',     href: '#gallery' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-kerala-cream/95 backdrop-blur-md shadow-sm py-2 border-b border-kerala-cream-dark'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className={`rounded-full px-2 py-4 transition-all duration-300 ${
              scrolled ? 'bg-transparent' : 'bg-white/70'
            }`}>
              <Image
                src="/logo.avif"
                alt="Mahabelly"
                width={110}
                height={55}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link font-sans text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  scrolled
                    ? 'text-kerala-charcoal hover:text-kerala-green'
                    : 'text-kerala-cream/90 hover:text-kerala-cream'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://mahabelly.co/onlineorder/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3 transition-all duration-300 ${
                scrolled
                  ? 'bg-kerala-green text-white hover:bg-kerala-green-mid'
                  : 'bg-kerala-green text-white hover:bg-kerala-green-mid'
              }`}
            >
              Order Online
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? 'text-kerala-charcoal' : 'text-kerala-cream'
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-kerala-green-dark flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-10 gap-8">
              {links.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-4xl text-kerala-cream text-left hover:text-kerala-gold transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <a
                  href="https://mahabelly.co/onlineorder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary inline-flex"
                >
                  Order Online
                </a>
              </motion.div>
            </div>

            <div className="px-10 pb-12 flex gap-6">
              {['Instagram', 'Facebook', 'Swiggy', 'Zomato'].map((s) => (
                <span key={s} className="text-kerala-mist font-sans text-xs tracking-wider">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
