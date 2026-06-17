import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kerala: {
          green:         '#c32025',   // primary brand red
          'green-dark':  '#111111',   // near-black (dark sections, footer)
          'green-mid':   '#d42b30',   // mid red (hover states)
          'green-light': '#e05257',   // light red
          gold:          '#c32025',   // accent — unified with primary red
          'gold-light':  '#e5e7eb',   // light cool-gray (hover/border accents)
          'gold-pale':   '#ede0c0',   // warm beige (subtle fills)
          cream:         '#ede0c0',   // main light background
          'cream-dark':  '#e5e7eb',   // secondary background (cool gray)
          charcoal:      '#111111',   // main body text
          'charcoal-mid':'#4A4A4A',   // secondary text
          mist:          '#9ca3af',   // muted/hint text
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif:   ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem',   { lineHeight: '1' }],
        '9xl': ['8rem',   { lineHeight: '1' }],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra:  '0.35em',
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease forwards',
        'fade-in':   'fadeIn 1s ease forwards',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kenBurns: {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
