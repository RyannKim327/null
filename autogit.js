function heapify(array, size, index) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < size && array[left] > array[largest]) {
    largest = left;
  }

  if (right < size && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    [array[index], array[largest]] = [array[largest], array[index]];
    heapify(array, size, largest);
  }
}

function buildMaxHeap(array) {
  const size = array.length;

  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify(array, size, i);
  }
}
function heapSort(array) {
  const size = array.length;

  buildMaxHeap(array);

  for (let i = size - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
  }

  return array;
}
const array = [5, 9, 2, 1, 6, 3];
console.log(heapSort(array)); // Output: [1, 2, 3, 5, 6, 9]
