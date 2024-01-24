function heapify(array, length, index) {
  let largest = index;
  let leftChild = 2 * index + 1;
  let rightChild = 2 * index + 2;

  if (leftChild < length && array[leftChild] > array[largest]) {
    largest = leftChild;
  }

  if (rightChild < length && array[rightChild] > array[largest]) {
    largest = rightChild;
  }

  if (largest !== index) {
    [array[index], array[largest]] = [array[largest], array[index]];
    heapify(array, length, largest);
  }
}

function heapSort(array) {
  const length = array.length;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(array, length, i);
  }

  for (let i = length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
  }

  return array;
}

// Example usage
const arr = [9, 12, 5, 2, 10, 3];
console.log(heapSort(arr)); // Output: [2, 3, 5, 9, 10, 12]
