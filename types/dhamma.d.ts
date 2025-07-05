type NikayaEnum = 'digha' | 'majjhima' | 'samyutta' | 'anguttara' | 'khuddaka';

interface INikayaPresentationData {
  id: NikayaEnum;
  plTitle: string;
  frTitle: string;
  description: string;
  count: number;
  short: string;
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
