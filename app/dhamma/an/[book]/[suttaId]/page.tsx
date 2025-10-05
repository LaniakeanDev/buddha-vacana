import { getSuttaData } from '@/utils/helpers';
import { isISuttaData } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';

interface AnguttaraSuttaPageProps {
  params: {
    book: number;
    suttaId: number;
  };
}

export default async function AnguttaraSuttaPage({ params }: AnguttaraSuttaPageProps) {
  const { book, suttaId } = await params;
  if (!Number.isInteger(+book) || !Number.isInteger(+suttaId) || +book < 1 || +book > 12 || +suttaId < 1) {
    return <GraciousFail message="La ressource que vous demandez n'existe pas" />;
  }
  try {
    const suttaData = getSuttaData('an', book, String(suttaId));
    if (!suttaData) {
      throw new Error(`File containing data for AN ${book}.${suttaId} unavailable`);
    }
    if (!isISuttaData(suttaData)) {
      throw new Error(`Data structure in AN ${book}.${suttaId} doesn't match ISuttaCardData interface`);
    }
    if (suttaData && isISuttaData(suttaData)) {
      return (
        <>
          <p className="breadcrumbs">
            <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/an">AN</Link>
            {' > '} <Link href={`/dhamma/an${book}`}>AN {book}</Link> {' > '} AN {book}.{suttaId}
          </p>
          <SuttaPageContent suttaData={suttaData} />
        </>
      );
    }
  } catch (error) {
    console.error(`Failed to load sutta data from anguttara/${book}/${suttaId}:`, error);
    return <GraciousFail message="Soutta non trouvé" />;
  }
}
