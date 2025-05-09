function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Heapify a subtree rooted at index i
  function heapify(n: number, i: number) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
      heapify(n, largest);
    }
  }

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  // One by one extract elements
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap current root to the end
    heapify(i, 0); // Heapify reduced heap
  }

  return arr;
}

// Example usage:
const nums = [12, 11, 13, 5, 6, 7];
console.log(heapSort(nums)); // Output: [5, 6, 7, 11, 12, 13]
