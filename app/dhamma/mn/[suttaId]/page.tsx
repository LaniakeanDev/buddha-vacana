import { pageSuttaDataFetcher } from '@/utils/helpers';
import SuttaPageContent from '../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import BreadCrumbs from '@/app/components/breadcrumbs';

interface MajjhimaSuttaPageProps {
  params: Promise<{
    suttaId: string;
  }>;
}

export default async function MajjhimaSuttaPage({ params }: MajjhimaSuttaPageProps) {
  const { suttaId } = await params;
  const data = pageSuttaDataFetcher('mn', suttaId);
  if (!data.success) return <GraciousFail message={data.errorMessage} />;
  return (
    <>
      <BreadCrumbs basket="Dhamma" nikaya="mn" suttaId={suttaId} />
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
}
