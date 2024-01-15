function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  // Base case: not found
  if (start > end) {
    return -1;
  }

  // Get the middle index
  const mid = Math.floor((start + end) / 2);

  // We found the target
  if (arr[mid] === target) {
    return mid;
  }

  // Decide which half to search next
  if (arr[mid] > target) {
    // Search in the left half
    return binarySearchRecursive(arr, target, start, mid - 1);
  } else {
    // Search in the right half
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
}

// Example usage
const arr = [1, 3, 5, 7, 9];
const target = 5;
console.log(binarySearchRecursive(arr, target)); // Output: 2
