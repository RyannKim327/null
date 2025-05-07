function quickselect(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;

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

    // Swap pivot to its final place
    [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
    return storeIndex;
  }

  function select(left: number, right: number, kSmallest: number): number {
    if (left === right) return arr[left];

    // Choose a random pivotIndex between left and right
    let pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    pivotIndex = partition(left, right, pivotIndex);

    if (kSmallest === pivotIndex) {
      return arr[kSmallest];
    } else if (kSmallest < pivotIndex) {
      return select(left, pivotIndex - 1, kSmallest);
    } else {
      return select(pivotIndex + 1, right, kSmallest);
    }
  }

  // kth smallest is at index k-1 (0-based)
  return select(0, arr.length - 1, k - 1);
}
const nums = [7, 10, 4, 3, 20, 15];
const k = 3;
const kthSmallest = quickselect(nums, k);
console.log(`The ${k}rd smallest element is`, kthSmallest);  // Output: 7
const kthSmallest = arr.sort((a, b) => a - b)[k - 1];
