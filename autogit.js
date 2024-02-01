function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  // Check if start became greater than end, indicating that the target is not found
  if (start > end) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((start + end) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid;
  }

  // If the target is less than the middle element, search the left half of the array
  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  }

  // Otherwise, search the right half of the array
  return binarySearchRecursive(arr, target, mid + 1, end);
}

// Example usage:
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;
const index = binarySearchRecursive(array, target);

console.log(`Target ${target} found at index ${index}`);
