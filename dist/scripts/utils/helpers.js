'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getSuttaData = getSuttaData;
const path_1 = __importDefault(require('path'));
const fs_1 = require('fs');
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
  }
  const suttaPath = path_1.default.join(
    // Safely combines path segments (handles OS-specific slashes)
    process.cwd(), // Returns the current working directory (project root).
    '/public/_data/sutta',
    nikayaToSuttaPath,
    `/${id}.json`,
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
