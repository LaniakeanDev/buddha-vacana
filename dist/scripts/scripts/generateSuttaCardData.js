'use strict';
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
  console.log('generateCardData:13');
  const dataDir = path_1.default.join(process.cwd(), 'public/data/sutta');
  const nikayas = ['digha', 'majjhima', 'samyutta', 'anguttara', 'khuddaka'];
  try {
    for (const nikaya of nikayas) {
      const nikayaPath = path_1.default.join(dataDir, nikaya);
      if (nikaya === 'digha' || nikaya === 'majjhima') {
        console.log('generateCardData:20');
        const dataToBeWritten = await extractSuttaCardMetadataFromFolder(nikayaPath, nikaya);
        const outputFile =
          nikaya === 'digha'
            ? path_1.default.join(process.cwd(), 'public/data/suttaCardData/dn.json')
            : path_1.default.join(process.cwd(), 'public/data/suttaCardData/mn.json');
        console.log({ dataToBeWritten });
        await promises_1.default.writeFile(
          outputFile,
          JSON.stringify(dataToBeWritten, null, 2), // pretty print
          'utf8',
        );
      }
      if (nikaya === 'samyutta' || nikaya === 'anguttara') {
        const numberOfSubNikayas = nikaya === 'samyutta' ? 56 : 12;
        for (let subNikayaNumber = 1; subNikayaNumber <= numberOfSubNikayas; subNikayaNumber++) {
          const dataToBeWritten = await extractSuttaCardMetadataFromFolder(
            path_1.default.join(nikayaPath, String(subNikayaNumber)),
            nikaya,
          );
          const outPutPath = nikaya === 'samyutta' ? 'public/data/suttaCardData/sn' : 'public/data/suttaCardData/an';
          await promises_1.default.writeFile(
            path_1.default.join(process.cwd(), outPutPath, `/${subNikayaNumber}.json`),
            JSON.stringify(dataToBeWritten, null, 2), // pretty print
            'utf8',
          );
        }
      }
      if (nikaya === 'khuddaka') {
        // figure out which subNikayas are in the folder structure
        const subNikayas = (0, fs_1.readdirSync)(nikayaPath).filter((file) => {
          const fullPath = path_1.default.join(nikayaPath, file);
          return (0, fs_1.statSync)(fullPath).isDirectory();
        });
        for (const subNikaya of subNikayas) {
          console.log(subNikaya);
          // to be finisehd later
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
    const content = await promises_1.default.readFile(filePath, 'utf8');
    const suttaData = JSON.parse(content);
    if (!(0, typeguards_1.isISuttaData)(suttaData)) {
      console.error('Error while reading file "', filePath, '": data structure doesn\'t match ISuttaData Interface');
    }
    const { body, ...metadata } = suttaData; // Extract metadata (without the body)
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
