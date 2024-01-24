// Function to perform Heap Sort
function heapSort(arr) {
  const n = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// To heapify a subtree rooted with node i which is an index in arr[]. n is the size of the heap
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child index
  const right = 2 * i + 2; // Right child index

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than current largest
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Example usage:
const array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("Original Array:", array);
console.log("Sorted Array:", heapSort(array));
