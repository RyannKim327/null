function heapSort(array) {
  const arrayLength = array.length;

  // Build Max Heap
  for (let i = Math.floor(arrayLength / 2) - 1; i >= 0; i--) {
    heapify(array, arrayLength, i);
  }

  // Heap sort
  for (let i = arrayLength - 1; i > 0; i--) {
    // Swap the root (max element) with the last element of the array
    [array[0], array[i]] = [array[i], array[0]];

    // Heapify the reduced heap
    heapify(array, i, 0);
  }

  return array;
}

function heapify(array, heapSize, rootIndex) {
  let largestIndex = rootIndex;
  const leftChildIndex = 2 * rootIndex + 1;
  const rightChildIndex = 2 * rootIndex + 2;

  // Compare the root with the left child
  if (leftChildIndex < heapSize && array[leftChildIndex] > array[largestIndex]) {
    largestIndex = leftChildIndex;
  }

  // Compare the root with the right child
  if (rightChildIndex < heapSize && array[rightChildIndex] > array[largestIndex]) {
    largestIndex = rightChildIndex;
  }

  // If the largest value is not the root, swap them and heapify the affected subtree
  if (largestIndex !== rootIndex) {
    [array[rootIndex], array[largestIndex]] = [array[largestIndex], array[rootIndex]];
    heapify(array, heapSize, largestIndex);
  }
}

// Example usage:
const arr = [5, 9, 3, 1, 8, 6, 4, 2, 7];
console.log('Original array:', arr);
console.log('Sorted array:', heapSort(arr));
