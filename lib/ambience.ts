// ────────────────────────────────────────────────────────────────
//  Ambience photos for the dine-in outlets (shown on /our-brands).
//  Keyed by outlet slug.
// ────────────────────────────────────────────────────────────────

export const OUTLET_AMBIENCE: Record<string, string[]> = {
  saket: [
    '/outlets/saket/amb1.jpg',
    '/outlets/saket/amb2.jpg',
    '/outlets/saket/amb3.jpg',
    '/outlets/saket/amb4.jpg',
    '/outlets/saket/amb5.jpg',
  ],
  saidulajab: [
    '/outlets/saidulajab/amb1.jpg',
    '/outlets/saidulajab/amb2.jpg',
    '/outlets/saidulajab/amb3.jpg',
    '/outlets/saidulajab/amb4.jpg',
  ],
  'vasant-kunj': [
    '/outlets/vasant-kunj/amb1.jpg',
    '/outlets/vasant-kunj/amb2.jpg',
    '/outlets/vasant-kunj/amb3.jpg',
    '/outlets/vasant-kunj/amb4.jpg',
    '/outlets/vasant-kunj/amb5.jpg',
  ],
}

export const getAmbience = (slug: string): string[] | undefined => OUTLET_AMBIENCE[slug]
