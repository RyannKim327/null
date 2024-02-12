// Function to heapify a subtree rooted at index i in an array of size n
function heapify(arr, n, i) {
  let largest = i;
  const leftChild = 2 * i + 1;
  const rightChild = 2 * i + 2;

  if (leftChild < n && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (largest !== i) {
    // Swap root with the largest element
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected subtree
    heapify(arr, n, largest);
  }
}

// Main function to perform heap sort
function heapSort(arr) {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const array = [4, 10, 3, 5, 1];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [1, 3, 4, 5, 10]
