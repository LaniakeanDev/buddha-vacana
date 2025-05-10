import { BVSVGAsset } from './BVAsset';

export default function BVToolCard({ svgAsset: SVGAsset, title, tagline }: UIToolCard) {
  return (
    <div className="w-64 h-64 rounded-lg px-2 pt-12 pb-9 drop-shadow-lg drop-shadow-black/25 bg-base-100 hover:bg-bvmediumgrey cursor-pointer">
      <div className="flex flex-col items-center gap-4">
        <BVSVGAsset SVGAsset={SVGAsset} alt={title} containerClassName="w-20 h-20" />
        <p className="font-bold text-xl">{title}</p>
        <p className="text-center">{tagline}</p>
      </div>
    </div>
  );
}
