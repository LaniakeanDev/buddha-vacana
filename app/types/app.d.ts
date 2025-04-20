interface IToolCardData {
  svgId: string;
  title: string;
  tagline: string;
}

type UIToolCard = Pick<IToolCardData, 'title', 'tagline'> & {
  svgAsset: BVSVGElement;
};
