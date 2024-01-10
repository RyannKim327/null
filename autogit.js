function heapSort(arr) {
  // Build max heap
  buildMaxHeap(arr);

  // Heapify index by index from the end of the array
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap the root (maximum value) of the heap with the last element
    swap(arr, 0, i);

    // Heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function buildMaxHeap(arr) {
  const n = arr.length;

  // Build a max heap by starting from the last non-leaf node index
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child
  const right = 2 * i + 2; // Right child

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than root
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    swap(arr, i, largest);

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage:
const array = [9, 6, 5, 2, 8, 3, 1, 7, 4];
console.log("Original array:", array);
console.log("Sorted array:", heapSort(array));
