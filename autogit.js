function buildHeap(arr, n, i) {
  let largest = i; // Initialize largest as the root
  let left = 2 * i + 1; // Left child
  let right = 2 * i + 2; // Right child

  // If the left child is larger than root
  if (left < n && arr[left] > arr[largest])
    largest = left;

  // If the right child is larger than largest so far
  if (right < n && arr[right] > arr[largest])
    largest = right;

  // If largest is not the root
  if (largest !== i) {
    // Swap the root with the largest element
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    buildHeap(arr, n, largest);
  }
}
function heapSort(arr) {
  const n = arr.length;

  // Build Max Heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    buildHeap(arr, n, i);

  // Heap sort
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    buildHeap(arr, i, 0);
  }

  return arr;
}
const array = [8, 5, 2, 9, 6, 3];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [2, 3, 5, 6, 8, 9]
