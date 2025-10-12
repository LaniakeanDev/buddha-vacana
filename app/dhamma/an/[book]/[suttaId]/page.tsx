// import { getSuttaData } from '@/utils/helpers';
// import { isISuttaData } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import { pageSuttaDataFetcher } from '@/utils/helpers';

interface AnguttaraSuttaPageProps {
  params: {
    book: string;
    suttaId: string;
  };
}

export default async function AnguttaraSuttaPage({ params }: AnguttaraSuttaPageProps) {
  const { book, suttaId } = await params;
  const data = pageSuttaDataFetcher('an', suttaId, book);
  if (!data.success) return <GraciousFail message={data.errorMessage} />;
  // if (!Number.isInteger(+book) || !Number.isInteger(+suttaId) || +book < 1 || +book > 12 || +suttaId < 1) {
  //   return <GraciousFail message="La ressource que vous demandez n'existe pas" />;
  // }
  // try {
  //   const suttaData = getSuttaData('an', suttaId, book);
  //   if (!suttaData) {
  //     throw new Error(`File containing data for AN ${book}.${suttaId} unavailable`);
  //   }
  //   if (!isISuttaData(suttaData)) {
  //     throw new Error(`Data structure in AN ${book}.${suttaId} doesn't match ISuttaCardData interface`);
  //   }
  //   if (suttaData && isISuttaData(suttaData)) {
  return (
    <>
      <p className="breadcrumbs">
        <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/an">AN</Link>
        {' > '} <Link href={`/dhamma/an${book}`}>AN {book}</Link> {' > '} AN {book}.{suttaId}
      </p>
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
  //   }
  // } catch (error) {
  //   console.error(`Failed to load sutta data from an/${book}/${suttaId}:`, error);
  //   return <GraciousFail message="Soutta non trouvé" />;
  // }
}
