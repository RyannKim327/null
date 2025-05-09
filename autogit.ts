function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined; // invalid k

  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

function quickSelect(arr: number[], low: number, high: number, k: number): number | undefined {
  if (low <= high) {
    const pi = partition(arr, low, high);

    if (pi === k) {
      return arr[pi];
    } else if (pi > k) {
      return quickSelect(arr, low, pi - 1, k);
    } else {
      return quickSelect(arr, pi + 1, high, k);
    }
  }
  return undefined;
}

function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;

  // Make a copy to avoid mutating original array
  const arrCopy = [...arr];
  return quickSelect(arrCopy, 0, arrCopy.length - 1, k - 1);
}
