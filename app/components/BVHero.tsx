import Image from 'next/image';
import BVSearchbar from './BVSearchbar';
import NewContentIcon from '@/public/assets/svg/hero/new-content.svg';
import DiceIcon from '@/public/assets/svg/hero/random.svg';

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
      <div className="relative z-10 ml-10 xl:ml-36 pt-16 w-4/5">
        <div className="p-8 w-[472px] backdrop-blur-xs bg-[#fcf6ce]/10 mb-8 rounded-xl">
          <p className="text-justify !text-(--bvdarktext) mb-4">
            Il se peut que certains d'entre vous se disent : “C'en est fini de la parole de l'Enseignant. Nous n'avons
            plus d'Enseignant.” Mais ils ne devraient pas penser cela, car ce que j'ai déclaré et fait connaître comme
            le <span className="font-bold !text-(--bvprimary-green)">Dhamma</span> et le{' '}
            <span className="font-bold !text-(--bvprimary-green)">Vinaya</span> sera votre enseignant une fois que je
            serai parti.
          </p>
          <p className="text-justify !text-(--bvdarktext) mb-4">
            siyā kho panānanda, tumhākaṃ evamassa ‘atītasatthukaṃ pāvacanaṃ, natthi no satthā’ti. na kho panetaṃ,
            ānanda, evaṃ daṭṭhabbaṃ. yo vo, ānanda, mayā dhammo ca vinayo ca desito paññatto, so vo mamaccayena satthā.
          </p>
          <p className="w-full text-center !text-(--bvdarktext)">
            — <span className="font-bold !text-(--bvprimary-green)">Mahāparinibbāna Sutta</span> —
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between w-[472px]">
            <button className="primary-btn w-[210px]">
              <p className="!text-(--bvwhite)">Dhamma</p>
            </button>
            <button className="primary-btn w-[210px]">
              <p className="!text-(--bvwhite)">Vinaya</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 absolute bottom-4 right-10 xl:right-[20vw] 3xl:right-[30vw]">
        <button className="flex flex-col items-center bg-black/25 3xl:bg-black/35 rounded-4xl p-4 w-32 h-32">
          <NewContentIcon />
          <p className="!text-(--bvwhite) mt-2">Nouveautés</p>
        </button>
        <button className="flex flex-col items-center bg-black/25 rounded-4xl p-4 w-32 h-32">
          <DiceIcon />
          <p className="!text-(--bvwhite) mt-2">Au hasard</p>
        </button>
      </div>
    </section>
  );
}
