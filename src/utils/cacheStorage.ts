export type Point = [number, number];
export interface SearchResult {
  status: string;
  result: any;
}

export enum CacheKey {
  WALKING_SEARCH = "walkingSearchCache",
  RIDING_SEARCH = "ridingSearchCache",
  SUBWAY_TRANSFER_SEARCH = "subwayTransferSearchCache",
  TRANSFER_SEARCH = "transferSearchCache",
}

export const walkingSearchCache = getCacheMapFromLocalStorage(
  CacheKey.WALKING_SEARCH
);
export const ridingSearchCache = getCacheMapFromLocalStorage(
  CacheKey.RIDING_SEARCH
);
export const subwayTransferSearchCache = getCacheMapFromLocalStorage(
  CacheKey.SUBWAY_TRANSFER_SEARCH
);
export const transferSearchCache = getCacheMapFromLocalStorage(
  CacheKey.TRANSFER_SEARCH
);

export function saveCacheMapToLocalStorage(
  map: Map<string, SearchResult>,
  key: CacheKey
) {
  const saveObj: Record<string, SearchResult> = {};
  for (const [key, value] of map.entries()) {
    saveObj[key] = value;
  }
  localStorage.setItem(key, JSON.stringify(saveObj));
}

export function getCacheMapFromLocalStorage(
  key: CacheKey
): Map<string, SearchResult> {
  const cacheStr = localStorage.getItem(key);
  if (!cacheStr) {
    return new Map();
  }
  const cache = JSON.parse(cacheStr);
  return new Map(Object.entries(cache));
}
