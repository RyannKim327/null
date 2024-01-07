function binarySearchRecursive(arr, start, end, target, compare = defaultCompare) {
  if (start > end) {
    return -1; // Target not found
  }

  const mid = Math.floor((start + end) / 2);

  if (compare(target, arr[mid]) === 0) {
    return mid; // Target found at the middle index
  } else if (compare(target, arr[mid]) < 0) {
    return binarySearchRecursive(arr, start, mid - 1, target, compare); // Search in the left half
  } else {
    return binarySearchRecursive(arr, mid + 1, end, target, compare); // Search in the right half
  }
}

// Default comparison function for primitive values
function defaultCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;
const index = binarySearchRecursive(sortedArray, 0, sortedArray.length - 1, target);

if (index !== -1) {
  console.log("Target found at index", index);
} else {
  console.log("Target not found");
}
