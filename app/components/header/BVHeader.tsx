import { BVSVGAsset } from '../BVAsset';
import BVLogo from '@/public/assets/svg/bv-logo.svg';

export default function BVHeader() {
  return (
    <header className="relative w-full h-48 bg-bvdark-green grid place-items-center">
      <div className="absolute top-0 left-0 h-full pl-4 grid place-items-center">
        <BVSVGAsset
          SVGAsset={BVLogo}
          alt="Logo représentant une roue du Dhamma dans un lotus"
          containerClassName="w-32 h-32"
        />
      </div>
      <h1>
        <p className="text-6xl text-gold font-bold">Buddha Vacana</p>
        <p className="text-[42px] text-white font-bold">La parole du Bouddha</p>
      </h1>
    </header>
  );
}
