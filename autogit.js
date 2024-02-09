// Heapify function to create a max heap
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child position
  let right = 2 * i + 2; // Right child position

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest])
    largest = left;

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest])
    largest = right;

  // If largest is not root
  if (largest !== i) {
    // Swapping elements
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Heap Sort function
function heapSort(arr) {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);

  // Heap Sort
  for (let i = n - 1; i > 0; i--) {
    // Swap the root node with the last element
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const array = [5, 9, 3, 1, 8, 7];
console.log("Input array:", array);
console.log("Sorted array:", heapSort(array));
