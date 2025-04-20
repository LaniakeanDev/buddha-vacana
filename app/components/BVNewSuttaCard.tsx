import { BVSVGAsset } from './BVAsset';
import ReadingTimeLengthIcon from '@/public/assets/svg/reading-time-length.svg';

export default function BVNewSuttaCard({
  paliTitle,
  frTitle,
  suttaRef,
  description,
  date,
  timeLength,
}: UINewSuttaCard) {
  return (
    <div className="w-[466px] h-[262px] rounded-lg py-5 drop-shadow-lg drop-shadow-black/25 bg-bvlightgrey hover:bg-bvmediumgrey cursor-pointer flex flex-col">
      <p className="w-full text-right text-bvgreytext text-xs pr-4">
        {date.getDate()} Avril {date.getFullYear() + 543} ({date.getFullYear()})
      </p>
      <div className="px-8">
        <p className="font-bold text-xl py-2">{paliTitle} Sutta</p>
        <div className="w-full flex flex-row gap-7 items-center justify-start">
          <p className="font-bold">{frTitle}</p>
          <p>{suttaRef}</p>
        </div>
        <p className="py-2">{description}</p>
        <div className="flex flex-row gap-2 items-center justify-end">
          <BVSVGAsset SVGAsset={ReadingTimeLengthIcon} assetClassName="w-3.5 h-3.5" />
          <p className="text-xs text-bvgreytext">{timeLength} min</p>
        </div>
      </div>
    </div>
  );
}
