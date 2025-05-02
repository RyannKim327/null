function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Heapify subtree rooted at index i in array of size n
  function heapify(arr: number[], n: number, i: number) {
    let largest = i;          // Initialize largest as root
    const left = 2 * i + 1;   // Left child index
    const right = 2 * i + 2;  // Right child index

    // If left child exists and is greater than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // If right child exists and is greater than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end (swap)
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call heapify on reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const nums = [12, 11, 13, 5, 6, 7];
console.log(heapSort(nums));  // Output: [5, 6, 7, 11, 12, 13]
