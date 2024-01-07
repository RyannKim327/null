function mergeSortIterative(arr) {
  const n = arr.length;
  const temp = new Array(n);
  
  // Merge subarrays of size 1 to build sorted subarrays
  for (let currSize = 1; currSize < n; currSize *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
      const mid = Math.min(leftStart + currSize - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

      merge(arr, temp, leftStart, mid, rightEnd);
    }
  }
  
  return arr;
}

// Merge two sorted subarrays into one sorted subarray
function merge(arr, temp, leftStart, mid, rightEnd) {
  let left = leftStart;
  let right = mid + 1;
  let tempIndex = leftStart;
  
  // Merge elements from both subarrays while they're in range
  while (left <= mid && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      temp[tempIndex] = arr[left];
      left++;
    } else {
      temp[tempIndex] = arr[right];
      right++;
    }
    tempIndex++;
  }
  
  // Copy remaining elements from left subarray
  while (left <= mid) {
    temp[tempIndex] = arr[left];
    left++;
    tempIndex++;
  }
  
  // Copy remaining elements from right subarray
  while (right <= rightEnd) {
    temp[tempIndex] = arr[right];
    right++;
    tempIndex++;
  }
  
  // Copy temp array back to original array
  for (let i = leftStart; i <= rightEnd; i++) {
    arr[i] = temp[i];
  }
}

// Example usage
const arr = [5, 2, 8, 12, 1, 6];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr);  // Output: [1, 2, 5, 6, 8, 12]
