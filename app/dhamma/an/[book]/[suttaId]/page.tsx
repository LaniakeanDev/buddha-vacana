import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import { pageSuttaDataFetcher } from '@/utils/helpers';
import BreadCrumbs from '@/app/components/breadcrumbs';

interface AnguttaraSuttaPageProps {
  params: Promise<{
    book: OneToTwelve;
    suttaId: string;
  }>;
}

export default async function AnguttaraSuttaPage({ params }: AnguttaraSuttaPageProps) {
  const { book, suttaId } = await params;
  const data = pageSuttaDataFetcher('an', suttaId, book);
  if (!data.success) return <GraciousFail message={data.errorMessage} />;
  return (
    <>
      <BreadCrumbs basket="Dhamma" nikaya="an" book={book} suttaId={suttaId} />
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
}
