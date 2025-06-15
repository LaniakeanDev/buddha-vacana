import Image from 'next/image';
import BVSearchbar from './BVSearchbar';

export default function BVHero() {
  return (
    <section className="relative w-full h-[700px]">
      <Image
        className="object-cover z-0"
        src="/assets/img/hero-bg.jpg"
        alt="Arbre entouré de nature"
        sizes="100vw"
        fill
      />
      <BVSearchbar className="absolute top-4 right-4" />
      <div className="relative z-10 ml-36 pt-32 w-4/5">
        <div className="p-4 w-[472px]">
          <p className="text-justify mb-4">
            Il se peut que certains d'entre vous se disent : “C'en est fini de la parole de l'Enseignant. Nous n'avons
            plus d'Enseignant.” Mais ils ne devraient pas penser cela, car ce que j'ai déclaré et fait connaître comme
            le <span className="font-bold text-bvprimary-green">Dhamma</span> et le{' '}
            <span className="font-bold text-bvprimary-green">Vinaya</span> sera votre enseignant une fois que je serai
            parti.
          </p>
          <p className="text-justify mb-4">
            siyā kho panānanda, tumhākaṃ evamassa ‘atītasatthukaṃ pāvacanaṃ, natthi no satthā’ti. na kho panetaṃ,
            ānanda, evaṃ daṭṭhabbaṃ. yo vo, ānanda, mayā dhammo ca vinayo ca desito paññatto, so vo mamaccayena satthā.
          </p>
          <p className="w-full text-center mb-16">
            — <span className="font-bold text-bvprimary-green">Mahāparinibbāna Sutta</span> —
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between w-[472px]">
            <button className="primary-btn w-[210px]">
              <p>Dhamma</p>
            </button>
            <button className="primary-btn w-[210px]">
              <p>Vinaya</p>
            </button>
          </div>
          <div className="flex flex-row justify-between w-[512px]">
            <button className="primary-btn w-[210px]">
              <p>Nouveautés</p>
            </button>
            <button className="primary-btn w-[210px]">
              <p>Au hasard</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
