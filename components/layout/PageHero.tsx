import Image from 'next/image'
import Breadcrumbs, { Crumb } from '@/components/ui/Breadcrumbs'
import Reveal from '@/components/ui/Reveal'

interface Props {
  kicker?: string
  title: string
  subtitle?: string
  crumbs: Crumb[]
  image?: string
}

/** Dark inner-page header with breadcrumbs. */
export default function PageHero({ kicker, title, subtitle, crumbs, image }: Props) {
  return (
    <header className="relative bg-ink pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {image && (
        <>
          <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
          {/* Lighter scrim: the photo reads as a photo, while the bottom/left
              (where the heading sits) stays dark enough for cream text. */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-ink/15 to-transparent" />
        </>
      )}
      {/* subtle botanical accent */}
      <Image
        src="/art/curry-leaves.png"
        alt=""
        width={420}
        height={310}
        aria-hidden
        className="absolute -right-16 -bottom-10 w-80 opacity-[0.07] pointer-events-none select-none"
      />
      <div className="container-x relative">
        <Reveal>
          <Breadcrumbs items={crumbs} tone="dark" />
          {kicker && <span className="kicker text-gold-light block mt-6">{kicker}</span>}
          <h1 className={`font-display text-4xl md:text-6xl font-bold text-cream leading-[1.05] mt-3 max-w-4xl ${image ? '[text-shadow:0_2px_18px_rgba(0,0,0,0.45)]' : ''}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`font-serif italic text-xl md:text-2xl mt-5 max-w-2xl ${image ? 'text-cream/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]' : 'text-cream/65'}`}>{subtitle}</p>
          )}
        </Reveal>
      </div>
    </header>
  )
}
