function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1; // Target value not found
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Target value found at middle index
  } else if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, start, mid - 1); // Search left half
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end); // Search right half
  }
}

// Usage example
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

const position = binarySearchRecursive(arr, target, 0, arr.length - 1);
if (position >= 0) {
  console.log(`Target value ${target} found at position ${position}`);
} else {
  console.log(`Target value ${target} not found`);
}
