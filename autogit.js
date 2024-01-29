function findKthSmallest(arr, k) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  // Return the kth smallest element
  return arr[k - 1];
}

// Example usage
const arr = [9, 5, 2, 7, 1, 8];
const k = 3;
console.log(findKthSmallest(arr, k)); // Output: 5
function Heapify(arr, i, length) {
  let smallest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < length && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < length && arr[right] < arr[smallest]) {
    smallest = right;
  }

  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    Heapify(arr, smallest, length);
  }
}

function buildMinHeap(arr) {
  const length = arr.length;
  const start = Math.floor(length / 2);

  for (let i = start; i >= 0; i--) {
    Heapify(arr, i, length);
  }

  return arr;
}

function findKthSmallest(arr, k) {
  // Build a min heap
  buildMinHeap(arr);

  // Extract the smallest element k times
  for (let i = 0; i < k - 1; i++) {
    arr.shift(); // Remove the smallest element from the heap
    buildMinHeap(arr); // Rebuild the heap after removing an element
  }

  // Return the kth smallest element
  return arr[0];
}

// Example usage
const arr = [9, 5, 2, 7, 1, 8];
const k = 3;
console.log(findKthSmallest(arr, k)); // Output: 5
