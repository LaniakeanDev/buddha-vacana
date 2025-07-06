import { getSuttaData } from '@/utils/helpers';
import { isISuttaData } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';

interface AnguttaraSuttaPageProps {
  params: {
    bookNumber: number;
    suttaId: number;
  };
}

export default async function AnguttaraSuttaPage({ params }: AnguttaraSuttaPageProps) {
  const { bookNumber, suttaId } = await params;
  if (!Number.isInteger(bookNumber) || !Number.isInteger(suttaId) || bookNumber < 1 || bookNumber > 12 || suttaId < 1) {
    return <GraciousFail message="La ressource que vous demandez n'existe pas" />;
  }
  try {
    const suttaData = getSuttaData('anguttara', String(bookNumber), String(suttaId));
    if (!suttaData) {
      throw new Error(`File containing data for AN ${bookNumber}.${suttaId} unavailable`);
    }
    if (!isISuttaData(suttaData)) {
      throw new Error(`Data structure in AN ${bookNumber}.${suttaId} doesn't match ISuttaCardData interface`);
    }
    if (suttaData && isISuttaData(suttaData)) {
      return (
        <>
          <p className="breadcrumbs">
            <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/anguttara">AN</Link>
            {' > '} <Link href="/dhamma/anguttara">AN {bookNumber}</Link> {' > '} AN {bookNumber}.{suttaId}
          </p>
          <SuttaPageContent suttaData={suttaData} />
        </>
      );
    }
  } catch (error) {
    console.error(`Failed to load sutta data from anguttara/${bookNumber}/${suttaId}:`, error);
    return <GraciousFail message="Soutta non trouvé" />;
  }
}
