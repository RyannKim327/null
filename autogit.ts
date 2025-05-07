function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined; // out of bounds check
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
function partition(arr: number[], left: number, right: number): number {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

function quickselect(arr: number[], left: number, right: number, k: number): number {
  if (left === right) return arr[left];

  const pivotIndex = partition(arr, left, right);

  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickselect(arr, left, pivotIndex - 1, k);
  } else {
    return quickselect(arr, pivotIndex + 1, right, k);
  }
}

function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;
  // quickselect modifies array in-place, so spread to avoid mutating input
  const copy = [...arr]; 
  return quickselect(copy, 0, copy.length - 1, k - 1);
}
