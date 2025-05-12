function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root (largest) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// To maintain the max heap property for subtree rooted at index i
function heapify(arr: number[], heapSize: number, i: number): void {
  let largest = i;            // Initialize largest as root
  const left = 2 * i + 1;     // Left child index
  const right = 2 * i + 2;    // Right child index

  // If left child is larger than root
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected subtree
    heapify(arr, heapSize, largest);
  }
}

// Example usage:
const array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // Output: [1, 3, 4, 5, 10]
