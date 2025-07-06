import { getSuttaData } from '@/utils/helpers';
import { isISuttaData } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../components/SuttaPageContent';

interface MajjhimaSuttaPageProps {
  params: {
    suttaId: number;
  };
}

export default async function MajjhimaSuttaPage({ params }: MajjhimaSuttaPageProps) {
  const { suttaId } = await params;
  if (!Number.isInteger(suttaId) || suttaId < 1 || suttaId > 152) {
    return <p>La ressource que vous demandez n'existe pas</p>;
  }
  try {
    const suttaData = getSuttaData('majjhima', String(suttaId), undefined);
    if (!suttaData) {
      throw new Error(`File containing data for MN ${suttaId} unavailable`);
    }
    if (!isISuttaData(suttaData)) {
      throw new Error(`Data structure in MN ${suttaId} doesn't match ISuttaCardData interface`);
    }
    if (suttaData && isISuttaData(suttaData)) {
      return (
        <>
          <p className="breadcrumbs">
            <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/majjhima">MN</Link>
            {' > '} MN {String(suttaId)}
          </p>
          <SuttaPageContent suttaData={suttaData} />
        </>
      );
    }
  } catch (error) {
    console.error(`Failed to load sutta data from MN ${suttaId}:`, error);
    return <p>Soutta non trouvé</p>;
  }
}
