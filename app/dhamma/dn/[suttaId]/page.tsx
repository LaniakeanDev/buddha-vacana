import SuttaPageContent from '../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import { pageSuttaDataFetcher } from '@/utils/helpers';
import BreadCrumbs from '@/app/components/breadcrumbs';
import DhammaHeader from '@/app/components/header';

interface DighaSuttaPageProps {
  params: Promise<{
    suttaId: string;
  }>;
}

export default async function DighaSuttaPage({ params }: DighaSuttaPageProps) {
  const { suttaId } = await params;
  const data = pageSuttaDataFetcher('dn', suttaId);
  if (!data.success) return <GraciousFail message={data.errorMessage} />;
  return (
    <>
      <DhammaHeader>
        <BreadCrumbs basket="Dhamma" nikaya="dn" suttaId={suttaId} />
      </DhammaHeader>
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
}
