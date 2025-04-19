import type { Metadata } from 'next';
import './globals.css';
import { dejaVuSans } from './utils/fonts';

export const metadata: Metadata = {
  title: 'Budhha Vacana - La Parole du Bouddha',
  description: 'Traductions de souttas en français',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dejaVuSans.variable}`}>
      <body className="">{children}</body>
    </html>
  );
}
