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
