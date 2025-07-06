import { isISuttaData } from '@/utils/typeguards';
import SuttaPageContent from '../../components/SuttaPageContent';
import { getSuttaData, NIKAYA_SHORT_MAP } from '@/utils/helpers';
import Link from 'next/link';

interface FlatSuttaPageProps {
  params: {
    nikaya: NikayaEnum;
    nikayaSublevel1: string; // suttaId
  };
}

export default async function FlatSuttaPage({ params }: FlatSuttaPageProps) {
  const { nikaya, nikayaSublevel1 } = params;
  const suttaData = getSuttaData(nikaya, nikayaSublevel1, undefined);
  if (suttaData && isISuttaData(suttaData)) {
    return (
      <>
        <p className="breadcrumbs">
          <Link href="/dhamma">Dhamma</Link> {'>'} <Link href={`/dhamma/${nikaya}`}>{NIKAYA_SHORT_MAP[nikaya]}</Link>{' '}
          {'>'} {/* NIKAYA_SHORT_MAP[nikaya] */} {nikayaSublevel1}
        </p>
        <SuttaPageContent suttaData={suttaData} />
      </>
    );
  }
  return <p>Soutta non trouvé</p>;
}
