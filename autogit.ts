function kthSmallest_sort(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined; // invalid k
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
function kthSmallest_quickselect(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;

  function quickselect(left: number, right: number, kSmallest: number): number {
    if (left === right) return arr[left];

    // Choose a random pivot index
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    const pivotIndexNew = partition(left, right, pivotIndex);

    if (kSmallest === pivotIndexNew) {
      return arr[kSmallest];
    } else if (kSmallest < pivotIndexNew) {
      return quickselect(left, pivotIndexNew - 1, kSmallest);
    } else {
      return quickselect(pivotIndexNew + 1, right, kSmallest);
    }
  }

  function partition(left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    // Move pivot to end
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
        storeIndex++;
      }
    }
    // Move pivot to its final place
    [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
    return storeIndex;
  }

  return quickselect(0, arr.length - 1, k - 1);
}
