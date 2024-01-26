function heapify(arr, n, i) {
  let largest = i; // Assume the current node is the largest
  let left = 2 * i + 1; // Left child index
  let right = 2 * i + 2; // Right child index

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest])
    largest = left;

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest])
    largest = right;

  // If the largest is not the root
  if (largest !== i) {
    swap(arr, i, largest);

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}
function heapSort(arr) {
  const n = arr.length;

  // Build Max-Heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);

  // Perform Heap Sort
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    swap(arr, 0, i);

    // Reduce heap size and heapify the root element
    heapify(arr, i, 0);
  }

  return arr;
}
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
const arr = [7, 2, 6, 3, 8, 5];
console.log(heapSort(arr)); // [2, 3, 5, 6, 7, 8]
