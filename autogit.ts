function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Convert the array into a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root (largest) to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr; // now sorted in ascending order
}

function heapify(arr: number[], heapSize: number, rootIndex: number) {
  let largest = rootIndex;
  const left = 2 * rootIndex + 1;
  const right = 2 * rootIndex + 2;

  // If left child is larger than root
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than current largest
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root, swap and continue heapifying
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
    heapify(arr, heapSize, largest);
  }
}

// Example
const numbers = [12, 11, 13, 5, 6, 7];
console.log(heapSort(numbers)); // [5, 6, 7, 11, 12, 13]
