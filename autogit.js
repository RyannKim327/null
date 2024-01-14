// Function to perform merge operation
function merge(arr, leftStart, mid, rightEnd) {
  const leftEnd = mid;
  const rightStart = mid + 1;
  const tempArr = [];

  let left = leftStart;
  let right = rightStart;

  let tempIndex = 0;

  // Merge elements from both sub-arrays in ascending order
  while (left <= leftEnd && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      tempArr[tempIndex++] = arr[left++];
    } else {
      tempArr[tempIndex++] = arr[right++];
    }
  }

  // Copy the remaining elements from the left sub-array
  while (left <= leftEnd) {
    tempArr[tempIndex++] = arr[left++];
  }

  // Copy the remaining elements from the right sub-array
  while (right <= rightEnd) {
    tempArr[tempIndex++] = arr[right++];
  }

  // Copy back the merged elements to the original array
  for (let i = 0; i < tempIndex; i++) {
    arr[leftStart++] = tempArr[i];
  }
}

// Merge sort function
function mergeSortIterative(arr) {
  const n = arr.length;
  let size;

  // Merge sub-arrays of different sizes
  for (size = 1; size < n; size *= 2) {
    let left;

    // Merge sub-arrays starting from index 0, then index 2*size, 4*size, and so on
    for (left = 0; left < n - 1; left += 2 * size) {
      const mid = left + size - 1;
      const rightEnd = Math.min(left + 2 * size - 1, n - 1);

      merge(arr, left, mid, rightEnd);
    }
  }

  return arr;
}

// Example usage:
const arr = [6, 3, 9, 5, 2, 8, 1, 0];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // Output: [0, 1, 2, 3, 5, 6, 8, 9]
