'use client'

import Link from 'next/link'
import { CalendarCheck, ShoppingBag, BookOpen, Phone } from 'lucide-react'
import { LINKS, SITE, waLink } from '@/lib/site'
import { useReserve } from '@/components/reserve/ReserveModal'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

const cell =
  'flex items-center justify-center gap-1.5 h-12 font-sans text-[12.5px] font-semibold tracking-normal whitespace-nowrap'

/**
 * Sticky bottom bar — mobile/tablet only (below xl).
 * Reserve + Order + Menus, plus Call and WhatsApp docked as icon buttons so
 * they never float over page content, text or form fields on small screens.
 * (On xl+ Call/WhatsApp sit in the header instead — see Navbar.)
 */
export default function MobileActionBar() {
  const { open: openReserve } = useReserve()
  return (
    <div
      data-mobile-bar
      className="xl:hidden fixed bottom-0 inset-x-0 z-40 border-t border-ink/10 bg-cream-soft/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
    >
      <div className="grid grid-cols-[repeat(3,minmax(0,1fr))_48px_48px]">
        <button type="button" onClick={openReserve} className={`${cell} text-ink border-r border-ink/10 active:bg-cream`}>
          <CalendarCheck size={15} className="text-red shrink-0" />
          Reserve
        </button>
        <Link href={LINKS.orderOnline} className={`${cell} text-cream-soft bg-red active:bg-red-dark`}>
          <ShoppingBag size={15} className="shrink-0" />
          Order
        </Link>
        <Link href="/menu" className={`${cell} text-ink bg-gold active:bg-gold-light`}>
          <BookOpen size={15} className="shrink-0" />
          Menus
        </Link>
        <a href={`tel:${SITE.phoneRaw}`} aria-label="Call Mahabelly" className={`${cell} text-white bg-[#1B4D3E] active:opacity-90`}>
          <Phone size={18} />
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Mahabelly on WhatsApp"
          className={`${cell} text-white bg-[#25D366] active:opacity-90`}
        >
          <WhatsAppIcon className="w-[22px] h-[22px]" />
        </a>
      </div>
    </div>
  )
}
