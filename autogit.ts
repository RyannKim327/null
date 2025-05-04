function kthSmallest_simple(arr: number[], k: number): number | null {
  if (k < 1 || k > arr.length) return null; // out of bounds
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
function quickselect(arr: number[], k: number): number | null {
  if (k < 1 || k > arr.length) return null;

  function partition(left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;

    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
        storeIndex++;
      }
    }

    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
    return storeIndex;
  }

  function select(left: number, right: number, kSmallest: number): number {
    if (left === right) {
      return arr[left];
    }

    // Pivot randomly for good average performance
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    const pivotNewIndex = partition(left, right, pivotIndex);

    if (kSmallest === pivotNewIndex) {
      return arr[kSmallest];
    } else if (kSmallest < pivotNewIndex) {
      return select(left, pivotNewIndex - 1, kSmallest);
    } else {
      return select(pivotNewIndex + 1, right, kSmallest);
    }
  }

  return select(0, arr.length - 1, k - 1);
}
