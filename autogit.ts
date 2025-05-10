function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i >= 0; i--) {
    // Move current root (largest) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr: number[], heapSize: number, rootIndex: number) {
  let largest = rootIndex;
  const left = 2 * rootIndex + 1;
  const right = 2 * rootIndex + 2;

  // If left child exists and is greater than root
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child exists and is greater than largest so far
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
    // Recursively heapify the affected subtree
    heapify(arr, heapSize, largest);
  }
}

// Example usage:
const data = [12, 11, 13, 5, 6, 7];
console.log('Sorted array:', heapSort(data));
