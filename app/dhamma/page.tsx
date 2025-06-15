import BVPageTitle from '../components/BVPageTitle';
import NikayaCard from './components/NikayaCard';
import { nikayaPresentationData } from './content';

export default function Dhamma() {
  return (
    <main className="pb-32">
      <div className="w-full grid place-items-center">
        <div className="w-[90vw] max-w-3xl mb-16">
          <BVPageTitle plTitle="Dhamma" frTitle="L'Enseignement" />
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
      <div className="card-list-container">
        {nikayaPresentationData.map((card) => (
          <NikayaCard
            plTitle={card.plTitle}
            frTitle={card.frTitle}
            description={card.description}
            count={card.count}
            short={card.short}
            id={card.id}
            key={card.id}
          />
        ))}
      </div>
    </main>
  );
}
