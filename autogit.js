// Heapify the array
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child
  let right = 2 * i + 2; // Right child

  if (left < n && arr[left] > arr[largest])
    largest = left;

  if (right < n && arr[right] > arr[largest])
    largest = right;

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, n, largest);
  }
}

// Swap two elements in an array
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// The main function to perform heap sort
function heapSort(arr) {
  let n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}

// Test the code
let arr = [12, 11, 13, 5, 6, 7];
console.log(`Original Array: ${arr}`);
heapSort(arr);
console.log(`Sorted Array: ${arr}`);
