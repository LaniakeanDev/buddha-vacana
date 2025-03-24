import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '375px',
        xs: '480px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'concerts-notes-dark-cover': 'url(/assets/concerts/concerts-notes-dark-cover-1.png)',
        'contact-notes-dark-cover': 'url(/assets/common/contact-notes-dark-cover.png)',
        'footer-notes-dark-cover': 'url(/assets/common/bg-footer-cover.png)',
        'header-cover': 'url(/assets/header/header-notes-stave-cover.png)',
        'header-cover-xl': 'url(/assets/header/header-notes-stave-cover-xl.png)',
        'header-cover-2xl': 'url(/assets/header/header-notes-stave-cover-2xl.png)',
      },
      colors: {
        gold: '#E5AB07',
        'primary-dark': '#1d1d1b',
        'secondary-dark': '#151513',
        'half-gold': '#f9d87a',
        'tertiary-dark': '#2c2a26',
        'eva-grey': '#898989',
      },
      fontFamily: {
        Bebas_Neue: ['var(--font-bebas-neue)'],
        Galada: ['var(--font-galada)'],
        Poppins: ['var(--font--poppins)'],
      },
      backgroundSize: {
        'full-stretch': '100% 100%',
      },
    },
  },
  plugins: [],
};
export default config;
