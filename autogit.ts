function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Heapify a subtree rooted with node i which is an index in arr[]
  // n is size of heap
  function heapify(arr: number[], n: number, i: number) {
    let largest = i;          // Initialize largest as root
    const left = 2 * i + 1;   // left child index
    const right = 2 * i + 2;  // right child index

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // If right child is larger than the current largest
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // If largest is not root
    if (largest !== i) {
      // Swap root and largest
      [arr[i], arr[largest]] = [arr[largest], arr[i]];

      // Recursively heapify the affected subtree
      heapify(arr, n, largest);
    }
  }

  // Build a maxheap by heapifying from bottom non-leaf nodes up
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Swap current root (largest) with the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}
const myArray = [12, 11, 13, 5, 6, 7];
console.log(heapSort(myArray)); // Output: [5, 6, 7, 11, 12, 13]
