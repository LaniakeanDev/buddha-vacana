import PageWrapper from '../../components/PageWrapper';
import SubNikayaSuttaList from '../../components/subnikaya-sutta-list';
import { KNPresentationMap } from '../../content';

interface KNParams {
  params: {
    book: TknBooks;
  };
}

export default async function KNBookPage({ params }: KNParams) {
  const { book } = await params;
  const presentationData = KNPresentationMap[book];
  return (
    <PageWrapper data={presentationData}>
      <SubNikayaSuttaList nikaya="kn" book={book} />
    </PageWrapper>
  );
}
