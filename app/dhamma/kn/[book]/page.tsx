import PageWrapper from '../../components/PageWrapper';
import SubNikayaSuttaList from '../../components/subnikaya-sutta-list';
import { KNPresentationMap } from '../../content';
import BreadCrumbs from '@/app/components/breadcrumbs';
import DhammaHeader from '@/app/components/header';

interface KNParams {
  params: Promise<{
    book: TknBooks;
  }>;
}

export default async function KNBookPage({ params }: KNParams) {
  const { book } = await params;
  const presentationData = KNPresentationMap[book];
  return (
    <>
      <DhammaHeader>
        <BreadCrumbs basket="Dhamma" nikaya="kn" book={book} />
      </DhammaHeader>
      <PageWrapper data={presentationData}>
        <SubNikayaSuttaList nikaya="kn" book={book} />
      </PageWrapper>
    </>
  );
}
