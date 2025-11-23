import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import { pageSuttaDataFetcher } from '@/utils/helpers';
import BreadCrumbs from '@/app/components/breadcrumbs';
import DhammaHeader from '@/app/components/header';

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
      <DhammaHeader>
        <BreadCrumbs basket="Dhamma" nikaya="kn" book={book} suttaId={suttaId} />
      </DhammaHeader>
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
}
