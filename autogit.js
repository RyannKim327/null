function buildHeap(arr) {
  var heapSize = arr.length;
  for (var i = Math.floor(heapSize / 2); i >= 0; i--) {
    heapify(arr, heapSize, i);
  }
}
function heapify(arr, heapSize, i) {
  var largest = i;
  var leftChild = 2 * i + 1;
  var rightChild = 2 * i + 2;

  if (leftChild < heapSize && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < heapSize && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, heapSize, largest);
  }
}
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function heapSort(arr) {
  buildHeap(arr);
  var heapSize = arr.length;

  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapSize--;
    heapify(arr, heapSize, 0);
  }
}
var array = [6, 5, 3, 1, 8, 7, 2, 4];
heapSort(array);
console.log(array);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
