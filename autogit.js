function binarySearchRecursive(arr, target, start, end) {
  // Base case: If the start index becomes greater than the end index, return -1
  if (start > end) {
    return -1;
  }

  // Find the middle index
  const mid = Math.floor((start + end) / 2);

  // If the middle element is the target, return its index
  if (arr[mid] === target) {
    return mid;
  }

  // If the target is smaller than the middle element, search the left half
  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  }

  // If the target is greater than the middle element, search the right half
  return binarySearchRecursive(arr, target, mid + 1, end);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;
const index = binarySearchRecursive(sortedArray, target, 0, sortedArray.length - 1);

console.log(`Target found at index: ${index}`);
