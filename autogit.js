// Helper function to swap elements in an array
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Function to heapify a subtree rooted at index `i` in the given array
function heapify(array, n, i) {
  let largest = i; // Initialize largest as the root
  const left = 2 * i + 1; // Left child index
  const right = 2 * i + 2; // Right child index

  // If the left child is larger than the root
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // If the right child is larger than the largest so far
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If the largest element is not the root
  if (largest !== i) {
    swap(array, i, largest);
    // Recursively heapify the affected sub-tree
    heapify(array, n, largest);
  }
}

// The main function to perform heap sort
function heapSort(array) {
  const n = array.length;

  // Build the max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move the current root (largest) element to the end
    swap(array, 0, i);
    // Call heapify on the reduced heap
    heapify(array, i, 0);
  }

  return array;
}

// Example usage
const arr = [9, 4, 7, 2, 1, 6, 5, 3, 8];
console.log(heapSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
