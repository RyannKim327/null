function buildHeap(arr, length, index) {
  let largest = index; // Initialize the largest as the root
  const left = 2 * index + 1; // Left child index
  const right = 2 * index + 2; // Right child index

  // If the left child is larger than the root
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  // If the right child is larger than the largest
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest is not the root
  if (largest !== index) {
    // Swap the largest child with the root
    [arr[index], arr[largest]] = [arr[largest], arr[index]];

    // Recursively heapify the affected sub-tree
    buildHeap(arr, length, largest);
  }
}
function heapSort(arr) {
  const length = arr.length;

  // Build a max heap
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    buildHeap(arr, length, i);
  }

  // Extract elements from the heap one by one
  for (let i = length - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Rebuild the max heap for the remaining elements
    buildHeap(arr, i, 0);
  }

  return arr;
}
const inputArray = [4, 10, 3, 5, 1];
const sortedArray = heapSort(inputArray);

console.log(sortedArray); // Output: [1, 3, 4, 5, 10]
