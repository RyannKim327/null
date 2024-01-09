function mergeSort(arr) {
  const n = arr.length;
  
  // Iteratively merge subarrays of size 1, 2, 4, 8, ...
  for(let size = 1; size < n; size *= 2) {
    for(let left = 0; left < n - size; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      merge(arr, left, mid, right);
    }
  }
  return arr;
}

// Helper function to merge two sorted arrays
function merge(arr, left, mid, right) {
  const start1 = left;
  const start2 = mid + 1;
  
  let merged = [];
  while (start1 <= mid && start2 <= right) {
    if (arr[start1] <= arr[start2]) {
      merged.push(arr[start1]);
      start1++;
    } else {
      merged.push(arr[start2]);
      start2++;
    }
  }

  while (start1 <= mid) {
    merged.push(arr[start1]);
    start1++;
  }
  
  while (start2 <= right) {
    merged.push(arr[start2]);
    start2++;
  }

  for (let i = left; i <= right; i++) {
    arr[i] = merged[i - left];
  }
}
const arr = [5, 2, 9, 1, 7, 6, 3];
console.log(mergeSort(arr)); // Output: [1, 2, 3, 5, 6, 7, 9]
