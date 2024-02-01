function binarySearchRecursive(array, target, start, end) {
  if (start > end) {
    return -1; // Not found
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return mid; // Found
  } else if (target < array[mid]) {
    return binarySearchRecursive(array, target, start, mid - 1); // Search left subarray
  } else {
    return binarySearchRecursive(array, target, mid + 1, end); // Search right subarray
  }
}

// Example usage:
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18];
const target = 10;
const index = binarySearchRecursive(arr, target, 0, arr.length - 1);

console.log(`Target ${target} found at index ${index}`);
