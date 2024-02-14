function findKthSmallestWithSorting(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k];
}
function findKthSmallestWithMinHeap(arr, k) {
  // Create a min heap
  const heap = new MinHeap();

  // Insert all elements into the min heap
  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }

  // Extract the minimum k times
  let result = null;
  for (let i = 0; i <= k; i++) {
    result = heap.extractMin();
  }

  return result;
}
