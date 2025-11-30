import { pageSuttaDataFetcher } from '@/utils/helpers';
import SuttaPageContent from '../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import DhammaHeader from '@/app/components/header';
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
      <DhammaHeader>
        <BreadCrumbs basket="Dhamma" nikaya="mn" suttaId={suttaId} />
      </DhammaHeader>
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
}
