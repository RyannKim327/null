function binarySearch(arr, target, start, end) {
  if (start > end) {
    return -1; // Target not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Target found at mid index
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1); // Search left subarray
  } else {
    return binarySearch(arr, target, mid + 1, end); // Search right subarray
  }
}

// Example usage:
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 10;
const result = binarySearch(array, target, 0, array.length - 1);
console.log(result); // Output: 4 (as `10` is found at index 4)
