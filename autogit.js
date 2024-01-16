function mergeSort(arr) {
  const len = arr.length;
  const sortedArr = Array(len).fill(0); // Create an auxiliary array for merging
  let blockSize = 1; // Current size of the blocks being merged

  while (blockSize < len) {
    let i = 0;

    while (i < len - blockSize) {
      merge(arr, sortedArr, i, i + blockSize, Math.min(i + 2 * blockSize, len));
      i += 2 * blockSize;
    }

    blockSize *= 2;
  }

  return arr;
}

function merge(arr, sortedArr, leftStart, rightStart, rightEnd) {
  const leftEnd = rightStart - 1;
  let i = leftStart;
  let j = rightStart;
  let k = leftStart;

  // Merge the two sorted subarrays into the auxiliary array
  while (i <= leftEnd && j <= rightEnd) {
    if (arr[i] <= arr[j]) {
      sortedArr[k++] = arr[i++];
    } else {
      sortedArr[k++] = arr[j++];
    }
  }

  // Copy the remaining elements from the left subarray, if any
  while (i <= leftEnd) {
    sortedArr[k++] = arr[i++];
  }

  // Copy the remaining elements from the right subarray, if any
  while (j <= rightEnd) {
    sortedArr[k++] = arr[j++];
  }

  // Copy the sorted elements back to the original array
  for (let m = leftStart; m <= rightEnd; m++) {
    arr[m] = sortedArr[m];
  }
}
const arr = [5, 2, 8, 4, 1, 9, 3];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 8, 9]
