function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Heapify subtree rooted at index i, size is heap size n
  function heapify(arr: number[], n: number, i: number) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i >= 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const numbers = [12, 11, 13, 5, 6, 7];
console.log(heapSort(numbers));  // Output will be a sorted array
