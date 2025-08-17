import { ISuttaCardData } from '@/types/exports';

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

/**
 * check that the contents of a suttaCardData json file are correctly structured as an array of
 * @param data
 * @returns data is ISuttaCardData
 */
export function isISuttaCardDataArray(data: unknown): data is ISuttaCardData[] {
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
function isISuttaCardData(data: unknown): data is ISuttaCardData {
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  const potentialSuttaCardData = data as Record<string, unknown>;
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
