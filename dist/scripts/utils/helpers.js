'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getSuttaData = getSuttaData;
exports.pageSuttaDataFetcher = pageSuttaDataFetcher;
const path_1 = __importDefault(require('path'));
const fs_1 = require('fs');
const typeguards_1 = require('./typeguards');
function getSuttaData(nikaya, id, subnikaya) {
  let nikayaToSuttaPath;
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
  const suttaPath = path_1.default.join(
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
    const suttaFileContents = (0, fs_1.readFileSync)(suttaPath, 'utf8');
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
const suttaUrlIsCorrect = (nikaya, suttaId, book) => {
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
      return (0, typeguards_1.isKNBook)(book) && (0, typeguards_1.isCorrectKNSuttaId)(suttaId, book);
    default:
      return false;
  }
};
const formatSuttaReference = (nikaya, suttaId, book) =>
  `${nikaya != 'kn' ? nikaya.toUpperCase() : ''} ${book && nikaya != 'kn' ? `${book}.` : ''}${book && nikaya === 'kn' ? `${book} ` : ''}${suttaId}`;
function pageSuttaDataFetcher(nikaya, suttaId, book) {
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
    if (!(0, typeguards_1.isISuttaData)(suttaData))
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
