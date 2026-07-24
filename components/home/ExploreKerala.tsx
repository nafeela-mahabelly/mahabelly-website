import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'

export default function ExploreKerala() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden py-20 md:py-28">
      <Image
        src="/art/fish-curry-pan.png"
        alt=""
        width={520}
        height={300}
        aria-hidden
        className="absolute right-0 top-10 w-72 md:w-96 opacity-20 pointer-events-none select-none"
      />
      <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-7">
          <span className="kicker text-gold-light">Many Keralas. One Table.</span>
          <div className="rule rule-left rule-gold" />
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            There is no single Kerala cuisine.
          </h2>
          <div className="space-y-4 mt-6 text-cream/70 leading-relaxed max-w-2xl">
            <p>
              Kerala food can be appam and stew on a quiet morning, puttu and kadala for breakfast, fish curry with red rice for lunch, beef roast and porotta at a toddy shop, Malabar biryani at a celebration — or a colourful Sadhya served on a banana leaf.
            </p>
            <p>
              There are communities, coastlines, faiths, seasons and family traditions. Mahabelly brings these worlds together at one table.
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: '/art/kerala-spread.png', label: 'Coastal' },
              { src: '/art/chicken-roast.png', label: 'Toddy-shop' },
              { src: '/art/curry-leaves.png', label: 'Everyday' },
              { src: '/art/onam-mahabali.jpg', label: 'Festive' },
            ].map((it, i) => (
              <div
                key={it.label}
                className={`relative aspect-square bg-cream-soft/95 overflow-hidden ${i % 2 ? 'translate-y-6' : ''}`}
              >
                <Image src={it.src} alt={`${it.label} Kerala food`} fill className="object-contain p-3" sizes="220px" />
                <span className="absolute bottom-2 left-3 font-sans text-[10px] tracking-widest uppercase text-ink/70">
                  {it.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
