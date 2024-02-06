function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1; // Target not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  } else if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, start, mid - 1); // Search in the left half
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end); // Search in the right half
  }
}

// Example usage:
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;
const index = binarySearchRecursive(array, target, 0, array.length - 1);
console.log(index); // Output: 5 (index of target in the array)
