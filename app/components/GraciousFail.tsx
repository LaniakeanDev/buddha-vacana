import BVLogo from '@/public/assets/svg/bv-logo.svg';
import { BVSVGAsset } from './BVAsset';

interface GraciousFailProps {
  message: string;
}

export default function GraciousFail({ message }: GraciousFailProps) {
  return (
    <main className="w-full flex flex-row gap-32 justify-center items-center py-16 min-h-[50vh]">
      <BVSVGAsset
        SVGAsset={BVLogo}
        alt="Logo représentant une roue du Dhamma dans un lotus"
        containerClassName="w-52 h-52"
      />
      <div className="flex flex-col items-center gap-8">
        <p>{message}</p>
        <p>Retour à l'accueil</p>
      </div>
    </main>
  );
}
