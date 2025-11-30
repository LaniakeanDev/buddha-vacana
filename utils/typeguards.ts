// import { ISuttaCardData } from '@/types/exports';

const hasRequiredProperties = (obj: object, keys: string[]): boolean => {
  return keys.every((key) => key in obj);
};

const isIToolCardData = (item: unknown): item is IToolCardData => {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const requiredKeys: string[] = ['svgId', 'title', 'tagline'];
  return hasRequiredProperties(item, requiredKeys);
};

export const isToolCardDataArray = (items: unknown): items is IToolCardData[] => {
  if (!Array.isArray(items)) {
    return false;
  }
  return items.every((item) => isIToolCardData(item));
};

export const isKNBook = (book: OneToTwelve | OneToFiftySix | TknBooks): book is TknBooks =>
  book == 'kp' ||
  book == 'dhp' ||
  book == 'ud'; /* || book == 'it' || book == 'snp' || book == 'thag' || book == 'thig' */

const isDhpChapter = (string: string): boolean =>
  string == '1-20' ||
  string == '21-32' ||
  string == '33-43' ||
  string == '44-59' ||
  string == '60-75' ||
  string == '76-89' ||
  string == '90-99' ||
  string == '100-115' ||
  string == '116-128' ||
  string == '129-145' ||
  string == '146-156' ||
  string == '157-166' ||
  string == '167-178' ||
  string == '179-196' ||
  string == '197-208' ||
  string == '209-220' ||
  string == '221-234' ||
  string == '235-255' ||
  string == '256-272' ||
  string == '273-289' ||
  string == '290-305' ||
  string == '306-319' ||
  string == '320-333' ||
  string == '334-359' ||
  string == '360-382' ||
  string == '383-423';

const isCorrectSnpSuttaId = (chapter: string, id: string): boolean => {
  if (!Number.isInteger(+id) || +id < 0) return false;
  const suttaNumber = +id;
  switch (chapter) {
    case '1':
      return suttaNumber < 13;
    case '2':
      return suttaNumber < 15;
    case '3':
      return suttaNumber < 13;
    case '4':
      return suttaNumber < 17;
    case '5':
      return suttaNumber < 20;
    default:
      return false;
  }
};

export const isCorrectKNSuttaId = (suttaId: string, book: string): boolean => {
  switch (book) {
    case 'kp':
      return Number.isInteger(+suttaId) && +suttaId > 0 && +suttaId < 10;
    case 'dhp':
      return isDhpChapter(suttaId);
    case 'ud':
      const parsedUdSuttaId = suttaId.split('-');
      return (
        Number.isInteger(+parsedUdSuttaId[0]) &&
        Number.isInteger(+parsedUdSuttaId[1]) &&
        +parsedUdSuttaId[0] > 0 &&
        +parsedUdSuttaId[0] < 9 &&
        +parsedUdSuttaId[1] > 0 &&
        +parsedUdSuttaId[1] < 11
      );
    case 'it':
      return Number.isInteger(+suttaId) && +suttaId > 0 && +suttaId < 113;
    case 'snp':
      const parsedSnpSuttaId = suttaId.split('-');
      return isCorrectSnpSuttaId(parsedSnpSuttaId[0], parsedSnpSuttaId[1]);
    case 'thag':
      return Number.isInteger(+suttaId) && +suttaId > 0 && +suttaId < 22;
    case 'thig':
      return Number.isInteger(+suttaId) && +suttaId > 0 && +suttaId < 17;
    default:
      return false;
  }
};

/**
 * check that the contents of a suttaCardData json file are correctly structured as an array of
 * @param data
 * @returns data is ISuttaCardData
 */
export function isIDisplaySuttaCardDataArray(data: unknown): data is IDisplaySuttaCardData[] {
  if (!Array.isArray(data)) {
    return false;
  }
  return data.every((item) => isIDisplaySuttaCardData(item));
}

/**
 * check that the contents of a suttaCardData json file are correctly structured
 * @param data
 * @returns data is ISuttaCardData
 */
function isIDisplaySuttaCardData(data: unknown): data is IDisplaySuttaCardData {
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  const potentialSuttaCardData = data as Record<string, unknown>;
  if (
    typeof potentialSuttaCardData.plTitle !== 'string' ||
    typeof potentialSuttaCardData.frTitle !== 'string' ||
    typeof potentialSuttaCardData.description !== 'string' ||
    // typeof potentialSuttaCardData.identifier !== 'string' ||
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
export function isISuttaData(data: unknown): data is ISuttaData {
  // Check if data is an object
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  // Type assertion to access properties
  const potentialSutta = data as Record<string, unknown>;

  // Check required top-level properties
  if (
    typeof potentialSutta.identifier !== 'string' ||
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
    if (typeof (block as ISuttaBlock).fr !== 'string' || typeof (block as ISuttaBlock).pl !== 'string') {
      return false;
    }
  }

  if (!Array.isArray(potentialSutta.keywords)) return false;
  for (const keyword of potentialSutta.keywords) {
    if (typeof keyword !== 'string') return false;
  }

  return true;
}

/**
 * Check that the contents are correctly structured as an array of ISuttaData
 * @param data
 * @returns data is ISuttaData[]
 */
export function isISuttaDataArray(data: unknown): data is ISuttaData[] {
  // Check if data is an array
  if (!Array.isArray(data)) {
    return false;
  }
  return data.every((item) => isISuttaData(item));
}

export function isIGlossEntryData(data: unknown): data is IGlossEntryData {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const potentialGlossEntry = data as Record<string, unknown>;

  if (typeof potentialGlossEntry.id !== 'string' || typeof potentialGlossEntry.content !== 'string') {
    return false;
  }
  return true;
}
