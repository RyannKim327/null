function mergeSort(arr) {
  const len = arr.length;
  const sortedArr = Array.from(arr); // Create a copy of the array

  // Merge subarrays of size 1, 2, 4, 8, ... until the whole array is sorted
  for (let size = 1; size < len; size *= 2) {
    for (let low = 0; low < len - size; low += size * 2) {
      const mid = low + size - 1;
      const high = Math.min(low + size * 2 - 1, len - 1);

      merge(sortedArr, low, mid, high);
    }
  }

  return sortedArr;
}

function merge(arr, low, mid, high) {
  const leftArr = arr.slice(low, mid + 1); // Left subarray
  const rightArr = arr.slice(mid + 1, high + 1); // Right subarray

  let i = 0, // Pointer for left subarray
    j = 0, // Pointer for right subarray
    k = low; // Pointer for merging back to the main array

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

// Example usage
const arr = [8, 3, 1, 5, 10, 2, 7, 6, 4, 9];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
