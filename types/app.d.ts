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
  suttaRef: string;
  description: string;
}

type UINewSuttaCard = Pick<ISutta, 'paliTitle', 'frTitle', 'suttaRef', 'description'> & {
  date: Date;
  timeLength: string;
};
