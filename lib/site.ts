// ────────────────────────────────────────────────────────────────
//  Central site configuration & business data
//  Single source of truth — edit here to update the whole site.
// ────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Mahabelly',
  legalName: 'Fenn & Jacob Associates LLP',
  tagline: 'Kerala, Served With Soul',
  masterLine: 'Born in Delhi. Rooted in Kerala. Served with soul.',
  since: 2015,
  url: 'https://mahabelly.com',
  email: 'connect@mahabelly.com',
  phone: '+91 90179 06907',
  phoneRaw: '+919017906907',
  whatsapp: '919017906907',
  region: 'Delhi NCR',
} as const

// Primary action links (confirmed by the client)
export const LINKS = {
  // "Order Online" everywhere routes to the internal /order hub
  orderOnline: '/order',
  // Direct online ordering (Mahabelly)
  orderDirect: 'https://mahabelly.co/onlineorder/order',
  reserve: 'https://linktr.ee/mahabelly',
  // Onam '26 booking hub (internal page listing the Razorpay options)
  onam: '/onam-2026',
  // Placeholder form / enquiry destinations — to be replaced by the client
  cateringEnquiry: '#',
  pressKit: '#',
} as const

// Reservation links per outlet — shown in the Reserve popup (replaces the single linktr.ee link)
export interface ReserveOutlet {
  name: string
  area: string
  href: string
}

export const RESERVE_OUTLETS: ReserveOutlet[] = [
  { name: 'Mahabelly Saket', area: 'DLF Avenue Mall, Saket', href: 'https://tinyurl.com/yc2nntu5' },
  { name: 'Mahabelly Canteen', area: 'Saidulajab, New Delhi', href: 'https://tinyurl.com/9879apzm' },
  {
    name: 'Mahabelly Vasant Kunj',
    area: 'The Kunj, Vasant Kunj',
    href: 'https://www.google.com/maps/reserve/v/dine/c/rjzy0wEZO4U?source=pa&opi=89978449&hl=en-AE&gei=CsxtaueVAfOckdUPgNyCOA&sourceurl=https://www.google.com/search?q%3Dmahabelly%2Bvasant%2Bkunj%26oq%3Dmahabelly%2Bvasa%26pf%3Dcs%26sourceid%3Dchrome%26source%3Dchrome.ob%26ie%3DUTF-8',
  },
]

// Delivery-app links per outlet, shown on the /order page
export interface OrderOutlet {
  name: string
  brand: 'Mahabelly' | 'Mahabelly Canteen'
  area: string
  zomato?: string
  swiggy?: string
}

export const ORDER_OUTLETS: OrderOutlet[] = [
  {
    name: 'Mahabelly Delhi',
    brand: 'Mahabelly',
    area: 'Lado Sarai / Chattarpur',
    zomato: 'https://www.zomato.com/mahabelly/order',
    swiggy: 'https://www.swiggy.com/city/delhi/mahabelly-coastal-south-indian-co-lado-sarai-chattarpur-rest64795',
  },
  {
    name: 'Mahabelly Gurgaon',
    brand: 'Mahabelly',
    area: 'DLF Phase IV',
    zomato: 'https://www.zomato.com/ncr/mahabelly-dlf-phase-4',
    swiggy: 'https://www.swiggy.com/city/gurgaon/mahabelly-coastal-south-indian-co-786-complex-dlf-phase-4-rest32344',
  },
  {
    name: 'Mahabelly Canteen Saidulajab',
    brand: 'Mahabelly Canteen',
    area: 'Saidulajab',
    zomato: 'https://www.zomato.com/ncr/mahabelly-canteen-lado-sarai-new-delhi',
    swiggy: 'https://www.swiggy.com/city/delhi/mahabelly-canteen-saidulajab-said-ul-ajaib-rest1037562',
  },
  {
    name: 'Mahabelly Canteen Vasant Kunj',
    brand: 'Mahabelly Canteen',
    area: 'Vasant Kunj',
    zomato: 'https://www.zomato.com/ncr/mahabelly-canteen-vasant-kunj-new-delhi/order',
    swiggy: 'https://www.swiggy.com/city/delhi/mahabelly-canteen-nelson-mandela-marg-vasant-kunj-rest1310114',
  },
]

export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/mahabelly', handle: '@mahabelly' },
  { label: 'Facebook', href: 'https://facebook.com/mahabelly', handle: '/mahabelly' },
  { label: 'YouTube', href: 'https://www.youtube.com/results?search_query=mahabelly', handle: 'Mahabelly' },
] as const

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}

// ── Navigation (brief §3 Information Architecture) ───────────────
export const PRIMARY_NAV = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Brands', href: '/our-brands' },
  { label: 'Events', href: '/events' },
  { label: 'Catering', href: '/catering' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'In the News', href: '/press' },
]

export const MORE_NAV = [
  { label: 'Mahabelly Gold', href: '/mahabelly-gold' },
  { label: 'Contact', href: '/contact' },
]

export const ALL_NAV = [...PRIMARY_NAV, ...MORE_NAV]

// ── Headline statistics (brief) ─────────────────────────────────
export const STATS = [
  { value: '2015', label: 'The year it began' },
  { value: '6', label: 'Locations across Delhi NCR & Sonipat' },
  { value: '160', label: 'One Mahabelly family' },
  { value: 'Lakhs', label: 'Of guests, & countless Kerala cravings' },
]

// ── Locations ───────────────────────────────────────────────────
export type Brand = 'mahabelly' | 'canteen'

export interface Outlet {
  slug: string
  name: string
  brand: Brand
  format: string
  area: string
  city: string
  address: string
  mapsQuery: string
  hours: string
  dineIn: boolean
  takeaway: boolean
  delivery: boolean
  reservation: boolean
  /** slug of the web menu on /menu, if a dedicated menu exists */
  menuSlug?: string
  note?: string
}

export const OUTLETS: Outlet[] = [
  {
    slug: 'saket',
    name: 'Mahabelly Saket',
    brand: 'mahabelly',
    format: 'Flagship dine-in restaurant',
    area: 'Saket',
    city: 'New Delhi',
    address: 'First Floor, Commons, DLF Avenue Mall, AV-242, Saket District Centre, Sector 6, Saket, New Delhi 110017',
    mapsQuery: 'Mahabelly Saket, DLF Avenue Mall, Saket, New Delhi',
    hours: '12:00 PM – 11:00 PM',
    dineIn: true,
    takeaway: true,
    delivery: true,
    reservation: true,
    menuSlug: 'saket',
  },
  {
    slug: 'saidulajab',
    name: 'Mahabelly Canteen, Saidulajab',
    brand: 'canteen',
    format: 'Everyday Kerala canteen',
    area: 'Saidulajab',
    city: 'New Delhi',
    address:
      'Ground Floor, Plot No. 05, Kh. No. 264, Westend Marg, Saidulajab, New Delhi 110030',
    mapsQuery: 'Mahabelly Canteen Saidulajab, New Delhi',
    hours: '10:00 AM – 11:00 PM',
    dineIn: true,
    takeaway: true,
    delivery: true,
    reservation: false,
    menuSlug: 'canteen-saidulajab',
  },
  {
    slug: 'vasant-kunj',
    name: 'Mahabelly Canteen @ The Kunj',
    brand: 'canteen',
    format: 'Everyday Kerala canteen',
    area: 'Vasant Kunj',
    city: 'New Delhi',
    address:
      'The Kunj, Plot No. 8, Nelson Mandela Marg, Vasant Kunj, New Delhi 110070',
    mapsQuery: 'Mahabelly Canteen The Kunj Vasant Kunj, New Delhi',
    hours: '11:00 AM – 11:00 PM',
    dineIn: true,
    takeaway: true,
    delivery: true,
    reservation: false,
    menuSlug: 'canteen-vasant-kunj',
  },
  {
    slug: 'lado-serai',
    name: 'Mahabelly, Lado Serai',
    brand: 'mahabelly',
    format: 'Kerala restaurant',
    area: 'Lado Serai',
    city: 'New Delhi',
    address: 'Lado Serai, New Delhi',
    mapsQuery: 'Mahabelly Lado Serai, New Delhi',
    hours: '12:00 PM – 11:00 PM',
    dineIn: true,
    takeaway: true,
    delivery: true,
    reservation: true,
  },
  {
    slug: 'gurgaon',
    name: 'Mahabelly, DLF Phase IV',
    brand: 'mahabelly',
    format: 'Delivery kitchen',
    area: 'DLF Phase IV, Gurgaon',
    city: 'Gurugram',
    address: 'DLF Phase IV, Gurugram, Haryana',
    mapsQuery: 'Mahabelly DLF Phase 4 Gurgaon',
    hours: '11:00 AM – 11:00 PM',
    dineIn: false,
    takeaway: false,
    delivery: true,
    reservation: false,
    note: 'Delivery only',
  },
  {
    slug: 'sonipat',
    name: 'Mahabelly @ O.P. Jindal University',
    brand: 'mahabelly',
    format: 'Campus outlet',
    area: 'O.P. Jindal Global University',
    city: 'Sonipat',
    address: 'O.P. Jindal Global University, Sonipat, Haryana 131001',
    mapsQuery: 'O.P. Jindal Global University Sonipat',
    hours: '9:00 AM – 9:00 PM',
    dineIn: true,
    takeaway: true,
    delivery: false,
    reservation: false,
    note: 'On campus',
  },
]

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function mapsEmbed(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
}

export const AWARD =
  'Winner of the Times Food Award for Best South Indian & Best Coastal Cuisine Restaurant in Delhi'
