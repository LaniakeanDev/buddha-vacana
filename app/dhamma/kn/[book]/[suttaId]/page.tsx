import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import { pageSuttaDataFetcher } from '@/utils/helpers';
import BreadCrumbs from '@/app/components/breadcrumbs';

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
  return (
    <>
      <BreadCrumbs basket="Dhamma" nikaya="kn" book={book} suttaId={suttaId} />
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
}
