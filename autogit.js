// Heap Sort implementation
function heapSort(arr) {
  const len = arr.length;

  // Build max heap
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }

  // Heap sort
  for (let i = len - 1; i >= 0; i--) {
    // Swap root with current element
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify root element
    heapify(arr, i, 0);
  }

  return arr;
}

// Heapify a subtree rooted with the index i
function heapify(arr, len, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // Check if left child is larger than root
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  // Check if right child is larger than largest so far
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not the root, swap and heapify the affected sub-tree
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, len, largest);
  }
}

// Example usage
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArr = heapSort(arr);
console.log(sortedArr);  // [1, 2, 3, 4, 5, 6, 7, 8]
