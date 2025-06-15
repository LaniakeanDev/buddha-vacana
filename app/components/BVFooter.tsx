import BVLogo from '@/public/assets/svg/bv-logo.svg';
import FacebookIcon from '@/public/assets/svg/facebook.svg';
import GithubIcon from '@/public/assets/svg/github.svg';
import { BVSVGAsset } from './BVAsset';
import BVSearchbar from './BVSearchbar';

export default function BVFooter() {
  const whiteBoxStyle = 'bg-[#d9d9d9]/20 pt-8 rounded-lg';
  const whiteBlockStyle = `${whiteBoxStyle} w-[175px] h-[190px]`;
  const whiteBlockTitleStyle = 'font-bold !text-white';
  const whiteBlockItemStyle = 'text-xs !text-white';

  return (
    <footer className="px-8 pb-6 pt-12 w-full flex flex-row justify-between items-start bg-(--bvsemidarkgreen) footer">
    {/* <footer className="px-4 md:px-8 pb-6 pt-12 w-full bg-(--bvsemidarkgreen) footer"> */}
      {/* <div className="flex flex-col gap-8 w-full justify-between sm:items-start sm:flex-row sm:gap-0 items-center"> */}
      <div className="w-48">
        <h4 className="text-2xl text-center !text-white w-48">Buddha Vacana</h4>
        <p className="!text-white text-center">La Parole du Bouddha</p>
        <div className=" grid place-items-center w-full"></div>
          <BVSVGAsset
            SVGAsset={BVLogo}
            alt="Logo représentant une roue du Dhamma dans un lotus"
            containerClassName="w-32 h-32"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center flex-col xl:flex-row gap-11">
          <div className={whiteBlockStyle}>
            <div className="w-full grid place-items-center">
              <div className="flex flex-col gap-2">
                <h6 className={whiteBlockTitleStyle}>Textes</h6>
                <p className={whiteBlockItemStyle}>Par collection</p>
                <p className={whiteBlockItemStyle}>Par thème</p>
                <p className={whiteBlockItemStyle}>Par allégorie</p>
                <p className={whiteBlockItemStyle}>Par nom propre</p>
              </div>
            </div>
          </div>
          <div className={whiteBlockStyle}>
            <div className="w-full grid place-items-center">
              <div className="flex flex-col gap-2">
                <h6 className="font-bold">Outils</h6>
                <p className={whiteBlockItemStyle}>Marque-pages</p>
                <p className={whiteBlockItemStyle}>Glossaire</p>
                <p className={whiteBlockItemStyle}>Formules Pali</p>
              </div>
            </div>
          </div>
          <div className={whiteBlockStyle}>
            <div className="w-full grid place-items-center">
              <div className="flex flex-col gap-2">
                <h6 className="font-bold">Informations</h6>
                <p className={whiteBlockItemStyle}>Anthologies</p>
                <p className={whiteBlockItemStyle}>Cartes</p>
                <p className={whiteBlockItemStyle}>Articles</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center mt-10">
          <p className={whiteBlockItemStyle}>Publié comme un don du Dhamma, pour le bienfait de tous</p>
      </div>
      <div>
        <BVSearchbar className="mb-8" />
        <div className={`${whiteBoxStyle} pb-8`}>
          <div className="w-full grid place-items-center">
            <div className="flex flex-col gap-2">
              <p className={whiteBlockItemStyle}>Mentions légales</p>
              <p className={whiteBlockItemStyle}>Acceptation des cookies</p>
              <p className={whiteBlockItemStyle}>Politique de confidentialité</p>
            </div>
          </div>
        </div>
        <div className="w-full grid place-items-center mt-8">
          <div className="flex flex-row gap-6">
            <FacebookIcon />
            <GithubIcon />
          </div>
        </div>
        </div>
      </div>
      <div className="grid place-items-center mt-10">
        <p className="text-xs text-center">
          Publié comme un don du Dhamma, <br /> pour le bienfait de tous
        </p>
      </div>
    </footer>
  );
}
