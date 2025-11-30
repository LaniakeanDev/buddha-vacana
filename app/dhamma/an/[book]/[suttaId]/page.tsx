import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import { pageSuttaDataFetcher } from '@/utils/helpers';
import BreadCrumbs from '@/app/components/breadcrumbs';
import DhammaHeader from '@/app/components/header';

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
      <DhammaHeader>
        <BreadCrumbs basket="Dhamma" nikaya="an" book={book} suttaId={suttaId} />
      </DhammaHeader>
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
}
