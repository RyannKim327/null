function heapSort(arr) {
  const len = arr.length;

  // Build max heap
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }

  // Heap sort
  for (let i = len - 1; i >= 0; i--) {
    // Swap current root with end of the heap
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    // Swap parent with the larger child
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Example usage:
const array = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(heapSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
