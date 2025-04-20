import BVHero from './components/BVHero';
import BVSection from './components/BVSection';
import BVHeader from './components/header/BVHeader';
import toolCardData from './components/content/tool-cards.json';
import AdvancedSearchIcon from '@/public/assets/svg/toolcards/advanced-search.svg';
import BookmarkIcon from '@/public/assets/svg/toolcards/bookmark.svg';
import BVToolCard from './components/BVToolCard';
import { isToolCardDataArray } from './utils/typeguards';

export default function Home() {
  const SVG_URL_MAP: { [key: string]: BVSVGElement } = {
    advancedSearch: AdvancedSearchIcon,
    bookmark: BookmarkIcon,
  };

  const renderToolCards = () => {
    if (!isToolCardDataArray(toolCardData)) {
      return (
        <div>
          <p>Une erreur est survenue</p>
        </div>
      );
    }

    return (
      <div>
        {toolCardData.map((item, idx) => {
          const SVGComponent = SVG_URL_MAP[item.svgId];
          return (
            <BVToolCard
              key={`toolcard-${String(idx)}`}
              svgAsset={SVGComponent}
              title={item.title}
              tagline={item.tagline}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <BVHeader />
      <BVHero />
      <AdvancedSearchIcon />
      <BookmarkIcon />
      <BVSection title="Outils">{renderToolCards()}</BVSection>
    </div>
  );
}
