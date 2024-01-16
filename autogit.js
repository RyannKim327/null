function buildMaxHeap(arr) {
  const len = arr.length;
  
  // Start from the first non-leaf node (Math.floor(len/2) - 1) to the root (index 0)
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
}

function heapify(arr, len, idx) {
  let largest = idx; 
  const left = 2 * idx + 1; 
  const right = 2 * idx + 2; 

  // Check if left child is larger than root
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  // Check if right child is larger than current largest
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  // Swap root with largest element if necessary
  if (largest !== idx) {
    [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
    
    // Recursively heapify the affected sub-tree
    heapify(arr, len, largest);
  }
}
function heapSort(arr) {
  const len = arr.length;

  // Build the max heap
  buildMaxHeap(arr);

  // Extract elements from the heap one by one
  for (let i = len - 1; i > 0; i--) {
    // Swap current root (largest element) with the last element
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Reduce the heap size and heapify the root element
    heapify(arr, i, 0);
  }
}
const arr = [4, 10, 3, 5, 1];
heapSort(arr);
console.log(arr); // Output: [1, 3, 4, 5, 10]
