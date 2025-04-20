import { BVSVGAsset } from './BVAsset';
import ReadingTimeLengthIcon from '@/public/assets/svg/reading-time-length.svg';

export default function BVNewSuttaCard({ paliTitle, frTitle, ref, description, date, timeLength }: UINewSuttaCard) {
  return (
    <div className="w-[466px] h-[242px] rounded-lg px-3 py-2 drop-shadow-lg drop-shadow-black/25 bg-bvlightgrey hover:bg-bvmediumgrey cursor-pointer flex flex-col">
      <p className="w-full text-right text-bvmediumgrey">{date.getFullYear()}</p>
      <p className="font-bold text-xl">{`${paliTitle} Sutta`}</p>
      <div className="w-full flex flex-row gap-7 items-center justify-start">
        <p className="font-bold">{frTitle}</p>
        <p>{ref}</p>
      </div>
      <p>{description}</p>
      <div className="flex flex-row gap-2 items-center">
        <BVSVGAsset SVGAsset={ReadingTimeLengthIcon} assetClassName="w-3.5 h-3.5" />
        <p>{timeLength}</p>
      </div>
    </div>
  );
}
