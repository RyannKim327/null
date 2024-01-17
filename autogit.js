function mergeSortIterative(arr) {
  const len = arr.length;
  const sorted = Array.from(arr); // Create a copy of the input array

  // Merge the groups of two, then four, then eight, and so on...
  for (let groupSize = 1; groupSize < len; groupSize *= 2) {
    for (let i = 0; i < len - groupSize; i += 2 * groupSize) {
      merge(sorted, i, i + groupSize, Math.min(i + 2 * groupSize, len));
    }
  }

  return sorted;
}

// Helper function to merge two sorted subarrays
function merge(arr, leftStart, rightStart, rightEnd) {
  const left = arr.slice(leftStart, rightStart); // Create a copy of the left subarray
  let leftIndex = 0;
  let rightIndex = rightStart;
  let mergeIndex = leftStart;

  while (leftIndex < left.length && rightIndex < rightEnd) {
    if (left[leftIndex] <= arr[rightIndex]) {
      arr[mergeIndex] = left[leftIndex];
      leftIndex++;
    } else {
      arr[mergeIndex] = arr[rightIndex];
      rightIndex++;
    }
    mergeIndex++;
  }

  // Copy remaining elements from the left subarray, if any
  while (leftIndex < left.length) {
    arr[mergeIndex] = left[leftIndex];
    leftIndex++;
    mergeIndex++;
  }
}

// Example usage:
const arr = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(mergeSortIterative(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
