class HeapSort {
  // Main heap sort method
  static sort(arr: number[]): number[] {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      [arr[0], arr[i]] = [arr[i], arr[0]];

      // Call max heapify on the reduced heap
      this.heapify(arr, i, 0);
    }

    return arr;
  }

  // Heapify a subtree rooted with node i
  private static heapify(arr: number[], n: number, i: number): void {
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
      // Swap
      [arr[i], arr[largest]] = [arr[largest], arr[i]];

      // Recursively heapify the affected sub-tree
      this.heapify(arr, n, largest);
    }
  }
}

// Example usage
const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log("Unsorted array:", unsortedArray);
const sortedArray = HeapSort.sort(unsortedArray);
console.log("Sorted array:", sortedArray);
const arr = [64, 34, 25, 12, 22, 11, 90];
const sorted = HeapSort.sort(arr);
console.log(sorted); // [11, 12, 22, 25, 34, 64, 90]
