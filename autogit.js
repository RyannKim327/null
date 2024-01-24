function buildMaxHeap(array, length, rootIndex) {
  let largest = rootIndex;
  const leftChild = 2 * rootIndex + 1;
  const rightChild = 2 * rootIndex + 2;

  if (leftChild < length && array[leftChild] > array[largest])
    largest = leftChild;

  if (rightChild < length && array[rightChild] > array[largest])
    largest = rightChild;

  if (largest !== rootIndex) {
    [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];
    buildMaxHeap(array, length, largest);
  }
}
function heapSort(array) {
  const length = array.length;

  // Build max heap
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--)
    buildMaxHeap(array, length, i);

  // Heap sort
  for (let i = length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    buildMaxHeap(array, i, 0);
  }

  return array;
}
const array = [8, 5, 2, 9, 5, 6, 3];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [2, 3, 5, 5, 6, 8, 9]
