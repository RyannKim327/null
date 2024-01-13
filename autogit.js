// Heapify a subtree rooted with the index 'n'
// i is the size of the heap
function heapify(arr, i, n) {
  let largest = n; // Initialize largest as root
  const left = 2 * n + 1; // Left child
  const right = 2 * n + 2; // Right child

  // Find the largest element among the root and its left/right children
  if (left < i && arr[left] > arr[largest])
    largest = left;
  
  if (right < i && arr[right] > arr[largest])
    largest = right;
  
  // If the largest element is not the root, swap it
  if (largest !== n) {
    [arr[n], arr[largest]] = [arr[largest], arr[n]];

    // Recursively heapify the affected sub-tree
    heapify(arr, i, largest);
  }
}

function heapSort(arr) {
  const len = arr.length;

  // Build a heap using the entire array
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--)
    heapify(arr, len, i);

  // Extract elements from the heap one by one
  for (let i = len - 1; i >= 0; i--) {
    // Swap the root (maximum value) with the last element
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Usage example:
const array = [8, 5, 2, 9, 5, 6, 3];
console.log(heapSort(array));
