function mergeSortIterative(arr) {
  const n = arr.length;

  // Merging subarrays of size 1, then increasing the subarray size
  for (let subSize = 1; subSize < n; subSize *= 2) {
    // Merging subarrays of size subSize
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * subSize) {
      const mid = Math.min(leftStart + subSize - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * subSize - 1, n - 1);

      merge(arr, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

// Helper function to merge two sorted subarrays
function merge(arr, leftStart, mid, rightEnd) {
  const leftSize = mid - leftStart + 1;
  const rightSize = rightEnd - mid;

  // Create temporary arrays for left and right subarrays
  const leftArr = new Array(leftSize);
  const rightArr = new Array(rightSize);

  // Copy data to temporary arrays
  for (let i = 0; i < leftSize; i++) {
    leftArr[i] = arr[leftStart + i];
  }

  for (let i = 0; i < rightSize; i++) {
    rightArr[i] = arr[mid + 1 + i];
  }

  // Merge the temporary arrays back into arr[leftStart...rightEnd]
  let i = 0; // Initial index of first subarray
  let j = 0; // Initial index of second subarray
  let k = leftStart; // Initial index of merged subarray

  while (i < leftSize && j < rightSize) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of leftArr[], if any
  while (i < leftSize) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  // Copy the remaining elements of rightArr[], if any
  while (j < rightSize) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}
const arr = [4, 3, 2, 1, 5];
console.log(mergeSortIterative(arr)); // Output: [1, 2, 3, 4, 5]
