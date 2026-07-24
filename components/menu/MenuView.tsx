import Link from 'next/link'
import { Download, Star } from 'lucide-react'
import DietDot from '@/components/ui/DietDot'
import Reveal from '@/components/ui/Reveal'
import { Menu } from '@/lib/menus'
import { OUTLETS, LINKS } from '@/lib/site'

const dietLabel = { veg: 'Vegetarian', nonveg: 'Non-vegetarian', mixed: '' }

export default function MenuView({ menu }: { menu: Menu }) {
  const outlet = OUTLETS.find((o) => o.slug === menu.outletSlug)

  return (
    <div className="container-x py-14 md:py-20">
      {/* Section index (jump nav) */}
      <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
        <aside className="lg:sticky lg:top-24 self-start hidden lg:block">
          <p className="kicker text-red mb-4">On this menu</p>
          <nav className="flex flex-col gap-1.5 border-l border-ink/10">
            {menu.sections.map((s) => (
              <a
                key={s.name}
                href={`#${slug(s.name)}`}
                className="pl-4 -ml-px border-l-2 border-transparent hover:border-red font-sans text-sm text-charcoal-soft hover:text-red transition-colors py-1"
              >
                {s.name}
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-2">
            <a href={LINKS.orderOnline} className="btn-red w-full">Order Online</a>
            {menu.pdf && (
              <a href={menu.pdf} target="_blank" rel="noopener noreferrer" className="btn-outline-ink w-full">
                <Download size={14} /> Download PDF
              </a>
            )}
          </div>
        </aside>

        <div>
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-5 pb-8 mb-8 border-b border-ink/10">
            <span className="flex items-center gap-2 text-xs text-charcoal-soft"><DietDot diet="veg" /> Vegetarian</span>
            <span className="flex items-center gap-2 text-xs text-charcoal-soft"><DietDot diet="nonveg" /> Non-vegetarian</span>
            <span className="flex items-center gap-2 text-xs text-charcoal-soft"><Star size={13} className="text-red fill-red" /> Bestseller</span>
            <span className="text-xs text-charcoal-mute ml-auto">Prices in ₹ · taxes extra</span>
          </div>

          {menu.sections.map((section, si) => (
            <section key={section.name} id={slug(section.name)} className="mb-14 scroll-mt-24">
              <Reveal>
                <div className="flex items-baseline gap-4 mb-1">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{section.name}</h2>
                  <span className="flex-1 h-px bg-ink/10" />
                </div>
                {section.note && <p className="font-serif italic text-charcoal-soft mb-6 mt-1">{section.note}</p>}
                {!section.note && <div className="mb-6" />}

                <div className="space-y-8">
                  {section.groups.map((group, gi) => (
                    <div key={gi}>
                      {group.title && (
                        <h3 className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest text-red mb-4">
                          {group.diet && group.diet !== 'mixed' && <DietDot diet={group.diet} />}
                          {group.title}
                        </h3>
                      )}
                      {group.note && <p className="text-sm text-charcoal-soft mb-3 -mt-1">{group.note}</p>}
                      <ul className="divide-y divide-ink/5">
                        {group.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-4 py-3">
                            <div className="flex-1">
                              <p className="font-sans font-medium text-ink flex items-center gap-2 flex-wrap">
                                {item.name}
                                {item.best && <Star size={13} className="text-red fill-red" aria-label="Bestseller" />}
                              </p>
                              {item.desc && <p className="font-serif italic text-sm text-charcoal-soft mt-0.5">{item.desc}</p>}
                            </div>
                            <span className="font-sans text-sm font-semibold text-charcoal-soft whitespace-nowrap tabular-nums pt-0.5">
                              {item.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>
          ))}

          {/* Footnotes */}
          <div className="mt-12 pt-8 border-t border-ink/10 space-y-1.5">
            {menu.footnotes.map((f, i) => (
              <p key={i} className="font-sans text-xs text-charcoal-mute">{f}</p>
            ))}
            {outlet && (
              <p className="font-sans text-xs text-charcoal-mute pt-3">
                Serving at{' '}
                <Link href={`/locations/${outlet.slug}`} className="text-red hover:underline">{outlet.name}</Link>.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}
