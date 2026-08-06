'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react'
import type { MenuBookPage } from '@/lib/menuBooks'

interface Props {
  pages: MenuBookPage[]
  label?: string
}

export default function MenuFlipbook({ pages, label = 'menu' }: Props) {
  const [i, setI] = useState(0)
  const [full, setFull] = useState(false)
  const [zoomed, setZoomed] = useState(false)
  const touchX = useRef<number | null>(null)

  const total = pages.length
  const go = useCallback(
    (d: number) => setI((c) => (c + d + total) % total),
    [total],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'Escape') { setZoomed(false); setFull(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  useEffect(() => {
    if (!full) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [full])

  useEffect(() => { setZoomed(false) }, [i, full])

  function onTouchStart(e: React.TouchEvent) { touchX.current = e.touches[0].clientX }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  const page = pages[i]
  const nextPage = pages[(i + 1) % total]

  return (
    <div className="mt-12">
      {/* Stage */}
      <div className="relative select-none">
        <div
          className="relative flex items-center justify-center h-[58vh] sm:h-[70vh] rounded-2xl border border-ink/10 bg-cream-soft overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={page.src}
            alt={`${label} — page ${i + 1} of ${total}`}
            className="max-h-full max-w-full object-contain cursor-zoom-in shadow-sm"
            onClick={() => setFull(true)}
            draggable={false}
          />
          {/* preload the next page */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={nextPage.src} alt="" aria-hidden className="hidden" />

          {/* Fullscreen button */}
          <button
            onClick={() => setFull(true)}
            aria-label="View full screen"
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-ink/60 hover:bg-ink/80 text-cream flex items-center justify-center transition-colors"
          >
            <Maximize2 size={17} />
          </button>
        </div>

        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous page"
              className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ink text-cream shadow-lg hover:bg-ink-soft flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next page"
              className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ink text-cream shadow-lg hover:bg-ink-soft flex items-center justify-center transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Counter + hint */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <span className="font-sans text-sm font-semibold text-ink">{i + 1} / {total}</span>
        <span className="text-xs text-charcoal-mute hidden sm:inline">· Swipe, use arrows, or tap a page to zoom</span>
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div className="mt-5 flex gap-2 overflow-x-auto pb-2 justify-start sm:justify-center">
          {pages.map((p, n) => (
            <button
              key={p.src}
              onClick={() => setI(n)}
              aria-label={`Go to page ${n + 1}`}
              aria-current={n === i}
              className={`shrink-0 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                n === i ? 'border-red' : 'border-ink/10 hover:border-ink/30'
              }`}
              style={{ width: `${(p.w / p.h) * 4}rem` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt="" className="w-full h-full object-cover" loading="lazy" draggable={false} />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen viewer */}
      {full && (
        <div
          className="fixed inset-0 z-[80] bg-ink/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} full screen`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 text-cream shrink-0">
            <span className="font-sans text-sm">{i + 1} / {total}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomed((z) => !z)}
                aria-label={zoomed ? 'Fit to screen' : 'Zoom in'}
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
              >
                {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
              </button>
              <button
                onClick={() => { setFull(false); setZoomed(false) }}
                aria-label="Close"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div
            className={`flex-1 min-h-0 ${zoomed ? 'overflow-auto' : 'overflow-hidden flex items-center justify-center'} px-2 sm:px-6 pb-4`}
            onTouchStart={onTouchStart}
            onTouchEnd={zoomed ? undefined : onTouchEnd}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.src}
              alt={`${label} — page ${i + 1} of ${total}`}
              onClick={() => setZoomed((z) => !z)}
              className={zoomed ? 'max-w-none w-auto h-auto cursor-zoom-out mx-auto' : 'max-h-full max-w-full object-contain cursor-zoom-in mx-auto'}
              draggable={false}
            />
          </div>

          {total > 1 && !zoomed && (
            <>
              <button
                onClick={() => go(-1)}
                aria-label="Previous page"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next page"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
