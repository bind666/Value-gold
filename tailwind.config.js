/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-brand-navy',
    'bg-brand-navy-light',
    'bg-brand-gold',
    'bg-brand-gold-dark',
    'bg-brand-gold-light',
    'bg-brand-cream',
    'bg-brand-tan',
    'text-brand-navy',
    'text-brand-gold',
    'text-brand-gold-light',
    'text-brand-cream',
    'text-white',
    'border-brand-gold',
    'border-brand-navy',
    'hover:bg-brand-gold',
    'hover:bg-brand-navy-light',
    'hover:text-brand-gold',
    'hover:text-white',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1f3f6b',
          'navy-light': '#2a5088',
          gold: '#c7a768',
          'gold-dark': '#b5944f',
          'gold-light': '#d4b97e',
          cream: '#f4efe7',
          tan: '#d9c7a3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
