'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NIKAYA_SHORT_MAP = void 0;
exports.getSuttaData = getSuttaData;
const path_1 = __importDefault(require('path'));
const fs_1 = require('fs');
function getSuttaData(nikaya, level1, level2) {
  const suttaPath = level2
    ? path_1.default.join(
        // Safely combines path segments (handles OS-specific slashes)
        process.cwd(), // Returns the current working directory (project root).
        '/public/data/sutta',
        nikaya,
        level1, // level1 is a book
        `${level2}.json`,
      )
    : path_1.default.join(process.cwd(), '/public/data/sutta', nikaya, `${level1}.json`);
  try {
    const suttaFileContents = (0, fs_1.readFileSync)(suttaPath, 'utf8');
    return JSON.parse(suttaFileContents);
  } catch (error) {
    // console.log({error});
    return null;
  }
}
exports.NIKAYA_SHORT_MAP = {
  digha: 'DN',
  majjhima: 'MN',
  samyutta: 'SN',
  anguttara: 'AN',
  khuddaka: 'KN',
};
