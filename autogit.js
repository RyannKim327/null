function heapSort(arr) {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Heap sort
  for (let i = n - 1; i > 0; i--) {
    // Swap root element with the last element
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// Example usage:
const array = [9, 4, 2, 7, 1, 5, 6, 3, 8];
console.log(heapSort(array)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
