function heapify(array, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // left child
  let right = 2 * i + 2; // right child

  // If left child is larger than root
  if (left < n && array[left] > array[largest])
    largest = left;

  // If right child is larger than largest so far
  if (right < n && array[right] > array[largest])
    largest = right;

  // If largest is not root
  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]]; // swap elements
    heapify(array, n, largest); // recursively heapify the affected sub-tree
  }
}

function heapSort(array) {
  const n = array.length;

  // Build max-heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(array, n, i);

  // Extract elements from heap one by one
  for (let i = n - 1; i >= 0; i--) {
    [array[0], array[i]] = [array[i], array[0]]; // move current root to end
    heapify(array, i, 0); // recursively heapify reduced heap
  }

  return array;
}
const array = [7, 3, 9, 2, 6];
const sortedArray = heapSort(array);
console.log(sortedArray); // [2, 3, 6, 7, 9]
