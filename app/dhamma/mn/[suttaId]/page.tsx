// import { getSuttaData, pageSuttaDataFetcher } from '@/utils/helpers';
import { pageSuttaDataFetcher } from '@/utils/helpers';
// import { isISuttaData } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';

interface MajjhimaSuttaPageProps {
  params: Promise<{
    suttaId: string;
  }>;
}

export default async function MajjhimaSuttaPage({ params }: MajjhimaSuttaPageProps) {
  const { suttaId } = await params;
  const data = pageSuttaDataFetcher('mn', suttaId);
  if (!data.success) return <GraciousFail message={data.errorMessage} />;
  // const id = Number(suttaId);
  // if (!Number.isInteger(id) || id < 1 || id > 152) {
  //   return <GraciousFail message="La ressource que vous demandez n'existe pas" />;
  // }
  // try {
  //   const suttaData = getSuttaData('mn', id);
  //   if (!suttaData) {
  //     throw new Error(`File containing data for MN ${suttaId} unavailable`);
  //   }
  //   if (!isISuttaData(suttaData)) {
  //     throw new Error(`Data structure in MN ${suttaId} doesn't match ISuttaCardData interface`);
  //   }
  //   if (suttaData && isISuttaData(suttaData)) {
  return (
    <>
      <p className="breadcrumbs">
        <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/mn">MN</Link>
        {' > '} MN {String(suttaId)}
      </p>
      <SuttaPageContent suttaData={data.suttaData} />
    </>
  );
  //   }
  // } catch (error) {
  //   console.error(`Failed to load sutta data from MN ${suttaId}:`, error);
  //   return <GraciousFail message="Soutta non trouvé" />;
  // }
}
