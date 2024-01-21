// Merge two sorted arrays into a single sorted array
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Push remaining elements of left and right arrays, if any
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Implement the merge sort algorithm iteratively
function mergeSortIterative(arr) {
  let n = arr.length;

  // Merge subarrays of size 1, 2, 4, 8, ... 
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
      let mid = Math.min(leftStart + size - 1, n - 1);
      let rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

      // Merge the subarrays
      let left = arr.slice(leftStart, mid + 1);
      let right = arr.slice(mid + 1, rightEnd + 1);
      let merged = merge(left, right);

      // Copy the merged subarray back to the original array
      let k = 0;
      for (let i = leftStart; i <= rightEnd; i++) {
        arr[i] = merged[k];
        k++;
      }
    }
  }

  return arr;
}

// Example usage
let array = [5, 2, 9, 1, 6, 3];
let sortedArray = mergeSortIterative(array);
console.log(sortedArray); // Output: [1, 2, 3, 5, 6, 9]
