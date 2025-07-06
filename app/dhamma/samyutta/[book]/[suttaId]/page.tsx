import { getSuttaData } from '@/utils/helpers';
import { isISuttaData } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../../components/SuttaPageContent';

interface SamyuttaSuttaPageProps {
  params: {
    bookNumber: number;
    suttaId: number;
  };
}

export default async function SamyuttaSuttaPage({ params }: SamyuttaSuttaPageProps) {
  const { bookNumber, suttaId } = await params;
  if (!Number.isInteger(bookNumber) || !Number.isInteger(suttaId) || bookNumber < 1 || bookNumber > 56 || suttaId < 1) {
    return <p>La ressource que vous demandez n'existe pas</p>;
  }
  try {
    const suttaData = getSuttaData('samyutta', String(bookNumber), String(suttaId));
    if (!suttaData) {
      throw new Error(`File containing data for SN ${bookNumber}.${suttaId} unavailable`);
    }
    if (!isISuttaData(suttaData)) {
      throw new Error(`Data structure in SN ${bookNumber}.${suttaId} doesn't match ISuttaCardData interface`);
    }
    if (suttaData && isISuttaData(suttaData)) {
      return (
        <>
          <p className="breadcrumbs">
            <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/samyutta">SN</Link>
            {' > '} <Link href="/dhamma/samyutta">SN {bookNumber}</Link> {' > '} SN {bookNumber}.{suttaId}
          </p>
          <SuttaPageContent suttaData={suttaData} />
        </>
      );
    }
  } catch (error) {
    console.error(`Failed to load sutta data from samyutta/${bookNumber}/${suttaId}:`, error);
    return <p>Soutta non trouvé</p>;
  }
}
