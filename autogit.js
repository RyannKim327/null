function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1; // Element not found
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Element found at mid index
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1); // Search left half
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end);  // Search right half
  }
}

// Example usage:
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

const index = binarySearchRecursive(arr, target, 0, arr.length - 1);
console.log(`Element found at index ${index}`);
