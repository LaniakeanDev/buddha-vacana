import SuttaPageContent from '../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';
import { pageSuttaDataFetcher } from '@/utils/helpers';
import BreadCrumbs from '@/app/components/breadcrumbs';

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
      <BreadCrumbs basket="Dhamma" nikaya="dn" suttaId={suttaId} />
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
}
