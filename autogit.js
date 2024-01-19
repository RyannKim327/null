function buildHeap(array) {
  const length = array.length;
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(array, length, i);
  }
}
function heapify(array, length, index) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < length && array[left] > array[largest]) {
    largest = left;
  }

  if (right < length && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, length, largest);
  }
}
function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
function heapSort(array) {
  buildHeap(array);
  let length = array.length;

  for (let i = length - 1; i > 0; i--) {
    swap(array, 0, i);
    length--;
    heapify(array, length, 0);
  }

  return array;
}
const array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // Output: [1, 3, 4, 5, 10]
