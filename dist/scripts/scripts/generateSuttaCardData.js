'use strict';
// npx tsc -p tsconfig.scripts.json
// node dist/scripts/scripts/generateSuttaCardData.js
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const promises_1 = __importDefault(require('fs/promises'));
const fs_1 = require('fs');
const path_1 = __importDefault(require('path'));
const typeguards_1 = require('../utils/typeguards');
async function generateCardData() {
  const dataDir = path_1.default.join(process.cwd(), 'public/_data/sutta');
  const nikayas = ['dn', 'mn', 'sn', 'an', 'kn'];
  try {
    for (const nikaya of nikayas) {
      const nikayaPath = path_1.default.join(dataDir, nikaya);
      if (nikaya === 'dn' || nikaya === 'mn') {
        const dataToBeWritten = await extractSuttaCardMetadataFromFolder(nikayaPath, nikaya);
        if (dataToBeWritten.length) {
          const outputFile =
            nikaya === 'dn'
              ? path_1.default.join(process.cwd(), 'public/_data/suttaCardData/dn.json')
              : path_1.default.join(process.cwd(), 'public/_data/suttaCardData/mn.json');
          await promises_1.default.writeFile(
            outputFile,
            JSON.stringify(dataToBeWritten, null, 2), // pretty print
            'utf8',
          );
        }
      }
      if (nikaya === 'sn' || nikaya === 'an') {
        const numberOfSubNikayas = nikaya === 'sn' ? 56 : 12;
        for (let subNikayaNumber = 1; subNikayaNumber <= numberOfSubNikayas; subNikayaNumber++) {
          const dataToBeWritten = await extractSuttaCardMetadataFromFolder(
            path_1.default.join(nikayaPath, String(subNikayaNumber)),
            nikaya,
          );
          if (dataToBeWritten.length) {
            const outPutPath = nikaya === 'sn' ? 'public/_data/suttaCardData/sn' : 'public/_data/suttaCardData/an';
            await promises_1.default.writeFile(
              path_1.default.join(process.cwd(), outPutPath, `/${subNikayaNumber}.json`),
              JSON.stringify(dataToBeWritten, null, 2), // pretty print
              'utf8',
            );
          }
        }
      }
      if (nikaya === 'kn') {
        // figure out which subNikayas are in the folder structure
        const subNikayas = (0, fs_1.readdirSync)(nikayaPath).filter((file) => {
          const fullPath = path_1.default.join(nikayaPath, file);
          return (0, fs_1.statSync)(fullPath).isDirectory();
        });
        for (const subNikaya of subNikayas) {
          const dataToBeWritten = await extractSuttaCardMetadataFromFolder(
            path_1.default.join(nikayaPath, String(subNikaya)),
            nikaya,
          );
          if (dataToBeWritten.length) {
            const outPutPath = 'public/_data/suttaCardData/kn';
            await promises_1.default.writeFile(
              path_1.default.join(process.cwd(), outPutPath, `/${String(subNikaya)}.json`),
              JSON.stringify(dataToBeWritten, null, 2), // pretty print
              'utf8',
            );
          }
        }
      }
    }
  } catch (error) {
    console.error('Error generating card data:', error);
    process.exit(1);
  }
}
generateCardData();
async function extractSuttaCardMetadataFromFolder(folderPath, nikaya) {
  let readingTime = 1;
  const files = await promises_1.default.readdir(folderPath); // array of file names
  const extractedSuttaCardMetadata = [];
  for (const file of files) {
    const filePath = path_1.default.join(folderPath, file);
    console.log(`parsing ${filePath}`);
    const content = await promises_1.default.readFile(filePath, 'utf8');
    const suttaData = JSON.parse(content);
    if (!(0, typeguards_1.isISuttaData)(suttaData)) {
      console.error('Error while reading file "', filePath, '": data structure doesn\'t match ISuttaData Interface');
    }
    const { body, ...metadata } = suttaData; // Extract metadata (without the body)
    // generate keywords list
    suttaData.keywords = generateKeywords(body);
    await promises_1.default.writeFile(filePath, JSON.stringify(suttaData, null, 2));
    // calculate reading time
    let aggregateString = '';
    for (const block of body) {
      aggregateString += block.fr;
    }
    readingTime = Math.floor(aggregateString.length / 1000);
    // build the identifier
    // const identifier = `${NIKAYA_SHORT_MAP[nikaya]} ${}`;
    extractedSuttaCardMetadata.push({
      ...metadata,
      nikaya,
      id: file.replace('.json', ''),
      readingTime,
    });
  }
  return extractedSuttaCardMetadata;
}
function generateKeywords(body) {
  let keywords = [];
  body.map((block) => {
    const segments = block.fr.split(/(\[[^\|]+\|[^\]]+\]|\s+)/).filter(Boolean);
    segments.map((segment) => {
      const match = segment.match(/^\[([^\|]+)\|([^\]]+)\]$/);
      if (match && !keywords.includes(match[1])) {
        keywords.push(match[1]);
      }
    });
  });
  return keywords;
}
