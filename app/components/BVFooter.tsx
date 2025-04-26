import BVLogo from '@/public/assets/svg/bv-logo.svg';
import FacebookIcon from '@/public/assets/svg/facebook.svg';
import GithubIcon from '@/public/assets/svg/github.svg';
import { BVSVGAsset } from './BVAsset';
import BVSearchbar from './BVSearchbar';
import './styles/footer.css';

export default function BVFooter() {
  const whiteBoxStyle = 'bg-[#d9d9d9]/20 pt-8 rounded-lg';
  const whiteBlockStyle = `${whiteBoxStyle} w-[175px] h-[190px]`;
  return (
    <footer className="px-8 pb-6 pt-12 w-full flex flex-row justify-between items-start bg-bvdark-green footer">
      <div>
        <h4 className="text-2xl text-white">Buddha Vacana</h4>
        <p>La Parole du Bouddha</p>
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
                <h6 className="font-bold text-white">Textes</h6>
                <p className="text-xs">Par collection</p>
                <p className="text-xs">Par thème</p>
                <p className="text-xs">Par allégorie</p>
                <p className="text-xs">Par nom propre</p>
              </div>
            </div>
          </div>
          <div className={whiteBlockStyle}>
            <div className="w-full grid place-items-center">
              <div className="flex flex-col gap-2">
                <h6 className="font-bold">Outils</h6>
                <p className="text-xs">Marque-pages</p>
                <p className="text-xs">Glossaire</p>
                <p className="text-xs">Formules Pali</p>
              </div>
            </div>
          </div>
          <div className={whiteBlockStyle}>
            <div className="w-full grid place-items-center">
              <div className="flex flex-col gap-2">
                <h6 className="font-bold">Informations</h6>
                <p className="text-xs">Anthologies</p>
                <p className="text-xs">Cartes</p>
                <p className="text-xs">Articles</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center mt-10">
          <p className="text-xs">Publié comme un don du Dhamma, pour le bienfait de tous</p>
        </div>
      </div>
      <div>
        <BVSearchbar className="mb-8" />
        <div className={`${whiteBoxStyle} pb-8`}>
          <div className="w-full grid place-items-center">
            <div className="flex flex-col gap-2">
              <p className="text-xs">Mentions légales</p>
              <p className="text-xs">Acceptation des cookies</p>
              <p className="text-xs">Politique de confidentialité</p>
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
