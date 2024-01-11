function buildMaxHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}
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
    swap(arr, largestIndex, rootIndex);
    heapify(arr, heapSize, largestIndex);
  }
}
function heapSort(arr) {
  const n = arr.length;

  buildMaxHeap(arr);

  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const unsortedArray = [6, 3, 8, 5, 2];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 5, 6, 8]
