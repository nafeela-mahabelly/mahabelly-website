'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { X, CalendarCheck, MapPin, ArrowRight, Sparkles, Phone } from 'lucide-react'
import { RESERVE_OUTLETS, LINKS, SITE } from '@/lib/site'

// ── Onam pause ──────────────────────────────────────────────────
// Table reservations are paused for the Onam rush. Flip this back to
// `false` (and redeploy) to restore the outlet reservation options.
const RESERVATIONS_PAUSED = true

interface ReserveCtx {
  open: () => void
}

const ReserveContext = createContext<ReserveCtx>({ open: () => {} })

export const useReserve = () => useContext(ReserveContext)

export function ReserveProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false)
  const open = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close])

  return (
    <ReserveContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Reserve a table"
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={close} />

          <div className="relative w-full max-w-md bg-cream-soft rounded-3xl shadow-2xl border border-ink/10 p-6 sm:p-8 motion-safe:animate-fade-up">
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ink/5 hover:bg-ink/10 text-charcoal flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>

            {RESERVATIONS_PAUSED ? (
              <>
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-gold" />
                  <span className="kicker text-red">Reservations Paused</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-ink mt-2">We’re busy celebrating Onam 🌼</h2>
                <p className="text-sm text-charcoal-soft mt-2 leading-relaxed">
                  We’re fully booked with our Onam Sadhya until <strong className="text-ink">27 August</strong>. Regular
                  table reservations will resume from <strong className="text-ink">28 August</strong>. Thank you for your patience!
                </p>
                <div className="mt-6 space-y-3">
                  <Link href={LINKS.onam} onClick={close} className="btn bg-gold text-ink hover:bg-gold-light w-full">
                    <Sparkles size={15} /> Book the Onam Sadhya
                  </Link>
                  <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-ink w-full">
                    <Phone size={15} /> Call us for anything urgent
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <CalendarCheck size={18} className="text-red" />
                  <span className="kicker text-red">Reserve a Table</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-ink mt-2">Choose your outlet</h2>
                <p className="text-sm text-charcoal-soft mt-1.5">Pick a location to continue to its reservation page.</p>

                <ul className="mt-6 space-y-3">
                  {RESERVE_OUTLETS.map((o) => (
                    <li key={o.name}>
                      <a
                        href={o.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={close}
                        className="lift group flex items-center gap-3 bg-cream border border-ink/10 rounded-2xl p-4 hover:border-red/40"
                      >
                        <MapPin size={18} className="text-red shrink-0" />
                        <span className="min-w-0 flex-1">
                          <span className="block font-sans text-sm font-semibold text-ink">{o.name}</span>
                          <span className="block text-xs text-charcoal-mute">{o.area}</span>
                        </span>
                        <ArrowRight size={16} className="text-charcoal-mute group-hover:text-red group-hover:translate-x-0.5 transition-all shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </ReserveContext.Provider>
  )
}
