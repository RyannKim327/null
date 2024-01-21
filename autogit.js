// Bottom-up merge sort
function mergeSortIterative(arr) {
  const len = arr.length;
  const sorted = Array.from(arr); // create a copy of the array

  // Merge the subarrays of size 1, 2, 4, 8, ... up to len/2
  for (let size = 1; size < len; size *= 2) {
    for (let leftStart = 0; leftStart < len; leftStart += 2*size) {
      const mid = leftStart + size - 1;
      const rightEnd = Math.min(leftStart + 2*size - 1, len - 1);
      
      merge(sorted, leftStart, mid, rightEnd);
    }
  }

  return sorted;
}

// Merge two sorted subarrays (in-place)
function merge(arr, leftStart, mid, rightEnd) {
  const leftEnd = mid;
  const rightStart = mid + 1;
  const temp = [];

  let i = leftStart;
  let j = rightStart;

  // Merge elements into the temporary array
  while (i <= leftEnd && j <= rightEnd) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  // Copy remaining elements from left subarray, if any
  while (i <= leftEnd) {
    temp.push(arr[i]);
    i++;
  }

  // Copy remaining elements from right subarray, if any
  while (j <= rightEnd) {
    temp.push(arr[j]);
    j++;
  }

  // Copy sorted elements back to the original array
  for (let k = leftStart; k <= rightEnd; k++) {
    arr[k] = temp[k - leftStart];
  }
}
const arr = [5, 3, 8, 4, 2, 1, 6, 9, 7];
const sortedArray = mergeSortIterative(arr);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
