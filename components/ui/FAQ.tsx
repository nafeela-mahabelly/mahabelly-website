import { Plus } from 'lucide-react'
import JsonLd from './JsonLd'

export interface QA {
  q: string
  a: string
}

/** Accessible FAQ using native <details> + FAQPage structured data. */
export default function FAQ({ items }: { items: QA[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }

  return (
    <div className="max-w-3xl mx-auto divide-y divide-ink/10 border-y border-ink/10">
      <JsonLd data={jsonLd} />
      {items.map((it, i) => (
        <details key={i} className="group py-1">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-4 font-sans font-medium text-ink">
            {it.q}
            <Plus size={18} className="text-red shrink-0 transition-transform group-open:rotate-45" />
          </summary>
          <p className="text-charcoal-soft leading-relaxed pb-4 pr-8">{it.a}</p>
        </details>
      ))}
    </div>
  )
}
