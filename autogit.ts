function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}

// Example
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
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

function quickSelect(arr: number[], left: number, right: number, k: number): number {
  if (left === right) return arr[left];

  const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
  const pivotNewIndex = partition(arr, left, right, pivotIndex);

  if (k === pivotNewIndex) {
    return arr[k];
  } else if (k < pivotNewIndex) {
    return quickSelect(arr, left, pivotNewIndex - 1, k);
  } else {
    return quickSelect(arr, pivotNewIndex + 1, right, k);
  }
}

function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;
  // quickSelect expects a zero-based index, so subtract 1 from k
  return quickSelect(arr.slice(), 0, arr.length - 1, k - 1);
}

// Example
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
