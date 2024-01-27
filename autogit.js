function heapify(arr, n, i) {
  let largest = i; // Initialize the largest element as the root
  const left = 2 * i + 1; // Left child position
  const right = 2 * i + 2; // Right child position

  // If the left child is larger than the root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If the right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest element is not the root
  if (largest !== i) {
    // Swap the largest element with the root
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  // Build the heap (rearrange the array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const arr = [7, 3, 2, 8, 1, 9, 4];
const sortedArr = heapSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 7, 8, 9]
