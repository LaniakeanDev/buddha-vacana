import { BVSVGAsset } from './BVAsset';
import Search from '@/public/assets/svg/search.svg';

interface BVSearchbarProps {
  className?: string;
}

export default function BVSearchbar({ className }: BVSearchbarProps) {
  return (
    <div
      className={`border-2 border-bvrobe-dark rounded-2xl w-[210px] h-[34px] bg-white z-10 flex flex-row items-center ${className}`}
    >
      <input type="text" className="w-4/5" />
      <div className="w-0 h-[22px] border-l-1 border-bvrobe-dark mr-2" />
      <BVSVGAsset SVGAsset={Search} assetClassName="w-5 h-5 translate-y-0.5" />
    </div>
  );
}
