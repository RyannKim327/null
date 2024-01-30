function mergeSort(arr) {
  const n = arr.length;
  const sortedArr = [...arr];

  // Perform merge operations repeatedly for different subarray sizes
  for (let size = 1; size <= n - 1; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

      merge(sortedArr, leftStart, mid, rightEnd);
    }
  }

  return sortedArr;
}

// Merge two subarrays
function merge(arr, leftStart, mid, rightEnd) {
  const leftEnd = mid;
  const rightStart = mid + 1;

  let left = leftStart;
  let right = rightStart;
  const tempArr = [];

  while (left <= leftEnd && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      tempArr.push(arr[left]);
      left++;
    } else {
      tempArr.push(arr[right]);
      right++;
    }
  }

  // Copy the remaining elements from the left subarray, if any
  while (left <= leftEnd) {
    tempArr.push(arr[left]);
    left++;
  }

  // Copy the remaining elements from the right subarray, if any
  while (right <= rightEnd) {
    tempArr.push(arr[right]);
    right++;
  }

  // Copy back the merged elements to the original array
  for (let i = leftStart; i <= rightEnd; i++) {
    arr[i] = tempArr[i - leftStart];
  }
}

// Example usage
const arr = [7, 2, 9, 4, 5, 1, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 4, 5, 6, 7, 9]
