function heapSort(arr: number[]): number[] {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr: number[], heapSize: number, rootIndex: number): void {
  let largest = rootIndex; // Initialize largest as root
  const left = 2 * rootIndex + 1;
  const right = 2 * rootIndex + 2;

  // If left child is larger than root
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
    // Recursively heapify the affected sub-tree
    heapify(arr, heapSize, largest);
  }
}

// Example usage:
const array = [12, 11, 13, 5, 6, 7];
console.log('Sorted array:', heapSort(array));
