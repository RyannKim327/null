function heapSort(arr) {
  let heapSize = arr.length;

  // Build max heap
  buildMaxHeap(arr, heapSize);

  for (let i = arr.length - 1; i > 0; i--) {
    // Swap root (max element) with the last element
    swap(arr, 0, i);

    // Reduce heap size and heapify root element
    heapSize--;
    maxHeapify(arr, 0, heapSize);
  }

  return arr;
}

function buildMaxHeap(arr, size) {
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, size);
  }
}

function maxHeapify(arr, index, size) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== index) {
    swap(arr, index, largest);
    maxHeapify(arr, largest, size);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage
const inputArray = [4, 8, 2, 10, 5, 1, 7, 3, 6, 9];
const sortedArray = heapSort(inputArray);
console.log(sortedArray);
