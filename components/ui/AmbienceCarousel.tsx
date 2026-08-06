'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'

interface Props {
  images: string[]
  name: string
}

/** Compact ambience photo carousel shown at the top of an outlet card. */
export default function AmbienceCarousel({ images, name }: Props) {
  const [i, setI] = useState(0)
  const [open, setOpen] = useState(false)
  const touchX = useRef<number | null>(null)
  const n = images.length

  const go = useCallback((d: number) => setI((c) => (c + d + n) % n), [n])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open, go])

  function onTouchStart(e: React.TouchEvent) { touchX.current = e.touches[0].clientX }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <>
      <div
        className="relative mb-5 rounded-xl overflow-hidden border border-ink/10 bg-ink/5 aspect-[4/3] group/amb"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[i]}
          alt={`${name} — ambience ${i + 1} of ${n}`}
          className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
          loading="lazy"
          onClick={() => setOpen(true)}
          draggable={false}
        />

        {/* Expand hint */}
        <button
          onClick={() => setOpen(true)}
          aria-label="View ambience photos full screen"
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-ink/55 hover:bg-ink/75 text-cream flex items-center justify-center transition-colors opacity-0 group-hover/amb:opacity-100 focus:opacity-100"
        >
          <Expand size={15} />
        </button>

        {n > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ink/55 hover:bg-ink/75 text-cream flex items-center justify-center transition-all opacity-0 group-hover/amb:opacity-100 focus:opacity-100"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ink/55 hover:bg-ink/75 text-cream flex items-center justify-center transition-all opacity-0 group-hover/amb:opacity-100 focus:opacity-100"
            >
              <ChevronRight size={17} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-1.5">
              {images.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setI(d)}
                  aria-label={`Photo ${d + 1}`}
                  aria-current={d === i}
                  className={`h-1.5 rounded-full transition-all ${d === i ? 'w-4 bg-cream' : 'w-1.5 bg-cream/50 hover:bg-cream/80'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[80] bg-ink/95 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} ambience photos`}
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors"
          >
            <X size={22} />
          </button>
          {n > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); go(-1) }}
                aria-label="Previous photo"
                className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); go(1) }}
                aria-label="Next photo"
                className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          <figure className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[i]}
              alt={`${name} — ambience ${i + 1} of ${n}`}
              className="mx-auto w-auto max-h-[82vh] object-contain rounded-lg"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              draggable={false}
            />
            <figcaption className="text-cream/70 text-sm mt-4 text-center">
              {name} <span className="text-cream/40">· {i + 1} / {n}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
