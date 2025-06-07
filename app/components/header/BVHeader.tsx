import { BVSVGAsset } from '../BVAsset';
import BVLogo from '@/public/assets/svg/bv-logo.svg';
import ThemeToggle from '../BVThemeToggle';

export default function BVHeader() {
  return (
    <header className="relative w-full xs:h-32 sm:h-36 md:h-40 lg:h-48 bg-default grid place-items-center">
      <ThemeToggle className="absolute top-2 right-2 sm:top-4 sm:right-4" />
      <div className="absolute top-0 left-0 h-full pl-2 sm:pl-4 grid place-items-center">
        <BVSVGAsset
          SVGAsset={BVLogo}
          alt="Logo représentant une roue du Dhamma dans un lotus"
          containerClassName="w-24 h-24 sm:w-32 sm:h-32"
        />
      </div>
      <h1 className="translate-x-8 sm:translate-x-10 lg:translate-x-0">
        {/* <p className="sm:text-4xl md:text-5xl lg:text-6xl text-gold font-bold !text-(--maintitle-pl)">Buddha Vacana</p> */}
        <p className="text-4xl sm:text-5xl lg:text-6xl text-gold font-bold !text-(--maintitle-pl)">Buddha Vacana</p>
        {/* <p className="sm:text-[25.25px] md:text-[33.75px] lg:text-[42px] font-bold  !text-(--maintitle-fr)">La parole du Bouddha</p> */}
        <p className="text-[25.25px] sm:text-[33.75px] lg:text-[42px] font-bold  !text-(--maintitle-fr)">
          La parole du Bouddha
        </p>
      </h1>
    </header>
  );
}
