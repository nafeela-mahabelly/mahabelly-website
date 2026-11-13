// ────────────────────────────────────────────────────────────────
//  Onam Sadhya 2026 — ARCHIVED (event concluded, bookings closed)
//  Booking / Razorpay payment links were removed after the event.
//  This file only holds the non-booking archive shown under
//  Past Events (/events) and the Sadhya story (/sadhya-festivals).
// ────────────────────────────────────────────────────────────────

export const ONAM_2026_ARCHIVE = {
  title: 'Onam Sadhya 2026',
  closedNote:
    'Bookings closed. Thank you for joining us for Onam 2026. Explore memories from the feast and stay in touch for future celebrations.',
  when: 'August 2026',
  image: '/photos/onam-real.jpg',
  href: '/sadhya-festivals',
}

// Memories from the feast — used on the Sadhya & Festivals story page.
// Only real Sadhya dishes / Sadhya service. `focus` = vertical crop for the square tile.
export const SADHYA_GALLERY: { src: string; alt: string; focus?: string }[] = [
  { src: '/photos/onam-real.jpg', alt: 'A Mahabelly Onam Sadhya laid out on a banana leaf' },
  { src: '/photos/onam/onam-sadhya-service-1.jpg', focus: '55%', alt: 'Smiling guests seated before banana leaves as a Mahabelly server brings the Sadhya' },
  { src: '/photos/onam/onam-family-gathering.jpg', focus: '45%', alt: 'Family and friends in festive whites gathered for an Onam Sadhya at home' },
  { src: '/photos/exp-onam.jpg', alt: 'An illustrated Onam Sadhya on a banana leaf' },
  { src: '/photos/onam/onam-sadhya-service-2.jpg', focus: '55%', alt: 'Guests at a long table set with banana leaves as the team serves the Sadhya' },
  { src: '/photos/onam/onam-sadhya-service-3.jpg', focus: '60%', alt: 'A Mahabelly server ladling beetroot pachadi onto a banana leaf' },
]

export const SADHYA_LEAF_GUIDE = '/festivals/onam-sadhya-leaf.jpg'
