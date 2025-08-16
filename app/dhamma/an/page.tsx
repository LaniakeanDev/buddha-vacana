import NikayaCard from '../components/NikayaCard';
import PageWrapper from '../components/PageWrapper';
import { nikayaPresentationMap } from '../content';

export default function SamyuttaPage() {
  return (
    <PageWrapper data={nikayaPresentationMap.an}>
      <ul className="card-list-container">
        <NikayaCard
          plTitle="Ekaka Nipāta"
          frTitle="Le livre des énumérations à un seul élément"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque nostrum voluptatem, provident voluptate dolorum error ipsam aperiam quisquam maxime voluptatum nesciunt sunt, natus qui ipsa iste? Delectus, architecto modi."
          count={30}
          identifier="AN 1"
          href="an/1"
          key="an1"
        />
      </ul>
    </PageWrapper>
  );
}
