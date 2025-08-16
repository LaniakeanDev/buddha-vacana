interface INikayaPresentationData {
  plTitle: string;
  frTitle: string;
  description: string;
  count: number;
  identifier: string;
}

interface INikayaNaviPresentationData extends INikayaPresentationData {
  href: string;
  // id: NikayaEnum;
}

interface ISuttaCardData {
  plTitle: string;
  frTitle: string;
  description: string;
  identifier: string;
  translator: string;
  readingTime: number;
  themes?: string[];
  similes?: string[];
  tags?: string[];
}

type NikayaPresentationMap = {
  [key in NikayaEnum]: INikayaPresentationData;
};

// type NikayaEnum = 'digha' | 'majjhima' | 'samyutta' | 'anguttara' | 'khuddaka';

interface ISubNikayaPage {
  params: {
    book: number;
  };
}
