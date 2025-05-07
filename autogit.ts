function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
function quickselect(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;

  function partition(left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
        storeIndex++;
      }
    }
    [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
    return storeIndex;
  }

  function select(left: number, right: number, kSmallest: number): number {
    if (left === right) return arr[left];
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
const arr = [7, 10, 4, 3, 20, 15];
console.log(kthSmallest(arr, 3));  // Output: 7
console.log(quickselect(arr, 3));  // Output: 7
