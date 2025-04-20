interface IToolCardData {
  svgId: string;
  title: string;
  tagline: string;
}

type UIToolCard = Pick<IToolCardData, 'title', 'tagline'> & {
  svgAsset: BVSVGElement;
};

interface ISutta {
  paliTitle: string;
  frTitle: string;
  ref: string;
  description: string;
}

type UINewSuttaCard = Pick<ISutta, 'paliTitle', 'frTitle', 'ref', 'description'> & {
  date: Date;
  timeLength: string;
};
