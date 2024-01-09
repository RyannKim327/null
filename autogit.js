function heapify(arr, n, i) {
  let largest = i; // Assume the current index i has the largest value
  const left = 2 * i + 1; // Calculate the left child index
  const right = 2 * i + 2; // Calculate the right child index

  // If the left child is larger than the current largest index
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If the right child is larger than the current largest index
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest element is not the current index, swap them
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

function buildHeap(arr, n, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    buildHeap(arr, n, largest);
  }
}
function heapSort(arr) {
  const n = arr.length;

  // Build a max-heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    buildHeap(arr, n, i);
  }

  // One by one extract elements from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}
const array = [5, 8, 2, 1, 6, 3, 9, 4, 7];
console.log(heapSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
