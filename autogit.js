function buildMaxHeap(array) {
  const n = array.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }
}

function heapify(array, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, n, largest);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function heapSort(array) {
  buildMaxHeap(array);
  let n = array.length;

  for (let i = n - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, i, 0);
  }
}
const array = [5, 8, 3, 1, 6, 9, 2, 7, 4];
console.log("Original Array:", array);

heapSort(array);

console.log("Sorted Array:", array);
Original Array: [5, 8, 3, 1, 6, 9, 2, 7, 4]
Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
