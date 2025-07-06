// import PageHead from '@/app/components/PageHead';
// import SuttaCard from '@/app/components/SuttaCard';
// import { nikayaPresentationData } from '@/app/dhamma/content';

interface NestedNikayaPageContentProps {
  data: boolean;
  nikaya: NikayaEnum;
}

export default function NestedNikayaPageContent({ data, nikaya }: NestedNikayaPageContentProps) {
  return <div>{data ? nikaya : `${nikaya}a`}</div>;
}
