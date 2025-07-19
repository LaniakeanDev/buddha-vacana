'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isToolCardDataArray = void 0;
exports.isISuttaCardDataArray = isISuttaCardDataArray;
exports.isISuttaData = isISuttaData;
exports.isISuttaDataArray = isISuttaDataArray;
exports.isIGlossEntryData = isIGlossEntryData;
const hasRequiredProperties = (obj, keys) => {
  return keys.every((key) => key in obj);
};
const isIToolCardData = (item) => {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const requiredKeys = ['svgId', 'title', 'tagline'];
  return hasRequiredProperties(item, requiredKeys);
};
const isToolCardDataArray = (items) => {
  if (!Array.isArray(items)) {
    return false;
  }
  return items.every((item) => isIToolCardData(item));
};
exports.isToolCardDataArray = isToolCardDataArray;
/**
 * check that the contents of a suttaCardData json file are correctly structured as an array of
 * @param data
 * @returns data is ISuttaCardData
 */
function isISuttaCardDataArray(data) {
  if (!Array.isArray(data)) {
    return false;
  }
  return data.every((item) => isISuttaCardData(item));
}
/**
 * check that the contents of a suttaCardData json file are correctly structured
 * @param data
 * @returns data is ISuttaCardData
 */
function isISuttaCardData(data) {
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  const potentialSuttaCardData = data;
  if (
    typeof potentialSuttaCardData.plTitle !== 'string' ||
    typeof potentialSuttaCardData.frTitle !== 'string' ||
    typeof potentialSuttaCardData.description !== 'string' ||
    typeof potentialSuttaCardData.identifier !== 'string' ||
    typeof potentialSuttaCardData.translator !== 'string' ||
    typeof potentialSuttaCardData.readingTime !== 'number'
  ) {
    return false;
  }
  return true;
}
/**
 * check that the contents of a sutta json file are correctly structured
 * @param data
 * @returns data is ISuttaData
 */
function isISuttaData(data) {
  // Check if data is an object
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  // Type assertion to access properties
  const potentialSutta = data;
  // Check required top-level properties
  if (
    typeof potentialSutta.shortRef !== 'string' ||
    typeof potentialSutta.plTitle !== 'string' ||
    typeof potentialSutta.frTitle !== 'string' ||
    typeof potentialSutta.description !== 'string'
  ) {
    return false;
  }
  // Check body is an array
  if (!Array.isArray(potentialSutta.body)) {
    return false;
  }
  // Validate each block in body
  for (const block of potentialSutta.body) {
    if (typeof block !== 'object' || block === null) {
      return false;
    }
    // Check required block properties
    if (typeof block.fr !== 'string' || typeof block.pl !== 'string') {
      return false;
    }
  }
  return true;
}
/**
 * Check that the contents are correctly structured as an array of ISuttaData
 * @param data
 * @returns data is ISuttaData[]
 */
function isISuttaDataArray(data) {
  // Check if data is an array
  if (!Array.isArray(data)) {
    return false;
  }
  return data.every((item) => isISuttaData(item));
}
function isIGlossEntryData(data) {
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  const potentialGlossEntry = data;
  if (typeof potentialGlossEntry.id !== 'string' || typeof potentialGlossEntry.content !== 'string') {
    return false;
  }
  return true;
}
