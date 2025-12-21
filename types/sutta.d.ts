interface ISuttaBlock {
  pl: string;
  fr: string;
}

interface ISuttaData {
  identifier: string;
  plTitle: string;
  frTitle: string;
  description: string;
  body: ISuttaBlock[];
  keywords: string[];
}

interface IModalState {
  isOpen: boolean;
  word: string | undefined;
  glossId: string | undefined;
}

type IPageSuttaDataFetcherResponse =
  | {
      success: true;
      suttaData: ISuttaData;
    }
  | {
      success: false;
      errorMessage: string;
    };
