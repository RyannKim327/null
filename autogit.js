// Helper function to swap values in an array
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Function to maintain the max heap property of the heap tree
function heapify(array, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child
  const right = 2 * i + 2; // Right child

  // If left child is larger than root
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // If right child is larger than the largest so far
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, n, largest);
  }
}

// Main heap sort function
function heapSort(array) {
  const n = array.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  // Heap sort
  for (let i = n - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, i, 0);
  }

  return array;
}

// Testing the heap sort algorithm
const arr = [12, 11, 13, 5, 6, 7];
const sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [5, 6, 7, 11, 12, 13]
