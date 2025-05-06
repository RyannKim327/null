function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Helper function to heapify a subtree rooted at index i
  // n is the size of the heap
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

  // Extract elements one by one from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root (max) to end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // [1, 3, 4, 5, 10]
