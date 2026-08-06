// ────────────────────────────────────────────────────────────────
//  Menu "flipbook" page images, rendered from each outlet's menu PDFs.
//  Keyed by menu slug (/menu/[slug]) and, for outlets without a menu
//  page, by outlet slug (used on /locations/[slug]).
// ────────────────────────────────────────────────────────────────

export interface MenuBookPage {
  src: string
  w: number
  h: number
}

export const MENU_BOOKS: Record<string, MenuBookPage[]> = {
  saket: [
    { src: '/menus/saket/p01.jpg', w: 2200, h: 1556 },
    { src: '/menus/saket/p02.jpg', w: 2200, h: 1556 },
    { src: '/menus/saket/p03.jpg', w: 2200, h: 1556 },
    { src: '/menus/saket/p04.jpg', w: 2200, h: 1556 },
    { src: '/menus/saket/p05.jpg', w: 1556, h: 2200 },
    { src: '/menus/saket/p06.jpg', w: 1556, h: 2200 },
    { src: '/menus/saket/p07.jpg', w: 1551, h: 2200 },
    { src: '/menus/saket/p08.jpg', w: 1551, h: 2200 },
  ],
  'canteen-saidulajab': [
    { src: '/menus/canteen-saidulajab/p01.jpg', w: 2200, h: 1556 },
    { src: '/menus/canteen-saidulajab/p02.jpg', w: 2200, h: 1556 },
    { src: '/menus/canteen-saidulajab/p03.jpg', w: 1556, h: 2200 },
    { src: '/menus/canteen-saidulajab/p04.jpg', w: 1556, h: 2200 },
    { src: '/menus/canteen-saidulajab/p05.jpg', w: 1556, h: 2200 },
    { src: '/menus/canteen-saidulajab/p06.jpg', w: 1556, h: 2200 },
  ],
  'canteen-vasant-kunj': [
    { src: '/menus/canteen-vasant-kunj/p01.jpg', w: 3000, h: 697 },
    { src: '/menus/canteen-vasant-kunj/p02.jpg', w: 1424, h: 2200 },
    { src: '/menus/canteen-vasant-kunj/p03.jpg', w: 1556, h: 2200 },
    { src: '/menus/canteen-vasant-kunj/p04.jpg', w: 2200, h: 1556 },
    { src: '/menus/canteen-vasant-kunj/p05.jpg', w: 2200, h: 1556 },
  ],
  sonipat: [
    { src: '/menus/sonipat/p01.jpg', w: 2200, h: 1556 },
    { src: '/menus/sonipat/p02.jpg', w: 2200, h: 1556 },
  ],
}

export const getMenuBook = (slug: string): MenuBookPage[] | undefined => MENU_BOOKS[slug]
