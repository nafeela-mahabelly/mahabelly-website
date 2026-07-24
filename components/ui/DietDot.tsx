/** Veg / non-veg indicator (not colour-alone — includes a label for a11y). */
export default function DietDot({ diet }: { diet?: 'veg' | 'nonveg' | 'mixed' }) {
  if (!diet || diet === 'mixed') return null
  const veg = diet === 'veg'
  return (
    <span
      className={`inline-flex items-center justify-center w-4 h-4 border shrink-0 ${
        veg ? 'border-leaf' : 'border-red'
      }`}
      title={veg ? 'Vegetarian' : 'Non-vegetarian'}
      aria-label={veg ? 'Vegetarian' : 'Non-vegetarian'}
    >
      <span className={`w-2 h-2 rounded-full ${veg ? 'bg-leaf' : 'bg-red'}`} />
    </span>
  )
}
