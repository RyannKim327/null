// Main function to implement Heap Sort
function heapSort(arr) {
  // Build Max Heap
  buildMaxHeap(arr);
  
  // Heapify the remaining elements
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap root (max element) with the last element
    [arr[i], arr[0]] = [arr[0], arr[i]];
    
    // Heapify the root element
    maxHeapify(arr, i, 0);
  }
  
  return arr;
}

// Function to build a Max Heap
function buildMaxHeap(arr) {
  const n = arr.length;
  const startIdx = Math.floor(n / 2) - 1;

  // Heapify each non-leaf node in reverse order
  for (let i = startIdx; i >= 0; i--) {
    maxHeapify(arr, n, i);
  }
}

// Function to heapify a subtree rooted at index i
function maxHeapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child index
  const right = 2 * i + 2; // Right child index

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  // If right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    // Swap the root with the largest element
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    
    // Recursively heapify the affected sub-tree
    maxHeapify(arr, n, largest);
  }
}

// Example usage
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log('Input:', arr);
const sortedArr = heapSort(arr);
console.log('Sorted Output:', sortedArr);
