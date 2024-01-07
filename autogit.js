function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    // Base case: element not found
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    // Base case: element found at middle index
    return mid;
  } else if (arr[mid] < target) {
    // Recursive case: search in the right half of the array
    return binarySearchRecursive(arr, target, mid + 1, end);
  } else {
    // Recursive case: search in the left half of the array
    return binarySearchRecursive(arr, target, start, mid - 1);
  }
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearchRecursive(arr, 7, 0, arr.length - 1)); // Output: 3
console.log(binarySearchRecursive(arr, 10, 0, arr.length - 1)); // Output: -1 (not found)
