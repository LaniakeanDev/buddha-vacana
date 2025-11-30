import { BVSVGAsset } from '../BVAsset';
import BVLogo from '@/public/assets/svg/bv-logo.svg';
import ThemeToggle from '../BVThemeToggle';
import Link from 'next/link';

interface DhammaHeaderProps {
  children?: React.ReactNode;
}

export default function DhammaHeader({ children }: DhammaHeaderProps) {
  return (
    <header className="fixed z-20 w-full h-16 bg-default grid place-items-start">
      <ThemeToggle className="absolute top-2 right-2 sm:top-4 sm:right-4" />
      <div className="absolute top-0 left-0 h-full xs:!pl-2 sm:!pl-4 flex flex-row items-center gap-4">
        <Link href="/" className="h-full">
          <BVSVGAsset
            SVGAsset={BVLogo}
            alt="Logo représentant une roue du Dhamma dans un lotus"
            containerClassName="h-full w-12 h-12 grid place-items-center"
          />
        </Link>
        {children}
      </div>
    </header>
  );
}
