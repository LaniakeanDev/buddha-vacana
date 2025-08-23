export type TNikayaEnum = 'digha' | 'majjhima' | 'samyutta' | 'anguttara' | 'khuddaka';

export interface ISuttaCardData {
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
