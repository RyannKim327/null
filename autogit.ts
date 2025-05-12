function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}

// Example:
const arr = [7, 10, 4, 3, 20, 15];
console.log(kthSmallest(arr, 3)); // Output: 7
function partition(arr: number[], left: number, right: number, pivotIndex: number): number {
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

function quickselect(arr: number[], left: number, right: number, k: number): number {
  if (left === right) {
    return arr[left];
  }

  // Choose a random pivot index between left and right
  const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));

  const pivotNewIndex = partition(arr, left, right, pivotIndex);

  if (k === pivotNewIndex) {
    return arr[k];
  } else if (k < pivotNewIndex) {
    return quickselect(arr, left, pivotNewIndex - 1, k);
  } else {
    return quickselect(arr, pivotNewIndex + 1, right, k);
  }
}

function kthSmallestQuickselect(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;
  // Make a copy to avoid modifying the original array
  const copiedArr = [...arr];
  return quickselect(copiedArr, 0, copiedArr.length - 1, k - 1);
}

// Example:
const arr2 = [7, 10, 4, 3, 20, 15];
console.log(kthSmallestQuickselect(arr2, 3)); // Output: 7
