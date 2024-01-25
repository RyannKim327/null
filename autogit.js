function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child index
  let right = 2 * i + 2; // Right child index

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not the root
  if (largest !== i) {
    // Swap arr[i] and arr[largest]
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}
function heapSort(arr) {
  const n = arr.length;

  // Build the heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract an element from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root element to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}
const array = [5, 12, 3, 19, 15];
console.log("Original Array:", array);

const sortedArray = heapSort(array);
console.log("Sorted Array:", sortedArray);
