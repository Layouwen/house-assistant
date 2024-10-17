import {
  Point,
  walkingSearchCache,
  ridingSearchCache,
  subwayTransferSearchCache,
  transferSearchCache,
  saveCacheMapToLocalStorage,
  CacheKey,
} from "./cacheStorage";

export function walkingSearch(
  walking: any,
  { start, end }: { start: Point; end: Point }
) {
  return new Promise((resolve) => {
    const cache = walkingSearchCache.get(JSON.stringify({ start, end }));
    if (cache) {
      console.log("layouwen walking cache hit", cache);
    }

    walking.search(start, end, (status: string, result: any) => {
      if (status === "complete" && result.info.toLowerCase() === "ok") {
        walkingSearchCache.set(JSON.stringify({ start, end }), {
          status,
          result,
        });
        saveCacheMapToLocalStorage(walkingSearchCache, CacheKey.WALKING_SEARCH);
      }
      resolve({ status, result });
    });
  });
}

export function ridingSearch(
  riding: any,
  { start, end }: { start: Point; end: Point }
) {
  return new Promise((resolve) => {
    const cache = ridingSearchCache.get(JSON.stringify({ start, end }));
    if (cache) {
      console.log("layouwen riding cache hit", cache);
    }

    riding.search(start, end, (status: string, result: any) => {
      if (status === "complete" && result.info.toLowerCase() === "ok") {
        ridingSearchCache.set(JSON.stringify({ start, end }), {
          status,
          result,
        });
        saveCacheMapToLocalStorage(ridingSearchCache, CacheKey.RIDING_SEARCH);
      }
      resolve({ status, result });
    });
  });
}

export function subwayTransferSearch(
  transfer: any,
  { start, end }: { start: Point; end: Point }
) {
  return new Promise((resolve) => {
    const cache = subwayTransferSearchCache.get(JSON.stringify({ start, end }));
    if (cache) {
      console.log("layouwen subwayTransfer cache hit", cache);
    }

    transfer.search(start, end, (status: string, result: any) => {
      if (status === "complete" && result.info.toLowerCase() === "ok") {
        subwayTransferSearchCache.set(JSON.stringify({ start, end }), {
          status,
          result,
        });
        saveCacheMapToLocalStorage(
          subwayTransferSearchCache,
          CacheKey.SUBWAY_TRANSFER_SEARCH
        );
      }
      resolve({ status, result });
    });
  });
}

export function transferSearch(
  transfer: any,
  { start, end }: { start: Point; end: Point }
) {
  return new Promise((resolve) => {
    const cache = transferSearchCache.get(JSON.stringify({ start, end }));
    if (cache) {
      console.log("layouwen transfer cache hit", cache);
    }

    transfer.search(start, end, (status: string, result: any) => {
      if (status === "complete" && result.info.toLowerCase() === "ok") {
        console.log("layouwen transfer result", status, result);
        transferSearchCache.set(JSON.stringify({ start, end }), {
          status,
          result,
        });
        saveCacheMapToLocalStorage(
          transferSearchCache,
          CacheKey.TRANSFER_SEARCH
        );
      }
      resolve({ status, result });
    });
  });
}
