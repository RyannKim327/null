function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest])
    largest = left;

  if (right < n && arr[right] > arr[largest])
    largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}


function buildHeap(arr, n) {
  let startIdx = Math.floor(n / 2) - 1;

  for (let i = startIdx; i >= 0; i--) {
    heapify(arr, n, i);
  }
}
function heapSort(arr) {
  let n = arr.length;

  buildHeap(arr, n);

  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}
let array = [7, 2, 4, 1, 5, 3];
heapSort(array);
console.log(array); // [1, 2, 3, 4, 5, 7]
