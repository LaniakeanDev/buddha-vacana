interface ISuttaBlock {
  pl: string;
  fr: string;
}

interface ISuttaData {
  shortRef: string;
  plTitle: string;
  frTitle: string;
  description: string;
  body: ISuttaBlock[];
}
