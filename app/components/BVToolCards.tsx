import toolCardData from './content/tool-cards.json';
import AdvancedSearchIcon from '@/public/assets/svg/toolcards/advanced-search.svg';
import BookmarkIcon from '@/public/assets/svg/toolcards/bookmark.svg';
import AllegoryIcon from '@/public/assets/svg/toolcards/allegory.svg';
import AnthoIcon from '@/public/assets/svg/toolcards/antho.svg';
import ArticleIcon from '@/public/assets/svg/toolcards/article.svg';
import FormIcon from '@/public/assets/svg/toolcards/form.svg';
import GlossIcon from '@/public/assets/svg/toolcards/gloss.svg';
import MapIcon from '@/public/assets/svg/toolcards/bookmark.svg';
import NameIcon from '@/public/assets/svg/toolcards/name.svg';
import RssIcon from '@/public/assets/svg/toolcards/rss.svg';
import ThemeIcon from '@/public/assets/svg/toolcards/theme.svg';
import BVToolCard from './BVToolCard';
import { isToolCardDataArray } from '@/utils/typeguards';

export default function BVToolCards() {
  const TOOL_SVG_URL_MAP: { [key: string]: BVSVGElement } = {
    advancedSearch: AdvancedSearchIcon,
    bookmark: BookmarkIcon,
    allegory: AllegoryIcon,
    antho: AnthoIcon,
    article: ArticleIcon,
    form: FormIcon,
    gloss: GlossIcon,
    map: MapIcon,
    name: NameIcon,
    rss: RssIcon,
    theme: ThemeIcon,
  };

  if (!isToolCardDataArray(toolCardData)) {
    return (
      <div>
        <p>Une erreur est survenue</p>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-10 flex-wrap w-[1144px] m-auto">
      {toolCardData.map((item, idx) => {
        const SVGComponent = TOOL_SVG_URL_MAP[item.svgId];
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
}
