import Image from 'next/image'
import { AWARD } from '@/lib/site'

// Times Food Award promotional banner.
// The artwork is a text-free copy of the original banner (the original had
// award years baked into the image). The wording is rendered as live text
// from AWARD so it stays year-free and exact.
const HIGHLIGHT = 'the Times Food Award'
const [BEFORE, AFTER] = AWARD.split(HIGHLIGHT)

function AwardText({ className = '' }: { className?: string }) {
  return (
    <p className={`font-sans uppercase text-center text-cream leading-tight ${className}`}>
      <span className="block">{BEFORE}</span>
      <span className="block italic font-semibold text-[#f07c1e]">{HIGHLIGHT}</span>
      <span className="block">{AFTER}</span>
    </p>
  )
}

export default function AwardBanner({ className = '' }: { className?: string }) {
  return (
    <figure className={className}>
      <div className="relative w-full [container-type:inline-size]" style={{ aspectRatio: '1400 / 518' }}>
        <Image
          src="/festivals/times-food-award-artwork.jpg"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width:768px) 100vw, 55vw"
        />
        {/* Overlay sits in the empty band under the logo, between the dancers */}
        <div className="hidden sm:flex absolute left-[29%] right-[29%] top-[45%] bottom-[5%] items-center justify-center">
          <AwardText className="text-[length:3.1cqw] tracking-wide" />
        </div>
      </div>
      {/* Small screens: the overlay would be too small to read, so show it below */}
      <figcaption className="sm:hidden mt-3">
        <AwardText className="text-sm tracking-wide" />
      </figcaption>
    </figure>
  )
}
