import Reveal from './Reveal'

interface Props {
  kicker?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  className?: string
}

/** Standard section header: kicker → rule → title → subtitle. */
export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  className = '',
}: Props) {
  const isCenter = align === 'center'
  const titleColor = tone === 'dark' ? 'text-ink' : 'text-cream'
  const subColor = tone === 'dark' ? 'text-charcoal-soft' : 'text-cream/60'

  return (
    <Reveal className={`${isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'} ${className}`}>
      {kicker && <span className="kicker text-red">{kicker}</span>}
      <div className={`rule ${isCenter ? '' : 'rule-left'}`} />
      <h2 className={`font-display text-4xl md:text-5xl font-bold leading-[1.1] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-serif italic text-xl mt-4 ${subColor}`}>{subtitle}</p>
      )}
    </Reveal>
  )
}
