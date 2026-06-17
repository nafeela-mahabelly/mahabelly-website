'use client'

import Image from 'next/image'
import { MapPin, Phone, Clock } from 'lucide-react'
import FadeInView from './ui/FadeInView'

type Location = {
  name: string
  area: string
  address: string
  phone: string
  hours: string
  mapsUrl: string
  type: 'restaurant' | 'cloud-kitchen' | 'university'
}

const locations: { city: string; locations: Location[] }[] = [
  {
    city: 'Delhi',
    locations: [
      {
        name: 'Mahabelly Canteen',
        area: 'Green Park',
        address: '14, Green Park Market, Aurobindo Marg, New Delhi — 110016',
        phone: '+91 11 4600 0000',
        hours: '12:00 PM – 10:30 PM',
        mapsUrl: 'https://maps.google.com/?q=Mahabelly+Canteen+Green+Park+Delhi',
        type: 'restaurant',
      },
      {
        name: 'Mahabelly GK',
        area: 'Greater Kailash',
        address: 'N-Block Market, Greater Kailash I, New Delhi — 110048',
        phone: '+91 11 4601 0000',
        hours: '12:00 PM – 11:00 PM',
        mapsUrl: 'https://maps.google.com/?q=Mahabelly+GK+Delhi',
        type: 'restaurant',
      },
      {
        name: 'Mahabelly Saket',
        area: 'Saket',
        address: 'Select City Walk Mall, Saket District Centre, New Delhi — 110017',
        phone: '+91 11 4602 0000',
        hours: '11:00 AM – 11:00 PM',
        mapsUrl: 'https://maps.google.com/?q=Mahabelly+Saket+Delhi',
        type: 'restaurant',
      },
    ],
  },
  {
    city: 'Gurgaon',
    locations: [
      {
        name: 'Mahabelly Delivery Kitchen',
        area: 'Gurgaon',
        address: 'Sector 44, Gurugram, Haryana — 122003',
        phone: '+91 12 4400 0000',
        hours: '11:00 AM – 11:00 PM',
        mapsUrl: 'https://maps.google.com/?q=Mahabelly+Gurgaon',
        type: 'cloud-kitchen',
      },
    ],
  },
  {
    city: 'Sonepat',
    locations: [
      {
        name: 'Mahabelly @ OP Jindal',
        area: 'OP Jindal Global University',
        address: 'Sonipat Narela Road, Near Jagdishpur Village, Sonepat — 131001',
        phone: '+91 13 0000 0000',
        hours: '8:00 AM – 10:00 PM',
        mapsUrl: 'https://maps.google.com/?q=OP+Jindal+Global+University+Sonepat',
        type: 'university',
      },
    ],
  },
]

const typeLabel: Record<Location['type'], string> = {
  restaurant:      'Dine-in',
  'cloud-kitchen': 'Delivery',
  university:      'Campus',
}

export default function Locations() {
  return (
    <section id="locations" className="bg-kerala-green-dark py-28 lg:py-40 overflow-hidden">
      {/* Header with Kathakali flanking illustrations — flex row */}
      <FadeInView className="mb-20">
        <div className="flex items-center justify-center">
          {/* Left — Kathakali */}
          <div className="hidden lg:block flex-shrink-0 w-[110px] xl:w-[140px] pointer-events-none select-none">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 w-14 z-10 bg-gradient-to-l from-kerala-green-dark to-transparent" />
              <Image
                src="/kerala-kathakali.png"
                alt=""
                width={290}
                height={454}
                aria-hidden={true}
                className="w-full h-auto opacity-45"
              />
            </div>
          </div>

          {/* Centre header text */}
          <div className="flex-1 text-center px-6 max-w-2xl">
            <span className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-medium">
              Find Us
            </span>
            <div className="gold-divider" />
            <h2 className="font-display text-5xl lg:text-6xl text-kerala-cream font-bold leading-tight">
              Our Locations
            </h2>
            <p className="font-serif italic text-xl text-kerala-cream/60 mt-4">
              Kerala, wherever you are in the NCR.
            </p>
          </div>

          {/* Right — Kathakali mirrored */}
          <div className="hidden lg:block flex-shrink-0 w-[110px] xl:w-[140px] pointer-events-none select-none">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-14 z-10 bg-gradient-to-r from-kerala-green-dark to-transparent" />
              <Image
                src="/kerala-kathakali.png"
                alt=""
                width={290}
                height={454}
                aria-hidden={true}
                className="w-full h-auto opacity-45"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </div>
        </div>
      </FadeInView>

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {locations.map((group, gi) => (
          <FadeInView key={gi} delay={gi * 0.1}>
            {/* City label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-kerala-gold" />
              <h3 className="font-sans text-xs tracking-ultra uppercase text-kerala-gold font-semibold">
                {group.city}
              </h3>
              <div className="flex-1 h-px bg-kerala-green-mid/40" />
            </div>

            {/* Location cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.locations.map((loc, li) => (
                <div
                  key={li}
                  className="group bg-kerala-green/20 border border-kerala-green-mid/30 p-7 hover:border-kerala-gold/40 hover:bg-kerala-green/40 transition-all duration-500"
                >
                  {/* Type badge */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-sans text-[10px] tracking-widest uppercase border border-kerala-gold/50 text-kerala-gold px-2.5 py-1 font-medium">
                      {typeLabel[loc.type]}
                    </span>
                  </div>

                  {/* Name */}
                  <h4 className="font-display text-xl text-kerala-cream font-bold mb-1">
                    {loc.name}
                  </h4>
                  <p className="font-serif italic text-kerala-gold-light text-sm mb-5">
                    {loc.area}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3 mb-7">
                    <li className="flex items-start gap-3">
                      <MapPin size={14} className="text-kerala-gold mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-xs text-kerala-cream/70 leading-relaxed">
                        {loc.address}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={14} className="text-kerala-gold flex-shrink-0" />
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, '')}`}
                        className="font-sans text-xs text-kerala-cream/70 hover:text-kerala-gold transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock size={14} className="text-kerala-gold flex-shrink-0" />
                      <span className="font-sans text-xs text-kerala-cream/70">
                        {loc.hours}
                      </span>
                    </li>
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center font-sans text-[10px] font-semibold tracking-widest uppercase border border-kerala-cream/30 text-kerala-cream/70 py-2.5 hover:border-kerala-gold hover:text-kerala-gold transition-all duration-300"
                    >
                      View Map
                    </a>
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, '')}`}
                      className="flex-1 text-center font-sans text-[10px] font-semibold tracking-widest uppercase bg-kerala-gold/10 border border-kerala-gold/40 text-kerala-gold py-2.5 hover:bg-kerala-gold hover:text-kerala-green-dark transition-all duration-300"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  )
}
