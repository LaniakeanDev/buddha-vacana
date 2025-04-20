import Image from 'next/image';
import Search from '@/public/assets/svg/search.svg';
import { BVSVGAsset } from './BVAsset';

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
      <div className="border-2 border-bvrobe-dark rounded-2xl w-[210px] h-[34px] bg-white absolute top-4 right-4 z-10 flex flex-row items-center">
        <input type="text" className="w-4/5" />
        <div className="w-0 h-[22px] border-l-1 border-bvrobe-dark mr-2" />
        <BVSVGAsset SVGAsset={Search} assetClassName="w-5 h-5 translate-y-0.5" />
      </div>
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
