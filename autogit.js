function heapSort(arr) {
  // Build max heap
  buildMaxHeap(arr);

  // Extract the root element (largest) from the heap one by one
  for (let i = arr.length - 1; i > 0; i--) {
    // Move current root to the end (swapping)
    swap(arr, 0, i);

    // Max heapify the reduced heap
    maxHeapify(arr, 0, i);
  }

  return arr;
}

function buildMaxHeap(arr) {
  const n = arr.length;

  // Start from the first non-leaf node and max heapify all nodes
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, n);
  }
}

function maxHeapify(arr, i, size) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  // Find the largest element among root, left child, and right child
  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest element is not the root, swap them
  if (largest !== i) {
    swap(arr, i, largest);

    // Recursively max heapify the affected sub-tree
    maxHeapify(arr, largest, size);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage:
const array = [12, 11, 13, 5, 6, 7];
console.log(heapSort(array)); // [5, 6, 7, 11, 12, 13]
