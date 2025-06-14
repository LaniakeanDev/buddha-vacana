import { BVSVGAsset } from '../BVAsset';
import BVLogo from '@/public/assets/svg/bv-logo.svg';
import ThemeToggle from '../BVThemeToggle';
import Link from 'next/link';

export default function BVHeader() {
  return (
    <header className="relative w-full h-24 bg-default grid place-items-start">
      <ThemeToggle className="absolute top-2 right-2 sm:top-4 sm:right-4" />
      <Link href="/" className="absolute top-0 left-0 h-full xs:!pl-2 sm:!pl-4 flex flex-row items-center gap-4">
        <BVSVGAsset
          SVGAsset={BVLogo}
          alt="Logo représentant une roue du Dhamma dans un lotus"
          containerClassName="w-20 h-20"
        />
        <h1>
          <p className="text-2xl lg:!text-3xl text-gold font-bold !text-(--maintitle-pl)">Buddha Vacana</p>
          <p className="text-[16.75px] lg:!text-[21px] font-bold  !text-(--maintitle-fr)">La parole du Bouddha</p>
        </h1>
      </Link>
    </header>
  );
}
