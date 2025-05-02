function merge(arr: number[], left: number, mid: number, right: number): void {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArr = new Array(n1);
  const rightArr = new Array(n2);

  for (let i = 0; i < n1; i++) leftArr[i] = arr[left + i];
  for (let j = 0; j < n2; j++) rightArr[j] = arr[mid + 1 + j];

  let i = 0, j = 0, k = left;

  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  // Copy any remaining elements
  while (i < n1) arr[k++] = leftArr[i++];
  while (j < n2) arr[k++] = rightArr[j++];
}

function mergeSortIterative(arr: number[]): void {
  const n = arr.length;

  // For current size of subarrays to merge: 1, 2, 4, 8, ...
  for (let currSize = 1; currSize <= n - 1; currSize = 2 * currSize) {
    // Pick starting point of left subarray to merge
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
      // Find ending point of left subarray
      const mid = Math.min(leftStart + currSize - 1, n - 1);
      
      // Find ending point of right subarray
      const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

      // Merge subarrays arr[leftStart..mid] & arr[mid+1..rightEnd]
      merge(arr, leftStart, mid, rightEnd);
    }
  }
}

// Usage example
const arr = [38, 27, 43, 3, 9, 82, 10];
mergeSortIterative(arr);
console.log(arr);  // Sorted array
