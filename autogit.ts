function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end (swap)
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr: number[], heapSize: number, rootIndex: number) {
  let largest = rootIndex;
  const leftChild = 2 * rootIndex + 1;
  const rightChild = 2 * rootIndex + 2;

  // If left child is larger than root
  if (leftChild < heapSize && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  // If right child is larger than largest so far
  if (rightChild < heapSize && arr[rightChild] > arr[largest]) {
    largest = rightChild;
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
console.log('Original array:', array);
const sortedArray = heapSort(array);
console.log('Sorted array:', sortedArray);
