import { PixelData } from './types';

function between(n: number, min: number, max: number) {
  return n >= min && n <= max;
}

/**
 * 是否在这个 path 上
 * @param i
 * @param j
 * @param minI
 * @param maxI
 * @param minJ
 * @param maxJ
 */
function isOnPosition(
  i: number,
  j: number,
  minI: number,
  maxI: number,
  minJ: number,
  maxJ: number,
  includeAll = false,
) {
  if (includeAll) {
    return between(i, minI, maxI) && between(j, minJ, maxJ);
  }

  return (
    (i === minI && between(j, minJ, maxJ)) ||
    (i === maxI && between(j, minJ, maxJ)) ||
    (j === minJ && between(i, minI, maxI)) ||
    (j === maxJ && between(i, minI, maxI))
  );
}

/**
 *
 * @param i
 * @param j
 * @param size
 * @return // detection: inner', 'middle', 'outer'; detectionPosition: 'tl', 'tr', 'bl';
 */
export function getPositionDetection(
  i: number,
  j: number,
  size: number,
): Pick<PixelData, 'detection' | 'detectionPosition'> {
  // 左上
  if (isOnPosition(i, j, 0, 6, 0, 6)) {
    return {
      detection: 'outer',
      detectionPosition: 'tl',
    };
  }

  if (isOnPosition(i, j, 1, 5, 1, 5)) {
    return {
      detection: 'middle',
      detectionPosition: 'tl',
    };
  }

  if (isOnPosition(i, j, 2, 4, 2, 4, true)) {
    return {
      detection: 'inner',
      detectionPosition: 'tl',
    };
  }

  // 右上
  if (isOnPosition(i, j, size - 7, size - 1, 0, 6)) {
    return {
      detection: 'outer',
      detectionPosition: 'tr',
    };
  }

  if (isOnPosition(i, j, size - 6, size - 2, 1, 5)) {
    return {
      detection: 'middle',
      detectionPosition: 'tr',
    };
  }

  if (isOnPosition(i, j, size - 5, size - 3, 2, 4, true)) {
    return {
      detection: 'inner',
      detectionPosition: 'tr',
    };
  }

  // 左下
  if (isOnPosition(i, j, 0, 6, size - 7, size - 1)) {
    return {
      detection: 'outer',
      detectionPosition: 'bl',
    };
  }

  if (isOnPosition(i, j, 1, 5, size - 6, size - 2)) {
    return {
      detection: 'middle',
      detectionPosition: 'bl',
    };
  }

  if (isOnPosition(i, j, 2, 4, size - 5, size - 3, true)) {
    return {
      detection: 'inner',
      detectionPosition: 'bl',
    };
  }

  return {
    detection: null,
    detectionPosition: null,
  };
}
