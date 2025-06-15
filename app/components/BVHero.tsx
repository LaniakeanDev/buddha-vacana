import Image from 'next/image';
import BVSearchbar from './BVSearchbar';
import NewContentIcon from '@/public/assets/svg/hero/new-content.svg';
import DiceIcon from '@/public/assets/svg/hero/random.svg';
import Link from 'next/link';

export default function BVHero() {
  return (
    <section className="relative w-full h-[820px] 2xs:!h-[850px] xs:!h-[800px] md:!h-[750px] lg:!h-[700px]">
      <Image
        className="object-cover z-0 hidden md:!block"
        src="/assets/img/hero-bg.jpg"
        alt="Arbre entouré de nature"
        sizes="100vw"
        fill
      />
      <Image
        className="object-cover z-0 block md:!hidden"
        src="/assets/img/hero-bg-sm.jpg"
        alt="Arbre entouré de nature"
        sizes="100vw"
        fill
      />
      <BVSearchbar className="absolute top-4 right-4" />
      <div className="relative w-[95%] xs:!w-[90%] z-10 m-auto md:ml-10 xl:ml-36 pt-16 sm:w-4/5 flex flex-col items-center md:items-start">
        {/* <div className="xs:!mt-4 sm:mt-0 p-4 2xs:!p-8 max-w-[472px] backdrop-blur-xs bg-[#fcf6ce]/60 md:!bg-[#fcf6ce]/40 xl:!bg-[#fcf6ce]/20 2xl:!bg-[#fcf6ce]/0 mb-2 xs:!mb-8 rounded-xl"> */}
        <div className="xs:!mt-4 sm:mt-0 !p-4 2xs:!p-8 max-w-[472px] backdrop-blur-xs bg-gradient-to-b from-[#fcf6ce]/60 to-[#feedaf]/60 xs:!to-[#ffedb8]/60 xl:!bg-[#fcf6ce]/20 2xl:!bg-[#fcf6ce]/0 mb-8 rounded-xl">
          <p className="text-justify !text-(--darktext) mb-4">
            Il se peut que certains d'entre vous se disent : “C'en est fini de la parole de l'Enseignant. Nous n'avons
            plus d'Enseignant.” Mais ils ne devraient pas penser cela, car ce que j'ai déclaré et fait connaître comme
            le <span className="font-bold !text-(--primary-green)">Dhamma</span> et le{' '}
            <span className="font-bold !text-(--primary-green)">Vinaya</span> sera votre enseignant une fois que je
            serai parti.
          </p>
          <p className="text-justify !text-(--darktext) mb-4">
            siyā kho panānanda, tumhākaṃ evamassa ‘atītasatthukaṃ pāvacanaṃ, natthi no satthā’ti. na kho panetaṃ,
            ānanda, evaṃ daṭṭhabbaṃ. yo vo, ānanda, mayā dhammo ca vinayo ca desito paññatto, so vo mamaccayena satthā.
          </p>
          <p className="w-full text-center !text-(--darktext)">
            — <span className="font-bold !text-(--primary-green)">Mahāparinibbāna Sutta</span> —
          </p>
        </div>
        <div className="w-full grid  place-items-center max-w-[472px]">
          <div className="flex flex-row gap-8 justify-center">
            <Link href="/dhamma">
              <button className="primary-btn w-32 xs:!w-48">
                <p className="!text-(--white) text-lg xs:!text-2xl">Dhamma</p>
              </button>
            </Link>
            <button className="primary-btn w-32 xs:!w-48">
              <p className="!text-(--white) text-lg xs:!text-2xl">Vinaya</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center mt-8 sm:mt-16 md:mt-0 md:block">
        <div className="w-fit flex flex-row gap-4 md:absolute md:bottom-4 md:right-10 xl:right-[10vw] 2xl:right-[15vw] 3xl:right-[20vw] z-10">
          <button className="flex flex-col items-center bg-black/35 3xl:bg-black/35 rounded-2xl p-4 w-32 h-32">
            <NewContentIcon />
            <p className="!text-(--white) mt-2">Nouveautés</p>
          </button>
          <button className="flex flex-col items-center bg-black/35 rounded-2xl p-4 w-32 h-32">
            <DiceIcon />
            <p className="!text-(--white) mt-2">Au hasard</p>
          </button>
        </div>
      </div>
    </section>
  );
}
