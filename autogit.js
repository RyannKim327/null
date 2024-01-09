function binarySearchRecursive(arr, value, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; // value not found
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === value) {
    return mid; // value found
  }

  if (arr[mid] > value) {
    return binarySearchRecursive(arr, value, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, value, mid + 1, end);
  }
}

// Example usage:
let sortedArray = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearchRecursive(sortedArray, 7)); // Output: 3
console.log(binarySearchRecursive(sortedArray, 4)); // Output: -1 (not found)
