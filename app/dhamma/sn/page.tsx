import PageWrapper from '../components/PageWrapper';
import { nikayaPresentationMap } from '../content';

export default function SamyuttaPage() {
  return (
    <PageWrapper data={nikayaPresentationMap.sn}>
      <div>content</div>
    </PageWrapper>
  );
}
