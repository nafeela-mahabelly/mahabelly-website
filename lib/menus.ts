// ────────────────────────────────────────────────────────────────
//  Web-readable menus (crawlable HTML — brief §6B / §8 SEO)
//  Transcribed from the official outlet menu PDFs (June 2026).
//  Prices in INR. Taxes extra as applicable. Subject to availability.
// ────────────────────────────────────────────────────────────────

export interface MenuItem {
  name: string
  price: string
  desc?: string
  best?: boolean
}
export interface MenuGroup {
  title?: string
  diet?: 'veg' | 'nonveg' | 'mixed'
  note?: string
  items: MenuItem[]
}
export interface MenuSection {
  name: string
  note?: string
  groups: MenuGroup[]
}
export interface DishSpecial {
  name: string
  desc?: string
  image: string
}
export interface Menu {
  slug: string
  outletName: string
  outletSlug: string
  brand: 'mahabelly' | 'canteen'
  kicker: string
  intro: string
  footnotes: string[]
  pdf?: string
  specials?: DishSpecial[]
  sections: MenuSection[]
}

// ── 1. MAHABELLY SAKET: MAIN DINING (updated menu, Nov 2026) ────────────────────────────
const saket: Menu = {
  slug: 'saket',
  outletSlug: 'saket',
  outletName: 'Mahabelly Saket',
  brand: 'mahabelly',
  kicker: 'Flagship Dine-In',
  intro:
    'The full Mahabelly table: coastal curries, toddy-shop plates, Malabar biriyani, seafood and the hidden gems of Kerala’s home kitchens.',
  footnotes: [
    'We do not levy a service charge.',
    'Taxes and other charges (Takeaway @5%) extra as applicable.',
    'Additional charge of ₹99 / ₹80 for any boneless mutton / chicken dishes.',
    'All items are subject to availability. All good things in life take time, so please allow us ample preparation time.',
  ],
  pdf: '/menus/saket-main-menu-latest.pdf',
  specials: [
    { name: 'Meen Pollichathu', desc: 'Fish roasted in masala & steamed in a banana leaf', image: '/dishes/saket-pollichathu.jpg' },
    { name: 'Prawn Mango Curry', desc: 'A Malabar signature: prawns in a tangy coconut gravy', image: '/dishes/saket-prawn-mango.jpg' },
    { name: 'Fish Moilee', desc: 'Traditional Kerala-style fish stew', image: '/dishes/saket-fish-moilee.jpg' },
    { name: 'Mutton Chettinad', desc: 'Slow-cooked mutton in a robust Chettinad masala', image: '/dishes/saket-mutton-chettinad.jpg' },
    { name: 'Mutton Biriyani', desc: 'Malabar-style, layered with fragrant kaima rice', image: '/dishes/saket-mutton-biryani.jpg' },
    { name: 'Trivandrum Chicken Fry', desc: 'Succulent pieces of red-hot fried chicken', image: '/dishes/saket-trivandrum-chicken.jpg' },
  ],
  sections: [
    {
      name: 'Appetisers',
      groups: [
        {
          title: 'Vegetarian',
          diet: 'veg',
          items: [
            { name: 'Banana Chips', price: '150' },
            { name: 'Garlic Wafers', price: '150' },
            { name: 'Rasam & Pappadam', price: '240' },
            { name: 'Beetroot Kappa Salad', price: '299' },
            { name: 'Mini Vada / Curd Vada / Rasam Vada', price: '299' },
            { name: 'Gunpowder Idli', price: '360' },
            { name: 'Vegetable Cutlets', price: '360' },
            { name: 'Paneer Kanthari Tawa Fry', price: '450', desc: 'Special bird’s eye chilli masala' },
            { name: 'Paneer Ghee Roast Dry', price: '450' },
            { name: 'Mushroom Pepper Fry', price: '440' },
            { name: 'Gobi 65', price: '420', desc: 'Southern-style, deep fried cauliflower' },
            { name: 'Kothu-Porotta', price: '420', desc: 'Shredded Malabar porotta with assorted vegetables' },
            { name: 'Vegetable Kondattam', price: '440', desc: 'Assorted vegetables stir fried with onions, red chillies & spices' },
          ],
        },
        {
          title: 'Non-Vegetarian',
          diet: 'nonveg',
          items: [
            { name: 'Prawn Wafers', price: '160' },
            { name: 'Kothu-Porotta (Egg / Chicken / Buff / Mutton)', price: '440 / 480 / 499 / 540', desc: 'Shredded Malabar porotta with your choice of egg, chicken, buff or mutton' },
            { name: 'Trivandrum Chicken Fry', price: '499', desc: 'Succulent pieces of red hot fried chicken', best: true },
            { name: 'Chicken 65 / Kondattam', price: '520', desc: 'Spicy boneless chicken, deep fry / stir fry' },
            { name: 'Pork Fry / Pork Chilli', price: '560', desc: 'Pork chunks roasted with grated coconut, spices & chillies' },
            { name: 'Erachi Double Fry / Kondattam', price: '560', desc: 'Spicy cubes of buff, deep fry / stir fry' },
            { name: 'Mutton Varathathu', price: '799', desc: 'Spicy sautéed boneless mutton' },
            { name: 'Fish Cutlets', price: '480' },
            { name: 'Prawn Pepper / Prawn Curry Leaf Tawa Fry / Prawn Ularthiyathu', price: '799', desc: 'Stir-fried with roasted spices & masala' },
          ],
        },
        {
          title: 'Fish Fry',
          diet: 'nonveg',
          note: 'Straight from Kerala’s coastline to your plate!',
          items: [
            { name: 'Fish Fillet (Boneless)', price: '599' },
            { name: 'Aila (Mackerel)', price: '599' },
            { name: 'Netholi (Anchovies)', price: '599' },
            { name: 'Karimeen (Pearlspot)', price: '799' },
            { name: 'Neymeen (Kingfish / Surmai)', price: '799' },
          ],
        },
      ],
    },
    {
      name: 'Mains',
      groups: [
        {
          title: 'Vegetarian',
          diet: 'veg',
          items: [
            { name: 'Vegetable Stew', price: '440', desc: 'Medley of vegetables delicately cooked in coconut milk & spices' },
            { name: 'Vegetable Kurma', price: '440', desc: 'Mildly spiced mixed vegetables simmered in delicate coconut milk' },
            { name: 'Vegetable / Paneer Chettinad', price: '499', desc: 'Seasonal vegetables or paneer in a fiery, aromatic Chettinad curry' },
            { name: 'Pacha Manga Curry', price: '480', desc: 'Raw mangoes cooked in a coconut milk gravy' },
            { name: 'Kadala Curry', price: '440', desc: 'Spiced black gram curry, regular fare of every thattu kada' },
            { name: 'Naadan Paneer Masala', price: '499', desc: 'Chunks of paneer in a silky coconut gravy' },
            { name: 'Paneer Ghee Roast', price: '499', desc: 'Rich Mangalorean masala with curry leaves' },
            { name: 'Potato Roast', price: '440', desc: 'Shallow fried cubes of potato in a luscious onion gravy' },
            { name: 'Mushroom Mappas', price: '480', desc: 'Mushroom buttons cooked in coconut milk & spices' },
          ],
        },
        {
          title: 'Meat',
          diet: 'nonveg',
          items: [
            { name: 'Stew (Chicken / Mutton)', price: '520 / 799', desc: 'Delicately cooked in coconut milk & spices' },
            { name: 'Mappas (Chicken / Mutton)', price: '520 / 799', desc: 'Mild, creamy coconut milk gravy infused with aromatic spices & curry leaves' },
            { name: 'Chettinad (Chicken / Mutton)', price: '520 / 799', desc: 'Bold, spicy South Indian gravy with roasted spices & black pepper' },
            { name: 'Curry (Egg / Chicken / Buff / Pork / Mutton)', price: '420 / 520 / 580 / 580 / 799', desc: 'Traditional curry with a smooth blend of spices & coconut milk' },
            { name: 'Roast (Egg / Chicken / Buff / Pork / Mutton)', price: '430 / 540 / 599 / 599 / 799', desc: 'Pan fried meat in a luscious, spicy onion & tomato gravy' },
            { name: 'Varattiyathu (Chicken / Buff / Pork / Mutton)', price: '540 / 599 / 599 / 799', desc: 'Semi-dry boneless meat sautéed with onions, herbs & spices' },
          ],
        },
        {
          title: 'Seafood',
          diet: 'nonveg',
          items: [
            { name: 'Pollichathu (Aila / Karimeen / Neymeen / Prawn)', price: '620 / 799 / 799 / 799', desc: 'Delectably roasted, topped with masala & steamed in a banana leaf', best: true },
            { name: 'Roast (Neymeen / Prawn)', price: '799', desc: 'Pan fried seafood in a luscious onion gravy' },
            { name: 'Shaapu Meen Curry', price: '580', desc: 'Red-hot fish curry with smoky kokum, a staple of Kerala’s toddy shops' },
            { name: 'Alleppey Fish Curry', price: '620', desc: 'Coconut milk based curry from the backwaters' },
            { name: 'Fish Moilee', price: '620', desc: 'Traditional Kerala-style fish stew' },
            { name: 'Fish / Prawn Mango Curry', price: '620 / 799', desc: 'Signature dish from the Malabar region' },
          ],
        },
      ],
    },
    {
      name: 'The Hidden Gems',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Kizhi (Vegetable / Chicken / Buff)', price: '450 / 499 / 560', desc: 'A funky combo of porottas & spicy gravy, finished in a banana leaf. A meal in itself!', best: true },
            { name: 'Puttu (Kadala / Egg / Chicken / Buff / Mutton)', price: '399 / 420 / 460 / 499 / 599', desc: 'Breakfast dish of steamed ground rice & coconut, served with your choice' },
          ],
        },
      ],
    },
    {
      name: 'Biriyani',
      note: 'Malabar-style biriyani layered with fragrant short-grain kaima rice, served with raita, pickle & crisp pappadom.',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Vegetable', price: '460' },
            { name: 'Egg', price: '470' },
            { name: 'Chicken', price: '520', best: true },
            { name: 'Buff', price: '560' },
            { name: 'Mutton', price: '699' },
            { name: 'Prawn', price: '699' },
          ],
        },
      ],
    },
    {
      name: 'Rolls',
      note: 'Malabar Porotta Rolls, our version of a kathi roll.',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Vegetable', price: '290' },
            { name: 'Paneer', price: '320' },
            { name: 'Egg', price: '320' },
            { name: 'Chicken', price: '340' },
          ],
        },
      ],
    },
    {
      name: 'Accompaniments',
      groups: [
        {
          title: 'Breads',
          diet: 'mixed',
          items: [
            { name: 'Appam / Flat Kall Appam', price: '80', desc: 'Thin lacey rice flour pancakes' },
            { name: 'Egg Appam', price: '160', desc: 'Appam with a sunny side egg on top' },
            { name: 'Malabar Porotta (Eggless)', price: '80', desc: 'The quintessential flaky Kerala-style flatbread' },
            { name: 'Malabar Porotta (Contains Eggs)', price: '80' },
            { name: 'Chapati', price: '60' },
          ],
        },
        {
          title: 'Traditional Staples',
          diet: 'veg',
          items: [
            { name: 'Idli', price: '280', desc: 'Three idlis served with sambhar & chutney' },
            { name: 'Extra Idli (Per Piece)', price: '60' },
            { name: 'Idiyappam', price: '199', desc: 'Steamed string hoppers' },
            { name: 'Puttu', price: '199', desc: 'Steamed cylinders of ground rice layered with coconut' },
            { name: 'Kappa', price: '240', desc: 'Mashed tapioca lightly tempered with spices' },
          ],
        },
        {
          title: 'Rice',
          diet: 'veg',
          items: [
            { name: 'Curd Rice', price: '260' },
            { name: 'Neychoru', price: '299', desc: 'Rice tossed in ghee & topped with fried onions' },
            { name: 'Kerala Red Rice', price: '199' },
            { name: 'Steamed White Rice', price: '180' },
          ],
        },
      ],
    },
    {
      name: 'Sides',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Onion Salad / Pickled Vegetables', price: '99' },
            { name: 'Green Salad', price: '199' },
            { name: 'Pappadam (4 pcs)', price: '120' },
            { name: 'Sambhar', price: '199' },
            { name: 'Raita', price: '160' },
            { name: 'Ulli Chammanthi', price: '120', desc: 'Spicy chutney with shallots, red chillies & coconut oil' },
            { name: 'Boiled Egg (2 Eggs)', price: '99' },
          ],
        },
        {
          title: 'Pickles (Takeaway)',
          diet: 'mixed',
          items: [
            { name: 'Beetroot / Lemon / Mango / Garlic', price: '260' },
            { name: 'Chicken / Buff', price: '320' },
            { name: 'Fish', price: '340' },
            { name: 'Prawn', price: '360' },
          ],
        },
      ],
    },
    {
      name: 'Desserts',
      groups: [
        {
          diet: 'veg',
          items: [
            { name: 'Caramelised Banana with Ice Cream & Honey', price: '290' },
            { name: 'Caramel Custard', price: '290', desc: 'Contains egg' },
            { name: 'Payasam of the Day', price: '290', desc: 'Sublime combination of milk & sugar' },
            { name: 'Pazhampori with Honey', price: '290', desc: 'Kerala’s favourite tea-shop staple' },
            { name: 'House Special Ice Creams', price: '290', desc: 'Coconut Jaggery, Filter Coffee, Salted Butter Caramel & Chocolate' },
          ],
        },
      ],
    },
    {
      name: 'Beverages',
      groups: [
        {
          title: 'Hot',
          diet: 'veg',
          items: [
            { name: 'Filter Coffee', price: '150' },
            { name: 'Chukku Coffee', price: '120', desc: 'Kerala’s spiced herbal coffee' },
            { name: 'Kerala Milk Tea', price: '110' },
            { name: 'Sulaimani Tea', price: '110', desc: 'Light, aromatic black “mohabbat” tea infused with lemon & subtle spices, best served after a meal' },
          ],
        },
        {
          title: 'Cold',
          diet: 'veg',
          items: [
            { name: 'Tender Coconut Water', price: '220' },
            { name: 'Fresh Lime Water', price: '180' },
            { name: 'Fresh Lime Soda', price: '199' },
            { name: 'Cold Coffee', price: '299' },
            { name: 'Butter Milk', price: '220' },
            { name: 'Gunsberg', price: '180' },
            { name: 'Soft Drinks (With Lime)', price: '120' },
            { name: 'Mineral Water', price: 'MRP' },
          ],
        },
      ],
    },
  ],
}

// ── 2. MAHABELLY CANTEEN — SAIDULAJAB ───────────────────────────
const saidulajab: Menu = {
  slug: 'canteen-saidulajab',
  outletSlug: 'saidulajab',
  outletName: 'Mahabelly Canteen, Saidulajab',
  brand: 'canteen',
  kicker: 'Everyday Kerala Canteen',
  intro:
    'Comforting Kerala Meals, tiffin favourites, Porotta, curries and teatime bites. Everyday Kerala food at the Canteen in Saidulajab.',
  footnotes: [
    'Taxes extra as applicable. All items subject to availability.',
    '₹15 extra for Kuboos bread instead of Rumali Roti.',
  ],
  pdf: '/menus/mahabelly-canteen-saidulajab-menu.pdf',
  specials: [
    { name: 'Kizhi Porotta', desc: 'Porottas & spicy chicken finished in a banana leaf', image: '/dishes/said-kizhi.jpg' },
    { name: 'Kothu-Porotta', desc: 'Shredded Malabar porotta tossed with buff & spices', image: '/dishes/said-kothu-buff.jpg' },
    { name: 'Chicken 65', desc: 'Spicy, crisp boneless chicken', image: '/dishes/said-chicken65.jpg' },
    { name: 'Porotta & Chicken Curry', desc: 'Everyday meal-box comfort', image: '/dishes/said-porotta-chicken.jpg' },
    { name: 'Egg Biriyani', desc: 'Fragrant short-grain biriyani', image: '/dishes/said-egg-biryani.jpg' },
    { name: 'Buff Roll', desc: 'Our version of the kathi roll', image: '/dishes/said-buff-roll.jpg' },
  ],
  sections: [
    {
      name: 'Lunch Thali',
      note: 'From 12 noon – 3 pm.',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Fixed Kerala Thali Meals', price: '299', desc: 'Porotta, Kerala red rice, sambar, moru curry, veg curry, thoran, pappadam, pickle & payasam', best: true },
            { name: 'Fixed North Indian Thali', price: '299', desc: 'Chapati/porotta, white rice, chole/rajma/dal, sabzi, kadhi, papad, pickle & gulab jamun' },
            { name: 'Add-On (Paneer Masala / Egg / Chicken / Erachi / Fish)', price: '140 – 220', desc: 'Extra curry with your thali' },
          ],
        },
      ],
    },
    {
      name: 'Combos',
      note: 'From 10 am – 3 pm. Chapati / thattu dosa / porotta / puttu or rice, served with:',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Kadala / Potato Curry', price: '260' },
            { name: 'Vegetable Kurma', price: '280' },
            { name: 'Paneer Masala', price: '320' },
            { name: 'Egg Curry (One Boiled Egg)', price: '290' },
            { name: 'Chicken Curry', price: '320' },
            { name: 'Erachi Curry', price: '340' },
            { name: 'Fish Curry', price: '380' },
            { name: 'Mutton Curry', price: '450' },
            { name: 'Prawn Curry', price: '499' },
          ],
        },
      ],
    },
    {
      name: 'Starters',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Pappadom / Rasam & Pappadom', price: '60 / 199' },
            { name: 'Gobhi 65 / Mixed Vegetable Bhajji', price: '280' },
            { name: 'Paneer Pakoda', price: '299' },
            { name: 'Chilli Fried Idli', price: '289' },
            { name: 'Paneer 65 / Mushroom Pepper Fry', price: '320 / 299' },
            { name: 'Kall Omlette with Mint Chutney', price: '149' },
            { name: 'Chicken Fry / Pepper Chicken', price: '320 / 350' },
            { name: 'Erachi Fry', price: '360' },
            { name: 'Mutton Fry', price: '499' },
            { name: 'Fish Fry (Aila / Mathi / Netholi)', price: '420' },
            { name: 'Fish Fry (Surmai / Neymeen)', price: '499' },
            { name: 'Prawn Fry', price: '499' },
          ],
        },
      ],
    },
    {
      name: 'Dosa',
      note: 'Breakfast & evening, 10 am – 12 noon and 4 pm – 7 pm. Half / Full.',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Plain / Podi Dosa', price: '160 / 170' },
            { name: 'Ghee Roast / Podi Ghee Roast', price: '190 / 199' },
            { name: 'Masala / Podi Masala', price: '190 / 199' },
            { name: 'Ghee Roast Masala / Podi Ghee Roast Masala', price: '210 / 220' },
            { name: 'Mysore Masala / Paneer Masala', price: '220 / 230' },
            { name: 'Thattu / Set Dosa (2 pcs)', price: '199' },
            { name: 'Egg Dosa / Chicken Dosa', price: '199 / 260' },
          ],
        },
      ],
    },
    {
      name: 'Tiffin (All Day)',
      groups: [
        {
          diet: 'veg',
          items: [
            { name: 'Oothappam (Onion/Tomato / Mixed Veg)', price: '210' },
            { name: 'Idli (3 pcs)', price: '160' },
            { name: 'Podi Idli', price: '170' },
            { name: 'Vada (2 pcs) with Sambar', price: '150' },
            { name: 'Plain Rawa / Veg Upma', price: '80 / 120' },
            { name: 'Ghee Pongal', price: '180' },
            { name: 'Puttu with Kadala Curry', price: '150' },
            { name: 'Idiyappam with Veg Kurma', price: '160' },
          ],
        },
      ],
    },
    {
      name: 'Iqbal Ikka’s Biriyani',
      note: 'Served with raita, pickle & pappadam.',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Vegetable', price: '260' },
            { name: 'Egg', price: '280' },
            { name: 'Chicken', price: '350', best: true },
            { name: 'Erachi', price: '370' },
            { name: 'Mutton', price: '420' },
          ],
        },
      ],
    },
    {
      name: 'Curries',
      groups: [
        {
          title: 'Vegetarian',
          diet: 'veg',
          items: [
            { name: 'Sambhar (Portion / Full)', price: '60 / 199' },
            { name: 'Kadala / Potato Curry', price: '240' },
            { name: 'Mixed Veg Kurma', price: '310' },
            { name: 'Paneer Masala', price: '340' },
          ],
        },
        {
          title: 'Non-Vegetarian',
          diet: 'nonveg',
          items: [
            { name: 'Egg Curry', price: '260' },
            { name: 'Chicken Curry / Chettinad', price: '350 / 399' },
            { name: 'Erachi Curry', price: '380' },
            { name: 'Fish Curry', price: '399' },
            { name: 'Mutton Curry', price: '499' },
            { name: 'Prawn Curry', price: '499' },
          ],
        },
      ],
    },
    {
      name: 'Kerala–Gulf Grill',
      note: 'Charcoal-grilled, marinated in aromatic Arabic spices, served with toum, pickled vegetables & Rumali Roti.',
      groups: [
        {
          diet: 'nonveg',
          items: [
            { name: 'Al Faham: Regular (Qtr / Half / Full)', price: '250 / 450 / 850', desc: 'Charcoal-grilled chicken', best: true },
            { name: 'Al Faham: BBQ or Peri Peri (Qtr / Half / Full)', price: '270 / 499 / 899' },
            { name: 'Shawaya: Rôtisserie Grilled Chicken (Qtr / Half / Full)', price: '270 / 499 / 899' },
            { name: 'Mandhi (Qtr / Half / Full)', price: '350 / 599 / 1099', desc: 'Fragrant Yemeni-style rice with Al Faham / Shawaya' },
          ],
        },
      ],
    },
    {
      name: 'Shawarma',
      groups: [
        {
          diet: 'nonveg',
          items: [
            { name: 'Spl. Kerala Chicken Shawarma', price: '220', desc: 'Kerala-style, wrapped in soft Kuboos bread. Must try!', best: true },
            { name: 'Regular Chicken Shawarma Roll', price: '199' },
            { name: 'Only Chicken Shawarma Roll', price: '240' },
            { name: 'Chicken Shawarma Plate', price: '250' },
            { name: 'Only Chicken Shawarma Plate', price: '270' },
          ],
        },
      ],
    },
    {
      name: 'Porotta Rolls & Kothu',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Veg / Paneer / Egg Roll', price: '160 / 180 / 180' },
            { name: 'Chicken / Egg Chicken Roll', price: '199 / 220' },
            { name: 'Erachi / Egg Erachi Roll', price: '220 / 250' },
            { name: 'Veg Kothu / Chilli Porotta', price: '210' },
            { name: 'Non-Veg Kothu (Egg / Chicken / Erachi)', price: '230 / 299 / 320' },
          ],
        },
      ],
    },
    {
      name: 'Rice, Breads & Staples',
      groups: [
        {
          diet: 'veg',
          items: [
            { name: 'Tiffin Rice (Tomato / Lemon / Tamarind / Curd)', price: '210' },
            { name: 'Kerala Rice / White Rice', price: '150' },
            { name: 'Idiyappam / Puttu', price: '160' },
            { name: 'Porotta', price: '45' },
            { name: 'Appam', price: '45' },
            { name: 'Chapati / Ghee Chapati', price: '30 / 50' },
            { name: 'Kuboos Bread', price: '45' },
            { name: 'Rumali Roti', price: '30' },
          ],
        },
      ],
    },
    {
      name: 'Chinese',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Hot ’n’ Sour Soup (Veg / Chicken)', price: '140 / 190' },
            { name: 'Sweet Corn Soup (Veg / Chicken)', price: '140 / 190' },
            { name: 'Veg Manchurian', price: '230' },
            { name: 'Chilli Paneer (Dry / Gravy)', price: '320' },
            { name: 'Chicken Chilli / Manchurian / Dragon', price: '320' },
            { name: 'Veg Chowmein / Fried Rice', price: '240' },
            { name: 'Egg Chowmein / Fried Rice', price: '280' },
            { name: 'Chicken Chowmein / Fried Rice', price: '299' },
          ],
        },
      ],
    },
    {
      name: 'North Indian & Chaat',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Rajma / Chole / Kadhi Rice or Chapati', price: '199' },
            { name: 'Matar Paneer Rice / Chapati', price: '240' },
            { name: 'Gol Gappe: Water (5 pc) / Dahi (6 pc)', price: '60 / 150' },
            { name: 'Bhalla Papdi / Dahi Bhalla / Papdi Chaat', price: '130' },
            { name: 'Pav Bhaji', price: '150' },
            { name: 'Aloo Chaat / Aloo Tikki / Tikki Papdi', price: '130' },
            { name: 'Burger', price: '110' },
          ],
        },
      ],
    },
    {
      name: 'Beverages & Desserts',
      groups: [
        {
          title: 'Hot',
          diet: 'veg',
          items: [
            { name: 'Filter Coffee', price: '90' },
            { name: 'Tea / Sulaimani Tea', price: '70' },
            { name: 'Payasam / Sweet Pongal', price: '160 / 179' },
            { name: 'Gulab Jamun (2 pcs) / Rawa Kesari', price: '110 / 130' },
          ],
        },
        {
          title: 'Cold',
          diet: 'veg',
          items: [
            { name: 'Ice Cream', price: '150' },
            { name: 'Fresh Lime Juice / Soda', price: '80 / 120' },
            { name: 'Fruit Shakes (Tender Coconut / Custard Apple / Banana)', price: '180' },
            { name: 'Buttermilk', price: '150' },
            { name: 'Cold Coffee', price: '180' },
            { name: 'Lassi Sweet / Salted / Mango', price: '180' },
            { name: 'Soft Drinks with Lime', price: '70' },
            { name: 'Bottled Water', price: '30' },
          ],
        },
      ],
    },
  ],
}

// ── 3. MAHABELLY CANTEEN — VASANT KUNJ (THE KUNJ) ───────────────
const vasantKunj: Menu = {
  slug: 'canteen-vasant-kunj',
  outletSlug: 'vasant-kunj',
  outletName: 'Mahabelly Canteen @ The Kunj',
  brand: 'canteen',
  kicker: 'Everyday Kerala Canteen',
  intro:
    'Kerala tiffin, comforting meals, snacc appams and belly burgers, served at The Kunj in Vasant Kunj.',
  footnotes: ['Taxes extra as applicable. All items subject to availability.'],
  specials: [
    { name: 'Kanji & Payar', desc: 'Comforting rice porridge with green gram', image: '/dishes/vk-kanji.jpg' },
    { name: 'Vegetable Kothu-Porotta', desc: 'Shredded porotta with vegetables & spice', image: '/dishes/vk-veg-kothu.jpg' },
    { name: 'Gobi 65', desc: 'Southern-style crisp cauliflower', image: '/dishes/vk-gobi65.jpg' },
    { name: 'Rice & Chicken Curry', desc: 'A hearty everyday meal box', image: '/dishes/vk-rice-chicken.jpg' },
    { name: 'Mutton Roll', desc: 'Malabar porotta roll with spiced mutton', image: '/dishes/vk-mutton-roll.jpg' },
    { name: 'Appam & Vegetable Kurma', desc: 'Soft laced appams with a mild coconut kurma', image: '/dishes/vk-appam-kurma.jpg' },
  ],
  sections: [
    {
      name: 'Usual Suspects',
      note: 'Dosa served half / full.',
      groups: [
        {
          title: 'Dosa',
          diet: 'mixed',
          items: [
            { name: 'Plain / Podi Dosa', price: '170 / 180' },
            { name: 'Ghee Roast / Podi Ghee Roast', price: '199 / 210' },
            { name: 'Masala / Podi Masala', price: '199 / 210' },
            { name: 'Ghee Roast Masala / Podi Ghee Roast Masala', price: '220 / 230' },
            { name: 'Mysore Masala / Paneer Masala', price: '230 / 240' },
            { name: 'Egg Dosa / Chicken Dosa', price: '240 / 280' },
            { name: 'Puttu with Kadala Curry', price: '260' },
            { name: 'Idiyappam with Veg Kurma', price: '260' },
          ],
        },
        {
          title: 'Idli & Oothappam',
          diet: 'veg',
          items: [
            { name: 'Oothappam (Onion/Tomato / Mixed Veg)', price: '220' },
            { name: 'Idli (3 pcs)', price: '180' },
            { name: 'Vada (2 pcs) with Sambar', price: '160' },
            { name: 'Vada (1 pc)', price: '80' },
          ],
        },
      ],
    },
    {
      name: 'Starters',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Mulagu Fried Idli', price: '289' },
            { name: 'Gobi 65 / Mixed Vegetable Bhajji', price: '280' },
            { name: 'Mushroom Pepper Fry / Chilli Mushroom', price: '299' },
            { name: 'Paneer 65 / Chilli Paneer', price: '320' },
            { name: 'Paneer Pakoda', price: '299' },
            { name: 'Chicken Fry / Sukka / Pepper Chicken', price: '350' },
            { name: 'Mutton Fry / Sukka', price: '550' },
            { name: 'Fish Fry', price: '499' },
            { name: 'Prawn Fry / Sukka', price: '550' },
          ],
        },
      ],
    },
    {
      name: 'Snacc Appams',
      note: 'Single appam with a topping in the centre, served with chutney.',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Veg Appam', price: '120' },
            { name: 'Paneer Appam', price: '140' },
            { name: 'Egg Appam', price: '140' },
            { name: 'Chicken Appam', price: '160', best: true },
          ],
        },
      ],
    },
    {
      name: 'Main Course',
      groups: [
        {
          title: 'Vegetarian Curries',
          diet: 'veg',
          items: [
            { name: 'Sambar (Half / Full)', price: '60 / 199' },
            { name: 'Kadala / Potato Curry', price: '240' },
            { name: 'Mixed Veg Kurma', price: '310' },
            { name: 'Chettinadu Paneer Masala', price: '340' },
            { name: 'Paneer Ghee Roast', price: '350' },
          ],
        },
        {
          title: 'Non-Vegetarian Curries',
          diet: 'nonveg',
          items: [
            { name: 'Egg (Curry / Ghee Roast / Chettinadu)', price: '280 / 299 / 299' },
            { name: 'Chicken (Curry / Ghee Roast / Chettinadu)', price: '360 / 399 / 399' },
            { name: 'Mutton (Curry / Ghee Roast / Chettinadu)', price: '499 / 550 / 550' },
            { name: 'Kerala Fish Curry / Mango Fish Curry', price: '399 / 420' },
            { name: 'Prawn Curry', price: '499' },
          ],
        },
        {
          title: 'Biriyani',
          diet: 'mixed',
          note: 'Served with raita, pickle & pappadom.',
          items: [
            { name: 'Vegetable', price: '260' },
            { name: 'Egg', price: '280' },
            { name: 'Chicken', price: '350' },
            { name: 'Mutton', price: '420' },
          ],
        },
      ],
    },
    {
      name: 'Combos',
      note: 'Two appams / chapati / Malabar porottas / portion of rice / puttu / idiyappam, served with:',
      groups: [
        {
          title: 'South Indian',
          diet: 'mixed',
          items: [
            { name: 'Kadala / Potato Curry', price: '260' },
            { name: 'Vegetable Stew / Kurma', price: '280' },
            { name: 'Paneer Masala', price: '320' },
            { name: 'Egg Curry (One Egg)', price: '290' },
            { name: 'Chicken Stew / Curry', price: '320' },
            { name: 'Fish Curry', price: '380' },
            { name: 'Mutton Curry', price: '450' },
            { name: 'Prawn Curry', price: '499' },
          ],
        },
        {
          title: 'North Indian',
          diet: 'mixed',
          items: [
            { name: 'Rajma / Chole / Kadhi Rice or Chapati', price: '199' },
            { name: 'Paneer Rice / Chapati', price: '230' },
          ],
        },
      ],
    },
    {
      name: 'Kothu & Rolls',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Veg Kothu-Porotta', price: '210' },
            { name: 'Egg / Chicken Kothu-Porotta', price: '230 / 299' },
            { name: 'Veg / Paneer Roll', price: '160 / 180' },
            { name: 'Egg Roll', price: '180' },
            { name: 'Chicken / Egg Chicken Roll', price: '199 / 220' },
          ],
        },
      ],
    },
    {
      name: 'Burgers, Sandwiches & Snacks',
      groups: [
        {
          diet: 'mixed',
          items: [
            { name: 'Belly Burger (Veg / Chicken)', price: '160 / 190', desc: 'Served with fries', best: true },
            { name: 'Grilled Sandwich (Veg / Paneer / Chicken)', price: '150 / 170 / 180' },
            { name: 'French Fries', price: '100' },
            { name: 'Bread Pakoda', price: '60' },
            { name: 'Gol Gappe: Water (5 pc) / Dahi (6 pc)', price: '60 / 150' },
            { name: 'Bhalla Papdi / Dahi Bhalla / Papdi Chaat', price: '130' },
          ],
        },
      ],
    },
    {
      name: 'Accompaniments & Beverages',
      groups: [
        {
          title: 'Breads & Rice',
          diet: 'veg',
          items: [
            { name: 'Appam / Malabar Porotta', price: '50' },
            { name: 'Chapati', price: '40' },
            { name: 'Kerala / White Rice', price: '150 / 130' },
            { name: 'Idiyappam / Puttu', price: '160' },
          ],
        },
        {
          title: 'Beverages & Desserts',
          diet: 'veg',
          items: [
            { name: 'Filter Coffee / Tea', price: '90 / 70' },
            { name: 'Payasam', price: '160' },
            { name: 'Gulab Jamun (2 pcs)', price: '110' },
            { name: 'Fresh Lime Juice / Soda', price: '80 / 120' },
            { name: 'Fruit Shakes (Tender Coconut / Custard Apple / Chikoo)', price: '180' },
            { name: 'Cold Coffee / Lassi', price: '160 / 180' },
            { name: 'Buttermilk / Soft Drinks / Water', price: '120 / 70 / 30' },
          ],
        },
      ],
    },
  ],
}

export const MENUS: Menu[] = [saket, saidulajab, vasantKunj]

export function getMenu(slug: string) {
  return MENUS.find((m) => m.slug === slug)
}
