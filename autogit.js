function heapSort(array) {
  // Build max heap
  buildMaxHeap(array);

  // Heapify the array
  for (let i = array.length - 1; i >= 0; i--) {
    // Swap root (maximum element) with the last element in the heap
    [array[0], array[i]] = [array[i], array[0]];

    // Heapify the reduced heap
    heapify(array, 0, i);
  }

  return array;
}

function buildMaxHeap(array) {
  const n = array.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, i, n);
  }
}

function heapify(array, i, heapSize) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    // Swap array[i] with array[largest]
    [array[i], array[largest]] = [array[largest], array[i]];

    // Recursively heapify the affected sub-tree
    heapify(array, largest, heapSize);
  }
}
const array = [7, 3, 1, 5, 2];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 5, 7]
