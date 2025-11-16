// import { getSuttaData } from '@/utils/helpers';
// import { isISuttaData, isKNBook, isCorrectKNSuttaId } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import { pageSuttaDataFetcher } from '@/utils/helpers';

interface KhuddakaSuttaPageProps {
  params: Promise<{
    book: TknBooks;
    suttaId: string;
  }>;
}

export default async function KhuddakaSuttaPage({ params }: KhuddakaSuttaPageProps) {
  const { book, suttaId } = await params;
  const data = pageSuttaDataFetcher('kn', suttaId, book);
  if (!data.success) return <GraciousFail message={data.errorMessage} />;
  // if (!isKNBook(book) || !isCorrectKNSuttaId(suttaId, book)) {
  // 	return <GraciousFail message="La ressource que vous demandez n'existe pas" />;
  // }
  // try {
  // 	const suttaData = getSuttaData('kn', book, String(suttaId));
  // 	if (!suttaData) {
  // 		throw new Error(`File containing data for AN ${book}.${suttaId} unavailable`);
  // 	}
  // 	if (!isISuttaData(suttaData)) {
  // 		throw new Error(`Data structure in AN ${book}.${suttaId} doesn't match ISuttaCardData interface`);
  // 	}
  // 	if (suttaData && isISuttaData(suttaData)) {
  return (
    <>
      <p className="breadcrumbs">
        <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/an">AN</Link>
        {' > '} <Link href={`/dhamma/an${book}`}>AN {book}</Link> {' > '} AN {book}.{suttaId}
      </p>
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
  // 	}
  // } catch (error) {
  // 	console.error(`Failed to load sutta data from kn/${book}/${suttaId}:`, error);
  // 	return <GraciousFail message="Soutta non trouvé" />;
  // }
}
