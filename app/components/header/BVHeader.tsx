import { BVSVGAsset } from '../BVAsset';
import BVLogo from '@/public/assets/svg/bv-logo.svg';
import ThemeToggle from '../BVThemeToggle';
import Link from 'next/link';

export default function BVHeader() {
  return (
    <header className="relative w-full h-16 bg-default grid place-items-start">
      <ThemeToggle className="absolute top-2 right-2 sm:top-4 sm:right-4" />
      <Link href="/" className="absolute top-0 left-0 h-full xs:!pl-2 sm:!pl-4 flex flex-row items-center gap-4">
        <BVSVGAsset
          SVGAsset={BVLogo}
          alt="Logo représentant une roue du Dhamma dans un lotus"
          containerClassName="w-12 h-12"
        />
      </Link>
    </header>
  );
}
