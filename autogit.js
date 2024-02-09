function heapSort(array) {
  // Build max heap
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }

  // Heap sort
  for (let i = array.length - 1; i > 0; i--) {
    // Swap the root with the last element
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    // Heapify the reduced heap
    heapify(array, i, 0);
  }

  return array;
}

function heapify(array, heapSize, index) {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  // Check if left child is larger than root
  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  // Check if right child is larger than the largest so far
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  // If the largest is not the root, swap and heapify the affected subtree
  if (largest !== index) {
    let temp = array[index];
    array[index] = array[largest];
    array[largest] = temp;

    // Recursively heapify the affected subtree
    heapify(array, heapSize, largest);
  }
}
const array = [9, 3, 7, 1, 2, 8, 5];
const sortedArray = heapSort(array);
console.log(sortedArray);  // Output: [1, 2, 3, 5, 7, 8, 9]
