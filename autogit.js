function heapSort(array) {
  const len = array.length;

  // Build max heap
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(array, len, i);
  }

  // Heap sort
  for (let i = len - 1; i >= 0; i--) {
    // Swap root (maximum element) with the last element
    [array[0], array[i]] = [array[i], array[0]];

    // Heapify the reduced heap
    heapify(array, i, 0);
  }

  return array;
}

function heapify(array, len, rootIndex) {
  let largestIndex = rootIndex;
  const leftChildIndex = 2 * rootIndex + 1;
  const rightChildIndex = 2 * rootIndex + 2;

  // Compare with left child
  if (leftChildIndex < len && array[leftChildIndex] > array[largestIndex]) {
    largestIndex = leftChildIndex;
  }

  // Compare with right child
  if (
    rightChildIndex < len &&
    array[rightChildIndex] > array[largestIndex]
  ) {
    largestIndex = rightChildIndex;
  }

  // Swap and heapify if needed
  if (largestIndex !== rootIndex) {
    [array[rootIndex], array[largestIndex]] = [
      array[largestIndex],
      array[rootIndex],
    ];
    heapify(array, len, largestIndex);
  }
}
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArray = heapSort(arr);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
