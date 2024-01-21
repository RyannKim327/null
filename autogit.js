function heapSort(arr) {
  // Build a max heap from the array
  buildMaxHeap(arr);

  // Heapify the array from the end to the beginning
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap the root (maximum value) of the heap with the last element of the array
    swap(arr, 0, i);

    // Perform max heapify on the reduced heap
    heapify(arr, 0, i);
  }

  return arr;
}

function buildMaxHeap(arr) {
  // Start from the first non-leaf node
  const startIndex = Math.floor(arr.length / 2) - 1;

  // Perform max heapify on each parent node from the end to the beginning
  for (let i = startIndex; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
}

function heapify(arr, index, heapSize) {
  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;
  let largestIndex = index;

  // Find the largest element among the parent, left child, and right child
  if (leftIndex < heapSize && arr[leftIndex] > arr[largestIndex]) {
    largestIndex = leftIndex;
  }
  if (rightIndex < heapSize && arr[rightIndex] > arr[largestIndex]) {
    largestIndex = rightIndex;
  }

  // If the largest element is not the parent, swap it with the parent and recursively heapify the affected sub-tree
  if (largestIndex !== index) {
    swap(arr, index, largestIndex);
    heapify(arr, largestIndex, heapSize);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const array = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
