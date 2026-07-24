'use client'

import Link from 'next/link'
import { CalendarCheck, ShoppingBag } from 'lucide-react'
import { LINKS } from '@/lib/site'

/** Sticky bottom Reserve + Order actions — mobile only (brief §3). */
export default function MobileActionBar() {
  return (
    <div className="xl:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-cream-soft/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href={LINKS.reserve}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3.5 font-sans text-[13px] font-semibold tracking-normal text-ink border-r border-ink/10 active:bg-cream"
      >
        <CalendarCheck size={16} className="text-red" />
        Reserve
      </a>
      <Link
        href={LINKS.orderOnline}
        className="flex items-center justify-center gap-2 py-3.5 font-sans text-[13px] font-semibold tracking-normal text-cream-soft bg-red active:bg-red-dark"
      >
        <ShoppingBag size={16} />
        Order Online
      </Link>
    </div>
  )
}
