import { getSuttaData } from '@/utils/helpers';
import { isISuttaData } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';

interface SamyuttaSuttaPageProps {
  params: {
    book: number;
    suttaId: number;
  };
}

export default async function SamyuttaSuttaPage({ params }: SamyuttaSuttaPageProps) {
  const { book, suttaId } = await params;
  console.log({ book });
  if (!Number.isInteger(+book) || !Number.isInteger(+suttaId) || +book < 1 || +book > 56 || +suttaId < 1) {
    return <GraciousFail message="La ressource que vous demandez n'existe pas" />;
  }
  try {
    const suttaData = getSuttaData('sn', suttaId, String(book));
    if (!suttaData) {
      throw new Error(`File containing data for SN ${book}.${suttaId} unavailable`);
    }
    if (!isISuttaData(suttaData)) {
      throw new Error(`Data structure in SN ${book}.${suttaId} doesn't match ISuttaCardData interface`);
    }
    if (suttaData && isISuttaData(suttaData)) {
      return (
        <>
          <p className="breadcrumbs">
            <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/sn">SN</Link>
            {' > '} <Link href={`/dhamma/sn/${book}`}>SN {book}</Link> {' > '} SN {book}.{suttaId}
          </p>
          <SuttaPageContent suttaData={suttaData} />
        </>
      );
    }
  } catch (error) {
    console.error(`Failed to load sutta data from samyutta/${book}/${suttaId}:`, error);
    return <GraciousFail message="Soutta non trouvé" />;
  }
}
