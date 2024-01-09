function buildHeap(arr, n, i) {
  let largest = i; // Initialize largest as the root
  let left = 2 * i + 1; // Left child index
  let right = 2 * i + 2; // Right child index

  // If the left child is larger than the root
  if (left < n && arr[left] > arr[largest])
    largest = left;

  // If the right child is larger than the current largest
  if (right < n && arr[right] > arr[largest])
    largest = right;

  // If the largest is not the root
  if (largest !== i) {
    // Swap the root with the largest element
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    buildHeap(arr, n, largest);
  }
}
function heapSort(arr) {
  const n = arr.length;

  // Build a max-heap (rearrange the array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    buildHeap(arr, n, i);

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Call max heapify on the reduced heap
    buildHeap(arr, i, 0);
  }

  return arr;
}
const array = [4, 10, 3, 5, 1];
const sortedArray = heapSort(array);
console.log(sortedArray); // Outputs: [1, 3, 4, 5, 10]
