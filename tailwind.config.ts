import type { Config } from 'tailwindcss';
// import { dejaVuSans } from './app/utils/fonts';

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
      backgroundImage: {},
      colors: {
        'primary-green': '2E8132',
        'light-green': '4BB41D',
        'robe-semidark': 'AC6B2A',
        'robe-dark': '844114',
        'robe-regular': 'BD7D36',
        'robe-light': 'D38E41',
      },
      fontFamily: {
        dejavusans: ['var(--font-deja-vu-sans)', 'sans-serif'],
      },
      backgroundSize: {
        'full-stretch': '100% 100%',
      },
    },
  },
  plugins: [],
};
export default config;
