import BVLogo from '@/public/assets/svg/bv-logo.svg';
import FacebookIcon from '@/public/assets/svg/facebook.svg';
import GithubIcon from '@/public/assets/svg/github.svg';
import { BVSVGAsset } from './BVAsset';
import BVSearchbar from './BVSearchbar';

export default function BVFooter() {
  const whiteBoxStyle = 'bg-[#d9d9d9]/20 pt-8 rounded-lg';
  const whiteBlockStyle = `${whiteBoxStyle} w-[175px] h-[190px]`;
  const whiteBlockTitleStyle = 'font-bold text-white';
  const whiteBlockItemStyle = 'text-xs text-white';

  return (
    <footer className="px-8 pb-6 pt-12 w-full flex flex-row justify-between items-start bg-(--bvsemidarkgreen) footer">
      <div>
        <h4 className="text-2xl text-white">Buddha Vacana</h4>
        <p className="text-white">La Parole du Bouddha</p>
        <BVSVGAsset
          SVGAsset={BVLogo}
          alt="Logo représentant une roue du Dhamma dans un lotus"
          containerClassName="w-32 h-32"
        />
      </div>
      <div>
        <div className="flex flex-row gap-11">
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
                <h6 className={whiteBlockTitleStyle}>Outils</h6>
                <p className={whiteBlockItemStyle}>Marque-pages</p>
                <p className={whiteBlockItemStyle}>Glossaire</p>
                <p className={whiteBlockItemStyle}>Formules Pali</p>
              </div>
            </div>
          </div>
          <div className={whiteBlockStyle}>
            <div className="w-full grid place-items-center">
              <div className="flex flex-col gap-2">
                <h6 className={whiteBlockTitleStyle}>Informations</h6>
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
    </footer>
  );
}
