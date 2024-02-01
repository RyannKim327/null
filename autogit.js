// Heapify the given array
function heapify(arr, n, i) {
  let largest = i; // Initialize the largest as the root
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If the left child is larger than the root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If the right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest is not the root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap the elements

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Heap sort function
function heapSort(arr) {
  const n = arr.length;

  // Build the heap (rearrange the array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move the current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}


// Usage example
const array = [5, 8, 2, 1, 6, 3, 7, 4];
const sortedArray = heapSort(array);
console.log(sortedArray);
