import PageWrapper from '../../components/PageWrapper';
import SubNikayaSuttaList from '../../components/subnikaya-sutta-list';
import { KNPresentationMap } from '../../content';
import BreadCrumbs from '@/app/components/breadcrumbs';

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
      <BreadCrumbs basket="Dhamma" nikaya="kn" book={book} />
      <PageWrapper data={presentationData}>
        <SubNikayaSuttaList nikaya="kn" book={book} />
      </PageWrapper>
    </>
  );
}
