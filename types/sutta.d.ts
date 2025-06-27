interface ISuttaBlock {
  pl: string;
  fr: string;
}

interface ISuttaData {
  plTitle: string;
  frTitle: string;
  description: string;
  body: ISuttaBlock[];
}
