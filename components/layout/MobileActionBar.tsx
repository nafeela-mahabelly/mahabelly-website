'use client'

import Link from 'next/link'
import { CalendarCheck, ShoppingBag, Sparkles } from 'lucide-react'
import { LINKS } from '@/lib/site'
import { useReserve } from '@/components/reserve/ReserveModal'

/** Sticky bottom Reserve + Order + Onam actions — mobile only. */
export default function MobileActionBar() {
  const { open: openReserve } = useReserve()
  return (
    <div className="xl:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 border-t border-ink/10 bg-cream-soft/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <button
        type="button"
        onClick={openReserve}
        className="flex items-center justify-center gap-1.5 py-3.5 font-sans text-[12.5px] font-semibold tracking-normal text-ink border-r border-ink/10 active:bg-cream"
      >
        <CalendarCheck size={15} className="text-red" />
        Reserve
      </button>
      <Link
        href={LINKS.orderOnline}
        className="flex items-center justify-center gap-1.5 py-3.5 font-sans text-[12.5px] font-semibold tracking-normal text-cream-soft bg-red active:bg-red-dark"
      >
        <ShoppingBag size={15} />
        Order
      </Link>
      <Link
        href={LINKS.onam}
        className="flex items-center justify-center gap-1.5 py-3.5 font-sans text-[12.5px] font-semibold tracking-normal text-ink bg-gold active:bg-gold-light"
      >
        <Sparkles size={15} />
        Onam ’26
      </Link>
    </div>
  )
}
