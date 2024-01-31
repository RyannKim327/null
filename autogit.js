// Helper function to swap elements in the array
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Heapify takes an array and its length
// and assumes that binary trees at left(i)
// and right(i) are heaps. But the tree rooted
// at index i is not a heap. It applies max heap
// property to restore the heap property in the tree.
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child index
  const right = 2 * i + 2; // Right child index

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
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

// The main function to implement heap sort
function heapSort(arr) {
  const n = arr.length;

  // Build max heap (rearrange the array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    swap(arr, 0, i);

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);

const sortedArr = heapSort(arr);
console.log("Sorted array:", sortedArr);
