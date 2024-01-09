function heapify(arr, heapSize, rootIndex) {
  let largest = rootIndex;
  const leftChildIndex = 2 * rootIndex + 1;
  const rightChildIndex = 2 * rootIndex + 2;
  
  if (leftChildIndex < heapSize && arr[leftChildIndex] > arr[largest]) {
    largest = leftChildIndex;
  }
  
  if (rightChildIndex < heapSize && arr[rightChildIndex] > arr[largest]) {
    largest = rightChildIndex;
  }
  
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
    heapify(arr, heapSize, largest);
  }
}

function heapSort(arr) {
  const len = arr.length;
  
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
  
  for (let i = len - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  
  return arr;
}

// Example usage:
const myArray = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArray = heapSort(myArray);
console.log(sortedArray);
