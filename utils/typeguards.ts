const hasRequiredProperties = (obj: object, keys: string[]): boolean => {
  return keys.every((key) => key in obj);
};

const isIToolCardData = (item: unknown): item is IToolCardData => {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const requiredKeys: (keyof IToolCardData)[] = ['svgId', 'title', 'tagline'];
  return hasRequiredProperties(item, requiredKeys);
};

export const isToolCardDataArray = (items: unknown): items is IToolCardData[] => {
  if (!Array.isArray(items)) {
    return false;
  }
  return items.every((item) => isIToolCardData(item));
};

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
    if (typeof (block as ISuttaBlock).fr !== 'string' || typeof (block as ISuttaBlock).pl !== 'string') {
      return false;
    }
  }

  return true;
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
