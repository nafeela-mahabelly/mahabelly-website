// ────────────────────────────────────────────────────────────────
//  Editorial content — story, experiences, press, reviews, people
// ────────────────────────────────────────────────────────────────

// ── Signature experiences (brief §5) ────────────────────────────
export const EXPERIENCES = [
  {
    title: 'Onam Sadhya',
    blurb: 'Kerala’s grand vegetarian feast, traditionally served on a banana leaf.',
    image: '/photos/sadhya-spread.jpg',
  },
  {
    title: 'Appam & Stew',
    blurb: 'Soft-laced appams with gently spiced coconut-milk stews.',
    image: '/art/curry-leaves.png',
  },
  {
    title: 'Malabar Biryani',
    blurb: 'Fragrant short-grain rice, slow-cooked meat and the warmth of Malabar spices.',
    image: '/art/kerala-spread.png',
  },
  {
    title: 'Kerala Seafood',
    blurb: 'Fish and prawns layered with coconut, raw mango, kokum and regional spice blends.',
    image: '/art/fish-curry-pan.png',
  },
  {
    title: 'Toddy-Shop Plates',
    blurb: 'Bold, spicy, shareable plates inspired by Kerala’s kallu shappus.',
    image: '/art/chicken-roast.png',
  },
  {
    title: 'Kerala Meals',
    blurb: 'A complete, comforting everyday spread of rice, curries and accompaniments.',
    image: '/photos/sadhya-serving.jpg',
  },
]

// ── Our Story timeline (brief §6A) ──────────────────────────────
export const TIMELINE = [
  {
    year: '2006',
    title: 'A craving for home',
    text: 'Three childhood friends from Kerala — Zachariah Jacob, Thomas Fenn and Dr Prem Kiran — arrive in Delhi and share a longing for the food they grew up with.',
  },
  {
    year: '2015',
    title: 'Mahabelly is born',
    text: 'Mahabelly opens in Delhi with a simple belief: Kerala’s cuisine deserves a larger stage than dosa, idli and sambar.',
  },
  {
    year: '2016 – 2019',
    title: 'A growing footprint',
    text: 'Word travels. New kitchens and outlets open across Delhi NCR as more diners discover coastal curries, toddy-shop plates and the Onam Sadhya.',
  },
  {
    year: '2024',
    title: 'Mahabelly Canteen',
    text: 'A younger, everyday format launches — comforting Kerala meals alongside Kerala’s own take on Al Faham, Shawaya and Shawarma.',
  },
  {
    year: 'Today',
    title: 'One story, many tables',
    text: 'Run by Zachariah Jacob and his family, Mahabelly is a family of restaurants and kitchens across Saket, Saidulajab, Vasant Kunj, Lado Serai, Gurgaon and Sonipat — carried forward by around 150 people.',
  },
]

// ── Our People (brief §6F) ──────────────────────────────────────
export const FOUNDERS = {
  names: ['Zachariah Jacob', 'Thomas Fenn', 'Dr Prem Kiran'],
  text: 'Mahabelly was founded in Delhi in 2015 by three childhood friends who shared a love for Kerala food and a belief that its story deserved a larger stage. Today the brand is run by Zachariah Jacob and his family, who continue to carry its original purpose forward — to serve Kerala with honesty, warmth and soul.',
}

export const PEOPLE_GROUPS = [
  {
    title: 'The founders',
    text: 'Zachariah Jacob, Thomas Fenn and Dr Prem Kiran — three friends from Kerala who turned a craving for home into a restaurant brand.',
    image: '/photos/storefront-onam.jpg',
  },
  {
    title: 'Present stewardship',
    text: 'Mahabelly is now run by Zachariah Jacob and his family, supported by a growing team across every kitchen and outlet.',
    image: '/photos/team-award.jpg',
  },
  {
    title: 'The Mahabelly family',
    text: 'Around 150 people cook, serve, manage, deliver and carry the story forward every day — many of whom have grown with the brand, from steward to captain, from cook to kitchen leader.',
    image: '/photos/team-garland.jpg',
  },
]

// ── Catering (brief §6I) ────────────────────────────────────────
export const CATERING_FORMATS = [
  { title: 'Home Gatherings', text: 'Intimate Kerala menus for family occasions and celebrations at home.' },
  { title: 'Corporate Meals', text: 'Office lunches, team meals and workplace festive spreads.' },
  { title: 'Weddings', text: 'Grand multi-course Kerala feasts for the biggest days.' },
  { title: 'Festive Sadhyas', text: 'The traditional Onam Sadhya, served on banana leaves at scale.' },
  { title: 'Live Counters', text: 'Appam, dosa and grill counters cooked fresh in front of your guests.' },
  { title: 'Large Events', text: 'High-volume catering with the same care as a single table.' },
]

export const CATERING_SAMPLE_MENUS = [
  'Onam & festive Sadhya (banana-leaf)',
  'Appam, stew & breakfast counters',
  'Malabar biryani & rice specials',
  'Coastal seafood & curries',
  'Toddy-shop grills & starters',
  'Kerala–Gulf: Al Faham, Shawaya & Mandhi',
]

// ── Sadhya & Festivals FAQs (brief §6E) ─────────────────────────
export const SADHYA_FAQS = [
  { q: 'What time is the Sadhya served?', a: 'Sadhya is served across lunch and dinner sittings on festival days. Exact slots are announced ahead of each festival — please check the current dates or enquire on WhatsApp.' },
  { q: 'Is the Sadhya suitable for children?', a: 'Yes. The Sadhya is entirely vegetarian and mild-to-moderate in spice, making it comfortable for most children.' },
  { q: 'Are refills included?', a: 'Yes — the Sadhya is traditionally served with unlimited refills of rice and most dishes during your sitting.' },
  { q: 'Can I get the Sadhya as takeaway?', a: 'Takeaway and delivery Sadhya packs are usually available on festival days. Availability and pricing are announced with each festival.' },
  { q: 'How do allergens work?', a: 'Our kitchens handle dairy, nuts, gluten and other common ingredients. Please tell us about any serious allergies when you book so we can guide you.' },
  { q: 'What is the cancellation policy for bookings?', a: 'Festival bookings may have their own advance and cancellation terms, shared at the time of booking. Please see our Cancellation & Refund Policy for general details.' },
]

// ── Press & media (brief §6G; from client media-coverage doc) ───
export interface PressItem {
  title: string
  publication: string
  href: string
}

export const PRESS_AWARDS = [
  {
    title: 'Best South Indian & Best Coastal Cuisine Restaurant, Delhi',
    publication: 'Times Food Award',
    note: 'Recognised across multiple years',
    image: '/festivals/times-food-award.jpg',
  },
]

export const PRESS_ARTICLES: PressItem[] = [
  { title: 'Simply Malayali', publication: 'The Hindu', href: 'https://www.thehindu.com/life-and-style/food/SIMPLY-Malayali/article17128060.ece' },
  { title: 'Masters of Malabar Masala', publication: 'The New Indian Express', href: 'http://www.newindianexpress.com/thesundaystandard/Masters-of-Malabar-Masala/2015/04/11/article2759165.ece' },
  { title: 'Flavours from Kerala', publication: 'The Hindu', href: 'http://www.thehindu.com/todays-paper/tp-features/tp-metroplus/flavours-from-kerala/article7041309.ece' },
  { title: 'Mixed Blessings of Kerala', publication: 'The Hindu', href: 'http://www.thehindu.com/features/metroplus/food-spot-mixed-blessings-of-kerala/article7138097.ece' },
  { title: 'Southern Comfort, Northern Palate', publication: 'Deccan Herald', href: 'http://www.deccanherald.com/content/474740/southern-comfort-northern-palate.html' },
  { title: 'Review — Mahabelly, New Delhi', publication: 'Livemint', href: 'http://www.livemint.com/Leisure/fUNdJcb2RzBLIgDNbAVTBI/Review-Mahabelly-New-Delhi.html' },
  { title: 'Dial M for Malayali — Meet Zachariah Jacob', publication: 'Bar & Bench', href: 'http://barandbench.com/dial-m-for-malayali-meet-zachariah-jacob-co-founder-of-mahabelly/' },
  { title: 'Critic Review', publication: 'What’s Hot', href: 'http://www.whatshot.in/critic-review/mahabelly-r-8619' },
  { title: 'The Thali Tradition brings Malayali meals to Delhi', publication: 'The Ideas Lab', href: 'https://theideaslab.com/the-thali-tradition-brings-malayali-meals-to-delhi-at-mahabelly/' },
  { title: 'Mahabelly — Kerala Cuisine in Delhi', publication: 'LBB', href: 'https://lbb.in/delhi/mahabelly-kerala-cuisine-delhi-restaurant/' },
  { title: 'The slow, steady rise of South Indian food in North India', publication: 'The Established', href: 'https://www.theestablished.com/culture/living/the-slow-steady-and-nuanced-rise-of-south-indian-food-in-north-india' },
  { title: 'We found the perfect Onam Sadya at Mahabelly', publication: 'NDTV Food', href: 'https://food.ndtv.com/news/have-you-tried-sadya-this-onam-festival-we-found-the-perfect-spread-at-mahabelly-4325072' },
  { title: 'Mahabelly brings back its Vishu Sadhya to Delhi', publication: 'Time Out', href: 'https://www.timeout.com/delhi/news/mahabelly-bringing-back-its-vishu-sadhya-to-delhi-040926' },
  { title: 'Shashi Tharoor praises Kerala cuisine at Mahabelly’s reopening', publication: 'Times Now', href: 'https://www.timesnownews.com/lifestyle/food/news/sashi-tharoor-praises-kerala-cuisine-at-the-reopening-of-this-popular-delhi-restaurant-article-116530687' },
  { title: 'Delhi answers call to help flood-hit Kerala', publication: 'The Times of India', href: 'https://timesofindia.indiatimes.com/city/delhi/delhi-answers-call-to-help-flood-hit-kerala/articleshow/65456691.cms' },
  { title: 'Art & Culture Archives', publication: 'The Tribune', href: 'https://www.thetribuneonline.com/art-culture-archives58.html' },
]

export const PRESS_VIDEOS: PressItem[] = [
  { title: 'Kerala Food Experience', publication: 'YouTube Shorts', href: 'https://www.youtube.com/shorts/0wPoABUAXg8' },
  { title: 'Mahabelly Review', publication: 'YouTube', href: 'https://www.youtube.com/watch?v=WlA3fYP45a8' },
  { title: 'Mahabelly Review', publication: 'YouTube', href: 'https://youtu.be/ZsYONiihKnU' },
  { title: 'The Thali Tradition', publication: 'YouTube', href: 'https://youtu.be/_O4gd4rdC48' },
  { title: 'Dining at Mahabelly', publication: 'YouTube', href: 'https://youtu.be/BADr5TMr0Q0' },
  { title: 'Food Vlog', publication: 'YouTube', href: 'https://youtu.be/81xAC8TDL2g' },
  { title: 'Food Vlog', publication: 'YouTube', href: 'https://youtu.be/5YCoQgwucrY' },
  { title: 'Food Vlog', publication: 'YouTube', href: 'https://www.youtube.com/watch?v=LxK6avuFBTM' },
]

// ── Reviews (brief §6H) ─────────────────────────────────────────
// NOTE FOR CLIENT: these are short placeholder testimonials for layout.
// Replace with verified guest reviews and link each to its source
// (Google / Zomato) before launch, per the brief.
export const REVIEWS = [
  { quote: 'The closest thing to a Kerala home kitchen I’ve found in Delhi. The appam and stew took me straight back.', source: 'Guest review · Google' },
  { quote: 'Their Onam Sadhya is the real thing — generous, beautifully served on a banana leaf, and endlessly comforting.', source: 'Guest review · Google' },
  { quote: 'The Malabar biryani and fish pollichathu are worth the trip on their own. Warm service, honest flavours.', source: 'Guest review · Zomato' },
  { quote: 'Finally, Kerala food that goes far beyond dosa and idli. Every dish tells you a little more about the coast.', source: 'Guest review · Google' },
]

export const REVIEW_PLATFORMS = [
  { label: 'Read & review on Google', href: 'https://www.google.com/search?q=Mahabelly+Delhi+reviews' },
  { label: 'Read & review on Zomato', href: 'https://www.zomato.com/ncr/restaurants/mahabelly' },
]
