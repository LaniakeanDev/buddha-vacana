type NikayaEnum = 'dn' | 'mn' | 'sm' | 'an' | 'kn';

interface INikayaPresentationData {
  id: 'digha' | 'majjhima' | 'samyutta' | 'anguttara' | 'khuddaka';
  plTitle: string;
  frTitle: string;
  description: string;
  count: number;
  short: string;
}

interface ISuttaData {
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
