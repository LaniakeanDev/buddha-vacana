import { pageSuttaDataFetcher } from '@/utils/helpers';
import SuttaPageContent from '../../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import BreadCrumbs from '@/app/components/breadcrumbs';
import DhammaHeader from '@/app/components/header';

interface SamyuttaSuttaPageProps {
  params: Promise<{
    book: OneToFiftySix;
    suttaId: string;
  }>;
}

export default async function SamyuttaSuttaPage({ params }: SamyuttaSuttaPageProps) {
  const { book, suttaId } = await params;
  const data = pageSuttaDataFetcher('sn', suttaId, book);
  if (!data.success) return <GraciousFail message={data.errorMessage} />;
  return (
    <>
      <DhammaHeader>
        <BreadCrumbs basket="Dhamma" nikaya="sn" book={book} suttaId={suttaId} />
      </DhammaHeader>
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
}
