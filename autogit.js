function heapSort(array) {
  // Build max heap
  buildMaxHeap(array);

  // Heapify the array
  for (let i = array.length - 1; i > 0; i--) {
    // Swap the root (maximum value) with the last element of the unsorted portion
    swap(array, 0, i);

    // Ensure the swapped element maintains the max heap property
    heapify(array, 0, i);
  }

  return array;
}

// Build the max heap
function buildMaxHeap(array) {
  const n = array.length;

  // Find the parent of the last element
  const startIdx = Math.floor(n / 2) - 1;

  // Heapify each parent's subtree from the bottom-up
  for (let i = startIdx; i >= 0; i--) {
    heapify(array, i, n);
  }
}

// Heapify a subtree rooted at index i
function heapify(array, i, size) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  // Compare the root with its left child
  if (left < size && array[left] > array[largest]) {
    largest = left;
  }

  // Compare the root or the left child with the right child
  if (right < size && array[right] > array[largest]) {
    largest = right;
  }

  // If a larger element is found, swap it with the root and recursively heapify the affected subtree
  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, largest, size);
  }
}

// Swap two elements in an array
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Usage example
const arr = [5, 2, 9, 1, 7, 6, 4];
console.log(heapSort(arr)); // Output: [1, 2, 4, 5, 6, 7, 9]
