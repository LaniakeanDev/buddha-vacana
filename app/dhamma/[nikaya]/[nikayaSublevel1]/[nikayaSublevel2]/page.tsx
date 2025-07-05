import { isISuttaData } from '@/utils/typeguards';
import { getSuttaData, NIKAYA_SHORT_MAP } from '@/utils/helpers';
import SuttaPageContent from '@/app/dhamma/components/SuttaPageContent';
import Link from 'next/link';

interface DeepSuttaPageProps {
  params: {
    nikaya: NikayaEnum;
    nikayaSublevel1: string; // book or suttaId
    nikayaSublevel2: string; // suttaId
  };
}

export default async function DeepSuttaPage({ params }: DeepSuttaPageProps) {
  const { nikaya, nikayaSublevel1, nikayaSublevel2 } = await params;
  const suttaData = getSuttaData(nikaya, nikayaSublevel1, nikayaSublevel2);
  if (suttaData && isISuttaData(suttaData)) {
    return (
      <>
        <p className="breadcrumbs">
          <Link href="/dhamma">Dhamma</Link> {'>'} <Link href={`/dhamma/${nikaya}`}>{NIKAYA_SHORT_MAP[nikaya]}</Link>{' '}
          {'>'} <Link href={`/dhamma/${nikaya}/${nikayaSublevel1}`}>{nikayaSublevel1}</Link> {'>'}{' '}
          {/* NIKAYA_SHORT_MAP[nikaya] */} {nikayaSublevel2}
        </p>
        <SuttaPageContent suttaData={suttaData} />
      </>
    );
  }
  return <p>Soutta non trouvé</p>;
}
