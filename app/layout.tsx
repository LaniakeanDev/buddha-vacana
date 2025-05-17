import type { Metadata } from 'next';
import './globals.css';
import { dejaVuSans } from '../utils/fonts';
import BVFooter from './components/BVFooter';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Budhha Vacana - La Parole du Bouddha',
  description: 'Traductions de souttas en Français',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dejaVuSans.variable}`} suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <BVFooter />
      </body>
    </html>
  );
}
