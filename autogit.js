function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1; // Target value not found
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Target value found
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1); // Search in the left half
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end); // Search in the right half
  }
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const targetValue = 9;
const startIndex = 0;
const endIndex = sortedArray.length - 1;

console.log(binarySearchRecursive(sortedArray, targetValue, startIndex, endIndex)); // Output: 4 (Index of target value)
