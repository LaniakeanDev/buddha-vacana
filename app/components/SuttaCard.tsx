import CardContent from './CardContent';
import CardIdentifier from './CardIdentifier';
import HourglassIcon from '@/public/assets/svg/hourglass.svg';
import HourglassIconLightEnv from '@/public/assets/svg/hourglass-lightenv.svg';
import TranslatorIcon from '@/public/assets/svg/sutta/translator.svg';
import TranslatorIconLightEnv from '@/public/assets/svg/sutta/translator-lightenv.svg';
import Link from 'next/link';

export default function SuttaCard({
  plTitle,
  frTitle,
  description,
  identifier,
  id,
  translator,
  readingTime,
  // themes,
  // similes,
  // tags
}: IDisplaySuttaCardData) {
  const nikayaOrKNBook = identifier.split(' ')[0].toLowerCase();
  const pathSegment =
    nikayaOrKNBook === 'an' || nikayaOrKNBook === 'sn' ? identifier.split(' ')[1].split('.')[0] : nikayaOrKNBook;
  return (
    <Link href={`${pathSegment}/${id}`} className="card">
      <CardIdentifier content={identifier} className="!w-fit" />
      <CardContent plTitle={plTitle} frTitle={frTitle} description={description} />
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <TranslatorIcon className="w-5 h-5 translate-y-[-2px] show-on-dark" />
          <TranslatorIconLightEnv className="w-5 h-5 translate-y-[-2px] hide-on-dark" />
          <p className="text-sm">{translator}</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <HourglassIcon className="w-5 h-5 show-on-dark" />
          <HourglassIconLightEnv className="w-5 h-5 hide-on-dark" />
          <p className="text-sm">{readingTime} mn</p>
        </div>
      </div>
    </Link>
  );
}
