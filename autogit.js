function heapify(array, length, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < length && array[left] > array[largest]) {
    largest = left;
  }

  if (right < length && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, length, largest);
  }
}
function heapSort(array) {
  const length = array.length;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(array, length, i);
  }

  for (let i = length - 1; i >= 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
  }

  return array;
}
const arr = [5, 8, 2, 1, 6];

console.log("Original Array:", arr);

const sortedArr = heapSort(arr);

console.log("Sorted Array:", sortedArr);
Original Array: [5, 8, 2, 1, 6]
Sorted Array: [1, 2, 5, 6, 8]
