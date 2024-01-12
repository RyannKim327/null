function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child
  let right = 2 * i + 2; // Right child

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
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
    heapify(arr, n, largest); // Recursively heapify the affected sub-tree
  }
}

function buildMaxHeap(arr) {
  const n = arr.length;

  // Build heap (re-arrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}
function heapSort(arr) {
  const n = arr.length;

  // Build max-heap
  buildMaxHeap(arr);

  // Extract elements from the heap one by one
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap current root with element at the end
    heapify(arr, i, 0); // Heapify the reduced heap
  }

  return arr;
}
const array = [5, 1, 4, 2, 8];
console.log(heapSort(array)); // Output: [1, 2, 4, 5, 8]
