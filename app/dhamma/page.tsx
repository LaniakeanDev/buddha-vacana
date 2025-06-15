import NikayaCard from './components/NikayaCard';
import { nikayaCardsData } from './content';

export default function Dhamma() {
  return (
    <main className="pb-32">
      <div className="w-full grid place-items-center">
        <div className="w-[90vw] max-w-3xl mb-16">
          <h1 className="font-semibold text-4xl md:!text-6xl text-center !text-(--page-title) mt-4 mb-8">Dhamma</h1>
          <p className="xs:text-justify mb-4 indent-4">
            Le terme « Dhamma » recouvre plusieurs significations, dont celles d'« Enseignement » et de « Loi de la
            Nature ». Dans ce dernier sens, il désigne les lois universelles et incontournables qui régissent
            l'existence de tous les êtres vivants, à l'instar des lois fondamentales de la physique.
          </p>
          <p className="xs:text-justify mb-4 indent-4">
            Le Dhamma représente ainsi l'enseignement qui expose les lois primordiales de notre existence, ainsi que la
            manière de les utiliser à notre avantage afin d'éliminer l'insatisfaction et de se libérer des souffrances
            inhérentes à la condition humaine.
          </p>
          <p className="xs:text-justify indent-4">
            Parmi tout ce qui nous est accessible aujourd'hui, les enseignements qui se rapprochent le plus de la parole
            même du Bouddha se trouvent dans les cinq collections qui suivent.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        {nikayaCardsData.map((card, idx) => (
          <NikayaCard
            titlePl={card.titlePl}
            titleFr={card.titleFr}
            description={card.description}
            count={card.count}
            short={card.short}
            key={`nikaya-card-${String(idx)}`}
          />
        ))}
      </div>
    </main>
  );
}
