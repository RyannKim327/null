function kthSmallest_sort(arr: number[], k: number): number | null {
  if (k < 1 || k > arr.length) return null;  // handle invalid k
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
function kthSmallest_quickselect(arr: number[], k: number): number | null {
  if (k < 1 || k > arr.length) return null;

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

  function select(left: number, right: number, kSmallest: number): number {
    if (left === right) return arr[left];

    // Choose a random pivot index between left and right
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));

    const pivotFinalIndex = partition(left, right, pivotIndex);

    if (kSmallest === pivotFinalIndex) {
      return arr[kSmallest];
    } else if (kSmallest < pivotFinalIndex) {
      return select(left, pivotFinalIndex - 1, kSmallest);
    } else {
      return select(pivotFinalIndex + 1, right, kSmallest);
    }
  }

  return select(0, arr.length - 1, k - 1);
}
