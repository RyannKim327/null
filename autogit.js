function heapSort(arr) {
  const n = arr.length;

  // Build Max Heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);

  // Heap sort
  for (let i = n - 1; i >= 0; i--) {
    // Swap the root (max element) with the last element of the array
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i; // Initialize the largest as the root
  const left = 2 * i + 1; // Left child
  const right = 2 * i + 2; // Right child

  // If the left child is larger than the root
  if (left < n && arr[left] > arr[largest])
    largest = left;

  // If the right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest])
    largest = right;

  // If the largest element is not the root
  if (largest !== i) {
    // Swap the root with the largest element
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Example usage:
const array = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(heapSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
