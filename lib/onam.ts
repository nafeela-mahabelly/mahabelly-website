// ────────────────────────────────────────────────────────────────
//  Onam Sadhya 2026 — event details & Razorpay booking links
//  Source: client event-details doc (Aug 2026).
// ────────────────────────────────────────────────────────────────

export const ONAM = {
  year: '2026',
  title: 'Mahabelly Onam Sadhya 2026',
  dates: '24 Aug (Dinner) · 25–27 Aug (Lunch & Dinner)',
  intro:
    'Celebrate Onam 2026 with Mahabelly’s much-loved Onam Sadhya — a traditional Kerala vegetarian feast served on a banana leaf. Available dine-in, takeaway and home delivery.',
  bookingHub: 'https://lnk.bio/mahabelly',
  banner: '/festivals/onam-banner.jpg',
  leafGuide: '/festivals/onam-sadhya-leaf.jpg',
}

export interface OnamBooking {
  label: string
  format: 'Dine-In' | 'Takeaway' | 'Home Delivery'
  where: string
  price: string
  href: string
}

export const ONAM_BOOKINGS: OnamBooking[] = [
  { label: 'Mahabelly Saket', format: 'Dine-In', where: 'DLF Avenue Mall, Saket', price: '₹1,699 / adult · all-inclusive', href: 'https://rzp.io/rzp/cVY03Vv' },
  { label: 'Mahabelly Canteen, Saidulajab', format: 'Dine-In', where: 'Westend Marg, Saidulajab', price: '₹1,199 / adult · all-inclusive', href: 'https://rzp.io/rzp/N2B0igcp' },
  { label: 'Mahabelly Canteen, The Kunj', format: 'Dine-In', where: 'The Kunj Mall, Vasant Kunj', price: '₹1,199 / adult · all-inclusive', href: 'https://rzp.io/rzp/tXZhJFPU' },
  { label: 'Takeaway', format: 'Takeaway', where: 'Mahabelly Kitchen, Lado Sarai', price: '₹1,499 / Sadhya · includes packaging', href: 'https://rzp.io/rzp/vOE1oemY' },
  { label: 'Home Delivery', format: 'Home Delivery', where: 'Within 15 km of Lado Sarai', price: '₹1,799 / Sadhya · incl. delivery & packing', href: 'https://rzp.io/rzp/YcDqfzA' },
]

export const ONAM_DINEIN = [
  {
    name: 'Mahabelly Saket',
    address: 'First Floor, Commons, DLF Avenue Mall, AV-242, Saket, Delhi 110017',
    price: '₹1,699 per adult (all-inclusive)',
    mapsQuery: 'Mahabelly Saket DLF Avenue Mall',
  },
  {
    name: 'Mahabelly Canteen, Saidulajab',
    address: 'Ground Floor, Opposite ITDC, Westend Marg, Saidulajab, Delhi 110030',
    price: '₹1,199 per adult (all-inclusive)',
    note: 'Nearby parking available; our staff will assist you on arrival.',
    mapsQuery: 'Mahabelly Canteen Saidulajab',
  },
  {
    name: 'Mahabelly Canteen, The Kunj',
    address: 'The Kunj, 8, Nelson Mandela Marg, Pocket 4, Sector C, Vasant Kunj, Delhi 110070',
    price: '₹1,199 per adult (all-inclusive)',
    note: 'Limited seats, subject to availability.',
    mapsQuery: 'The Kunj Mall Vasant Kunj',
  },
]

export const ONAM_TAKEAWAY = {
  location: 'Mahabelly Kitchen (near Central Bank of India ATM)',
  address: 'F-344, Ground Floor, Old MB Road, Lado Sarai, Delhi 110030',
  price: '₹1,499 per Sadhya (serves one adult)',
  timings: ['Lunch: 12:00 PM – 1:30 PM', 'Dinner: 6:00 PM – 7:30 PM'],
  notes: [
    'Packed in bulk — no customisation possible. Includes Kerala Red Matta Rice.',
    'Please avoid third-party riders (Swiggy / Porter / Dunzo) — their bags don’t fit the Sadhya well.',
    'Bring your Razorpay receipt (email / WhatsApp) for pickup.',
  ],
}

export const ONAM_DELIVERY = {
  radius: 'Within 15 km of Lado Sarai, Delhi',
  price: '₹1,799 per Sadhya (includes delivery & packing)',
  extra: '₹50 per additional km beyond 15 km, per Sadhya (subject to availability).',
  timings: ['Lunch: 12:30 PM – 2:00 PM', 'Dinner: 7:00 PM – 9:00 PM'],
  notes: [
    'Red Matta Rice only; no customisation.',
    'Minor delays possible due to traffic or rain.',
    'Confirmation via Razorpay receipt (email / WhatsApp).',
  ],
}

export const ONAM_SLOTS = [
  'Fixed slots — 45 minutes (lunch) and 60 minutes (dinner).',
  'Please arrive on time and as a full group; tables are seated only once all guests arrive.',
  'Late arrivals risk losing their reservation.',
]

export const ONAM_BOOKING_INFO = [
  'Maximum 4 pax per booking. For 5+, book the same time slot and we’ll try to seat you together (not guaranteed).',
  'Reservation is confirmed via the Razorpay payment receipt (WhatsApp / email).',
  'Once booked, slots / location cannot be changed, and tickets are non-refundable.',
]

export const ONAM_CHILD_POLICY = [
  'Under 4 yrs: Free',
  '4–11 yrs: Half price (book at full price and request a refund during / post-visit)',
  '12+ yrs: Full price',
]

export const ONAM_TERMS = [
  'Once purchased, tickets are non-refundable.',
  'Limited seats and quantities — early booking recommended.',
  'Your Razorpay email / WhatsApp confirmation is your booking confirmation.',
  'No offline bookings — please book online.',
  'For queries, email connect@mahabelly.com.',
]

export const ONAM_FAQS = [
  {
    q: 'Is the Sadhya different at Mahabelly Saket vs Mahabelly Canteen? Why the price difference?',
    a: 'For Onam this year, we’re serving the exact same menu at Mahabelly Saket and both Mahabelly Canteens — there’s no difference in the food or the experience on the plate. The only variation is the setting: Saket offers a more premium ambience, while the Canteens have a more casual vibe. That’s what the pricing reflects.',
  },
  { q: 'Can I order from the regular menu during Sadhya days?', a: 'No. Only the Sadhya is served from 24–27 August. A limited selection of non-veg appetisers is available for dine-in.' },
  { q: 'What if I booked the wrong slot?', a: 'Please make a fresh booking for the correct slot, then email us with both receipts to request a refund on the incorrect one (subject to availability).' },
  { q: 'What if I’m running late for my dine-in reservation?', a: 'We can’t hold the table beyond your slot. Please arrive on time with your full group.' },
  { q: 'Can I bring my own containers for takeaway?', a: 'Unfortunately no — our operations are at full capacity during these days.' },
  { q: 'Is white rice an option?', a: 'No. All Sadhyas come with Kerala Red Matta Rice only.' },
  { q: 'I didn’t receive confirmation. What should I do?', a: 'Please check your spam folder. If not found, email connect@mahabelly.com with your payment details.' },
  { q: 'Can I book for more than 4 people?', a: 'Book separate blocks in the same time slot. We’ll do our best to seat you together (max 6 on one table in special cases), but can’t guarantee it.' },
  { q: 'Can I get a refund or transfer my ticket?', a: 'Tickets are non-refundable. You may pass your ticket to someone else by sharing your confirmation.' },
]
