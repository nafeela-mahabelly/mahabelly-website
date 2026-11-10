// ────────────────────────────────────────────────────────────────
//  Mahabelly Habibi — online-only brand (Delhi & Gurgaon)
//  Delivery only: never show Reserve a Table or dine-in directions.
// ────────────────────────────────────────────────────────────────

export const HABIBI = {
  name: 'Mahabelly Habibi',
  tagline: 'Kerala x Gulf',
  descriptor: 'Online-only · Delhi & Gurgaon',
  logo: '/brand/habibi-logo.png',
  menuHref: '/menu/habibi',
  // "Order Habibi" everywhere routes to the city selector on the order page
  orderHref: '/order#habibi',
  brandCard:
    'Kerala meets the Gulf through Shawarma, Al Faham, Shawai and Mandhi. Born from a corner of the Canteen menu, Habibi now has a home of its own as an online-only brand delivering across serviceable areas in Delhi and Gurgaon.',
  headline: 'Some dishes became bestsellers. Ours became a brand.',
  story: [
    'Born from the grills at Mahabelly Canteen, Mahabelly Habibi celebrates Kerala’s love affair with Gulf food. Shawarma, Al Faham, Shawai and Mandhi have become part of the way Kerala eats today.',
    'What began as a corner of our menu found a following of its own. So we gave it a home. Smoky grills, generous meals and plenty to share, with the warmth of the Mahabelly family.',
    'Habibi is currently an online-only brand, available across serviceable areas in Delhi and Gurgaon.',
  ],
  // Shown wherever a city is picked: Swiggy serviceability is per address.
  availabilityNote:
    'Delivery depends on your exact address. Choosing a city doesn’t guarantee delivery to every address in it. The app will confirm once you enter yours.',
} as const

export type HabibiCity = 'Delhi' | 'Gurgaon'

export interface HabibiCityLinks {
  city: HabibiCity
  kitchen: string
  swiggy: string
  zomato: string
}

// Outlet-specific ordering links (client-supplied, Nov 2026).
// Swiggy slugs name the kitchens (Western Marg, Chattarpur / Chakkarpur, DLF Phase 4).
// The Zomato /r/ short links could not be resolved automatically — click-check before launch.
export const HABIBI_ORDER: HabibiCityLinks[] = [
  {
    city: 'Delhi',
    kitchen: 'Western Marg, Chattarpur',
    swiggy: 'https://www.swiggy.com/city/delhi/mahabelly-habibi-western-marg-chattarpur-rest1429152',
    zomato: 'https://www.zomato.com/r/22887999',
  },
  {
    city: 'Gurgaon',
    kitchen: 'Chakkarpur, DLF Phase 4',
    swiggy: 'https://www.swiggy.com/city/gurgaon/mahabelly-habibi-chakkarpur-dlf-phase-4-rest1455720',
    zomato: 'https://www.zomato.com/r/22933711',
  },
]

// Real Habibi food photography (client-supplied). Dish names only — no prices
// until a Habibi menu is provided; live menu & prices are on the delivery apps.
export interface HabibiDish {
  name: string
  desc: string
  image: string
}

export const HABIBI_DISHES: HabibiDish[] = [
  { name: 'Kerala Shawarma', desc: 'Kerala-style chicken shawarma, rolled tight with toum and pickles.', image: '/photos/habibi/kerala-shawarma.jpg' },
  { name: 'Al Faham', desc: 'Whole-cut chicken in a fiery Gulf spice rub, charred over the grill.', image: '/photos/habibi/al-faham.jpg' },
  { name: 'Mandhi', desc: 'Fragrant Mandhi rice crowned with grilled chicken, with toum and salsa.', image: '/photos/habibi/mandhi.jpg' },
  { name: 'Al Faham BBQ', desc: 'Smoky, glazed and made for sharing.', image: '/photos/habibi/al-faham-bbq.jpg' },
  { name: 'Shawarma Roll', desc: 'The classic roll, with pickled vegetables and garlic dip.', image: '/photos/habibi/shawarma-roll.jpg' },
  { name: 'Shawarma Plate', desc: 'Open shawarma with kuboos, toum and pickles on the side.', image: '/photos/habibi/shawarma-plate.jpg' },
]
