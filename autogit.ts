function kthSmallest(arr: number[], k: number): number | null {
  if (k < 1 || k > arr.length) return null;
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
class MaxHeap {
  heap: number[] = [];

  // Methods: insert, extractMax, peek, size ...
  // (Implementation omitted here for brevity)
}

function kthSmallest(arr: number[], k: number): number | null {
  if (k < 1 || k > arr.length) return null;
  const maxHeap = new MaxHeap();

  for (const num of arr) {
    if (maxHeap.size() < k) {
      maxHeap.insert(num);
    } else if (num < maxHeap.peek()) {
      maxHeap.extractMax();
      maxHeap.insert(num);
    }
  }

  return maxHeap.peek();
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

function partition(arr: number[], left: number, right: number): number {
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

function kthSmallest(arr: number[], k: number): number | null {
  if (k < 1 || k > arr.length) return null;
  // note k-1 for zero-based index
  return quickselect(arr.slice(), 0, arr.length - 1, k - 1);
}
