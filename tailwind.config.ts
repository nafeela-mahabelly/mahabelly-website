import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep red — used for CTAs, active states and small accents only
        red: {
          DEFAULT: '#c32025',
          dark:    '#9e1a1e',
          mid:     '#d42b30',
          light:   '#e05257',
        },
        // Near-black — dark sections, footer, headings
        ink: {
          DEFAULT: '#151311',
          soft:    '#211d19',
          900:     '#100e0c',
        },
        // Warm ivory — primary light background
        cream: {
          DEFAULT: '#f4ecd8',
          deep:    '#ede0c0',
          soft:    '#faf5e9',
        },
        // Warm sand — secondary light background
        sand:  '#e8dcc0',
        // Subtle gold — premium punctuation, dividers, hairlines
        gold: {
          DEFAULT: '#b98b34',
          light:   '#d9b464',
          pale:    '#e7d7ac',
        },
        // Body text
        charcoal: {
          DEFAULT: '#2a2521',
          soft:    '#5a524a',
          mute:    '#8a8074',
        },
        // Kerala green — veg markers / botanical accents (used sparingly)
        leaf: '#3f6b3a',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif:   ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.04' }],
        '8xl': ['6rem',   { lineHeight: '1' }],
        '9xl': ['8rem',   { lineHeight: '1' }],
      },
      letterSpacing: {
        widest: '0.22em',
        ultra:  '0.34em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease forwards',
        'fade-in':   'fadeIn 1s ease forwards',
        'ken-burns': 'kenBurns 22s ease-in-out infinite alternate',
        'marquee':   'marquee 38s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kenBurns: {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.09)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
