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

type TSubnikayaPresentationMap = {
  an: {
    [key in OneToTwelve]: INikayaPresentationData;
  };
  sn?: {
    [key in OneToFiftySix]: INikayaPresentationData;
  };
  kn?: {
    [key in 'kp' | 'dhp' | 'ud' | 'it' | 'snp' | 'thag' | 'thig']: INikayaPresentationData;
  };
};

type OneToTwelve = 1 | 2 | 3 /* | 4 | 5 | 6 | 7 | 8 | 9 | 10 
  | 11 | 12 */;

type OneToFiftySix =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56;

type NikayaEnum = 'dn' | 'mn' | 'sn' | 'an' | 'kn';
