function buildHeap(arr, n, i) {
  let largest = i; // Initialize largest as the root
  let left = 2 * i + 1; // left child
  let right = 2 * i + 2; // right child

  // If the left child is larger than the root
  if (left < n && arr[left] > arr[largest])
    largest = left;

  // If the right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest])
    largest = right;

  // If the largest is not the root
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap elements
    buildHeap(arr, n, largest); // Recursively heapify the affected sub-tree
  }
}

function heapSort(arr) {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    buildHeap(arr, n, i);

  // One by one extract elements from the heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
    buildHeap(arr, i, 0); // Recursively heapify the reduced heap
  }

  return arr;
}
const array = [5, 3, 8, 4, 2, 1];
const sortedArray = heapSort(array);
console.log(sortedArray); // [1, 2, 3, 4, 5, 8]
