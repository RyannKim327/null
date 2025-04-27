function kthSmallest(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;

  const sorted = arr.slice().sort((a, b) => a - b);
  return sorted[k - 1];
}
function quickSelect(arr: number[], k: number): number | undefined {
  if (k < 1 || k > arr.length) return undefined;

  function partition(left: number, right: number): number {
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
  }

  function select(left: number, right: number, kSmallest: number): number {
    if (left === right) return arr[left];

    const pivotIndex = partition(left, right);
    const length = pivotIndex - left + 1;

    if (kSmallest === length) {
      return arr[pivotIndex];
    } else if (kSmallest < length) {
      return select(left, pivotIndex - 1, kSmallest);
    } else {
      return select(pivotIndex + 1, right, kSmallest - length);
    }
  }

  // Work on a copy if you want to preserve original array
  const arrayCopy = arr.slice();
  return select(0, arrayCopy.length - 1, k);
}
