function heapify(arr, heapSize, rootIndex) {
  let largestIndex = rootIndex;
  const leftChildIndex = 2 * rootIndex + 1;
  const rightChildIndex = 2 * rootIndex + 2;

  if (leftChildIndex < heapSize && arr[leftChildIndex] > arr[largestIndex]) {
    largestIndex = leftChildIndex;
  }

  if (rightChildIndex < heapSize && arr[rightChildIndex] > arr[largestIndex]) {
    largestIndex = rightChildIndex;
  }

  if (largestIndex !== rootIndex) {
    [arr[rootIndex], arr[largestIndex]] = [arr[largestIndex], arr[rootIndex]];
    heapify(arr, heapSize, largestIndex);
  }
}

function heapSort(arr) {
  const heapSize = arr.length;

  // Build max heap
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    heapify(arr, heapSize, i);
  }

  // Sort the heap
  for (let i = heapSize - 1; i >= 1; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const array = [7, 1, 4, 3, 8, 5];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [1, 3, 4, 5, 7, 8]
