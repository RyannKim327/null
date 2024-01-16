function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1;
  let right = 2 * i + 2;

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
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap elements
    heapify(arr, n, largest); // Recursively heapify the affected sub-tree
  }
}

function buildHeap(arr) {
  const n = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}
function heapSort(arr) {
  const n = arr.length;

  // Build max heap (rearrange array)
  buildHeap(arr);

  // Extract elements from max heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
}
const arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log('Sorted array:', arr);
Sorted array: [5, 6, 7, 11, 12, 13]
