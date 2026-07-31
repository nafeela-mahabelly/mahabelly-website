'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { SOCIALS } from '@/lib/site'

interface Shot { src: string; w: number; h: number; alt: string }

const SHOTS: Shot[] = [
  { src: '/gallery/g1.jpg', w: 1500, h: 1685, alt: 'Malabar biryani with pappadam, raita and beetroot pachadi' },
  { src: '/gallery/g12.jpg', w: 1500, h: 1500, alt: 'Onam Sadhya served on a banana leaf' },
  { src: '/gallery/g4.jpg', w: 1500, h: 1000, alt: 'An Onam cultural evening with Kathakali artists' },
  { src: '/gallery/g2.jpg', w: 1500, h: 1108, alt: 'Kerala red matta rice' },
  { src: '/gallery/g9.jpg', w: 1261, h: 1891, alt: '#MealsReady — Mahabelly Sadhya takeaway on a banana leaf' },
  { src: '/gallery/g8.jpg', w: 1500, h: 1000, alt: 'Prawn curry in a traditional brass pot' },
  { src: '/gallery/g11.jpg', w: 1500, h: 1500, alt: 'Kappa — mashed tapioca, tempered with spices' },
  { src: '/gallery/g10.jpg', w: 1500, h: 1000, alt: 'Inside Mahabelly Saket' },
  { src: '/gallery/g5.jpg', w: 1500, h: 1200, alt: 'Karimeen pollichathu, steamed in a banana-leaf parcel' },
  { src: '/gallery/g3.jpg', w: 1410, h: 1800, alt: 'Kerala-style moru curry' },
  { src: '/gallery/g14.jpg', w: 1500, h: 1015, alt: 'Appam & stew — a Kerala breakfast' },
  { src: '/gallery/g13.jpg', w: 1500, h: 1500, alt: 'A traditional Kerala meal on a banana leaf' },
  { src: '/gallery/g6.jpg', w: 1280, h: 960, alt: 'A Kerala spread at Mahabelly' },
  { src: '/gallery/g7.jpg', w: 509, h: 504, alt: 'Mahabelly celebrated by guests and dignitaries' },
]

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const go = useCallback((dir: number) => {
    setOpen((cur) => (cur === null ? cur : (cur + dir + SHOTS.length) % SHOTS.length))
  }, [])

  useEffect(() => {
    if (open === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open, close, go])

  const active = open === null ? null : SHOTS[open]

  return (
    <section id="gallery" className="bg-cream-soft py-20 md:py-28 scroll-mt-24">
      <div className="container-x">
        <SectionHeading kicker="Gallery" title="A taste in pictures" subtitle="From our kitchens, tables and festivals — tap any photo to view." />

        {/* Masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 mt-14 [column-fill:_balance]">
          {SHOTS.map((s, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              aria-label={`View: ${s.alt}`}
              className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red"
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="w-full h-auto object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
            </button>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <a href={SOCIALS[0].href} target="_blank" rel="noopener noreferrer" className="btn-outline-ink group">
            <Instagram size={16} /> Follow @mahabelly
          </a>
        </Reveal>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button onClick={close} aria-label="Close" className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors">
            <X size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1) }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1) }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <figure className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ maxHeight: '82vh' }}>
              <Image
                src={active.src}
                alt={active.alt}
                width={active.w}
                height={active.h}
                className="mx-auto w-auto max-h-[82vh] object-contain rounded-lg"
                priority
              />
            </div>
            <figcaption className="text-cream/70 text-sm mt-4 text-center">
              {active.alt} <span className="text-cream/40">· {(open ?? 0) + 1} / {SHOTS.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
