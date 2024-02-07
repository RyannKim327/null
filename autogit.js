function heapify(arr, length, index) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, length, largest);
  }
}

function buildHeap(arr) {
  const length = arr.length;
  const mid = Math.floor(length / 2);

  for (let i = mid; i >= 0; i--) {
    heapify(arr, length, i);
  }
}
function heapSort(arr) {
  buildHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}
const array = [5, 3, 8, 4, 2, 1, 10];
console.log(heapSort(array)); // Output: [1, 2, 3, 4, 5, 8, 10]
