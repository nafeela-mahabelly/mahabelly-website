import Image from 'next/image'
import { Instagram } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { SOCIALS } from '@/lib/site'

const shots = [
  { src: '/photos/sadhya-spread.jpg', alt: 'Onam Sadhya on a banana leaf', span: 'row-span-2' },
  { src: '/photos/storefront-onam.jpg', alt: 'Mahabelly storefront during Onam' },
  { src: '/photos/catering-lights.jpg', alt: 'Catering spread under festive lights' },
  { src: '/photos/sadhya-serving.jpg', alt: 'Serving a Kerala meal', span: 'row-span-2' },
  { src: '/photos/team-garland.jpg', alt: 'The Mahabelly team' },
  { src: '/festivals/vishu-special.jpg', alt: 'Vishu special at Mahabelly' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream-soft py-20 md:py-28 scroll-mt-24">
      <div className="container-x">
        <SectionHeading kicker="Gallery" title="A taste in pictures" subtitle="From our kitchens, tables and festivals." />

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 mt-14">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={(i % 4) * 0.06} className={s.span ?? ''}>
              <div className={`relative w-full h-full overflow-hidden group ${s.span ? 'lg:h-full' : ''}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <a href={SOCIALS[0].href} target="_blank" rel="noopener noreferrer" className="btn-outline-ink group">
            <Instagram size={16} /> Follow @mahabelly
          </a>
        </Reveal>
      </div>
    </section>
  )
}
