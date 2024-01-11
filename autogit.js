function heapSort(array) {
  // Convert the array into a max heap
  buildMaxHeap(array);

  // One by one extract elements from the heap
  for (let i = array.length - 1; i > 0; i--) {
    // Move the current root (maximum value) to the end of the array
    [array[0], array[i]] = [array[i], array[0]];

    // Call maxHeapify on the reduced heap to maintain the max heap property
    maxHeapify(array, i, 0);
  }

  return array;
}

function buildMaxHeap(array) {
  const length = array.length;
  const lastNonLeafIndex = Math.floor(length / 2) - 1;

  for (let i = lastNonLeafIndex; i >= 0; i--) {
    maxHeapify(array, length, i);
  }
}

function maxHeapify(array, size, index) {
  let largest = index;
  const leftChild = 2 * index + 1;
  const rightChild = 2 * index + 2;

  if (leftChild < size && array[leftChild] > array[largest]) {
    largest = leftChild;
  }

  if (rightChild < size && array[rightChild] > array[largest]) {
    largest = rightChild;
  }

  if (largest !== index) {
    [array[index], array[largest]] = [array[largest], array[index]];
    maxHeapify(array, size, largest);
  }
}
const array = [4, 10, 3, 5, 1];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [1, 3, 4, 5, 10]
