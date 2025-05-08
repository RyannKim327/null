function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined; // handle invalid k
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
function quickselect(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;

  function partition(left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]; // move pivot to end
    let storeIndex = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
        storeIndex++;
      }
    }
    [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]]; // move pivot to its final place
    return storeIndex;
  }

  function select(left: number, right: number, kSmallest: number): number {
    if (left === right) return arr[left]; // only one element

    const pivotIndex = Math.floor((left + right) / 2);
    const pivotNewIndex = partition(left, right, pivotIndex);

    if (kSmallest === pivotNewIndex) {
      return arr[kSmallest];
    } else if (kSmallest < pivotNewIndex) {
      return select(left, pivotNewIndex - 1, kSmallest);
    } else {
      return select(pivotNewIndex + 1, right, kSmallest);
    }
  }

  // k-1 because indexes are zero-based
  return select(0, arr.length - 1, k - 1);
}
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(quickselect(arr, k)); // Outputs 7 which is the 3rd smallest
