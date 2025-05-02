function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
function partition(arr: number[], left: number, right: number, pivotIndex: number): number {
  const pivotValue = arr[pivotIndex];
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]; // Move pivot to end
  let storeIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
      storeIndex++;
    }
  }
  [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]]; // Move pivot to final place
  return storeIndex;
}

function quickSelect(arr: number[], left: number, right: number, k: number): number {
  if (left === right) return arr[left];

  let pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
  pivotIndex = partition(arr, left, right, pivotIndex);

  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex + 1, right, k);
  }
}

function kthSmallestQuickSelect(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;
  // Create a copy of the array as quickSelect modifies it in-place
  const copyArr = [...arr];
  return quickSelect(copyArr, 0, copyArr.length - 1, k - 1);
}
