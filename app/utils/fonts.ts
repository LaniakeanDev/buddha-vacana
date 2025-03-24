import localFont from 'next/font/local';

const dejaVuSans = localFont({
  src: [
    {
      path: '../../public/fonts/DejaVuSans.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/DejaVuSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/DejaVuSans-Oblique.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/DejaVuSans-BoldOblique.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-deja-vu-sans',
});

export { dejaVuSans };
