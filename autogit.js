function merge(arr, start, mid, end) {
  const leftArr = arr.slice(start, mid + 1); // Left subarray
  const rightArr = arr.slice(mid + 1, end + 1); // Right subarray

  let i = 0, j = 0, k = start;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of leftArr, if any
  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  // Copy the remaining elements of rightArr, if any
  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

function mergeSort(arr) {
  const n = arr.length;
  let currSize;

  // Divide the array into subarrays of different sizes
  // Starting from size 1 and doubling it each time
  for (currSize = 1; currSize < n; currSize = currSize * 2) {
    let leftStart;

    // Merge subarrays in a bottom-up manner
    // From left to right
    for (leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
      const mid = Math.min(leftStart + currSize - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

      merge(arr, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

// Example usage:
const arr = [9, 4, 2, 7, 1, 5, 6, 8, 3];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
