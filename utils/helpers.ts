import path from 'path';
import { readFileSync } from 'fs';
import { isCorrectKNSuttaId, isISuttaData, isKNBook } from './typeguards';

export function getSuttaData(nikaya: TNikayaEnum, id: string, subnikaya?: string): ISuttaData | null {
  let nikayaToSuttaPath: string;
  switch (nikaya) {
    case 'dn':
      nikayaToSuttaPath = '/dn';
      break;
    case 'mn':
      nikayaToSuttaPath = '/mn';
      break;
    case 'sn':
      nikayaToSuttaPath = `/sn/${subnikaya}`;
      break;
    case 'an':
      nikayaToSuttaPath = `/an/${subnikaya}`;
      break;
    case 'kn':
      nikayaToSuttaPath = `/kn/${subnikaya}`;
      break;
    default:
      return null;
  }
  const suttaPath = path.join(
    // Safely combines path segments (handles OS-specific slashes)
    process.cwd(), // Returns the current working directory (project root).
    '/public/_data/sutta',
    nikayaToSuttaPath,
    `/${String(id)}.json`,
  );

  // const suttaPath = level2
  //   ? path.join(
  //       // Safely combines path segments (handles OS-specific slashes)
  //       process.cwd(), // Returns the current working directory (project root).
  //       '/public/_data/sutta',
  //       nikaya,
  //       level1, // level1 is a book
  //       `${level2}.json`, // level 2 is a suttaId
  //     )
  //   : path.join(
  //       process.cwd(),
  //       '/public/_data/sutta',
  //       nikaya,
  //       `${level1}.json`, // level 1 is a suttaId
  //     );

  try {
    const suttaFileContents = readFileSync(suttaPath, 'utf8');
    return JSON.parse(suttaFileContents);
  } catch (error) {
    // console.log({error});
    return null;
  }
}

// export const NIKAYA_SHORT_MAP = {
//   digha: 'DN',
//   majjhima: 'MN',
//   samyutta: 'SN',
//   anguttara: 'AN',
//   khuddaka: 'KN',
// };

const suttaUrlIsCorrect = (
  nikaya: TNikayaEnum,
  suttaId: string,
  book?: OneToTwelve | OneToFiftySix | TknBooks,
): boolean => {
  switch (nikaya) {
    case 'dn':
      return Number.isInteger(+suttaId) && +suttaId > 0 && +suttaId <= 34;
    case 'mn':
      return Number.isInteger(+suttaId) && +suttaId > 0 && +suttaId <= 152;
    case 'sn':
      if (!book) return false;
      return Number.isInteger(+book) && Number.isInteger(+suttaId) && +book > 0 && +book <= 56 && +suttaId > 0;
    case 'an':
      if (!book) return false;
      return Number.isInteger(+book) && Number.isInteger(+suttaId) && +book > 0 && +book <= 11 && +suttaId > 0;
    case 'kn':
      if (!book) return false;
      return isKNBook(book) && isCorrectKNSuttaId(suttaId, book);
    default:
      return false;
  }
};

const formatSuttaReference = (nikaya: TNikayaEnum, suttaId: string, book?: string): string =>
  `${nikaya != 'kn' ? nikaya.toUpperCase() : ''} ${book && nikaya != 'kn' ? `${book}.` : ''}${book && nikaya === 'kn' ? `${book} ` : ''}${suttaId}`;

export function pageSuttaDataFetcher(
  nikaya: TNikayaEnum,
  suttaId: string,
  book?: OneToTwelve | OneToFiftySix | TknBooks,
): IPageSuttaDataFetcherResponse {
  if (!suttaUrlIsCorrect(nikaya, suttaId, book)) {
    return {
      success: false,
      errorMessage: "La ressource que vous demandez n'existe pas",
    };
  }
  try {
    const suttaData = (() => {
      switch (nikaya) {
        case 'dn':
          return getSuttaData('dn', suttaId);
        case 'mn':
          return getSuttaData('mn', suttaId);
        case 'sn':
          return getSuttaData('sn', suttaId, String(book));
        case 'an':
          return getSuttaData('an', suttaId, String(book));
        case 'kn':
          return getSuttaData('kn', suttaId, String(book));
        default:
          return null;
      }
    })();
    if (!suttaData) throw `File containing data for ${formatSuttaReference(nikaya, suttaId, String(book))} unavailable`;
    if (!isISuttaData(suttaData))
      throw `Data structure in ${formatSuttaReference(nikaya, suttaId, String(book))} doesn't match ISuttaCardData interface`;
    return {
      success: true,
      suttaData,
    };
  } catch (error) {
    console.error(`Failed to load sutta data from ${formatSuttaReference(nikaya, suttaId, String(book))}: `, error);
    return {
      success: false,
      errorMessage: typeof error == 'string' ? error : 'unknown error',
    };
  }
}
