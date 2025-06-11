import NikayaCard from './components/NikayaCard';
import { nikayaCardsData } from './content';

export default function Dhamma() {
  return (
    <main className="pb-16">
      <div className="w-full grid place-items-center">
        <div className="w-[90vw] max-w-2xl">
          <h1 className="font-bold text-6xl text-center my-4">Dhamma</h1>
          <p className="text-justify mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem quis accusamus obcaecati, hic sit ea
            nisi, est ratione ipsum reprehenderit voluptatibus dolore aspernatur vero fugiat minima laborum itaque
            dolor?
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        {nikayaCardsData.map((card) => (
          <NikayaCard
            titlePl={card.titlePl}
            titleFr={card.titleFr}
            description={card.description}
            count={card.count}
            short={card.short}
          />
        ))}
      </div>
    </main>
  );
}
