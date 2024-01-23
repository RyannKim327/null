function binarySearchRecursive(arr, searchValue, left, right) {
  if (left > right) {
    return -1; // Element not found
  }

  const middle = Math.floor((left + right) / 2);

  if (arr[middle] === searchValue) {
    return middle; // Element found at middle index
  }

  if (arr[middle] > searchValue) {
    return binarySearchRecursive(arr, searchValue, left, middle - 1);
  } else {
    return binarySearchRecursive(arr, searchValue, middle + 1, right);
  }
}

// Usage example:
const arr = [1, 3, 5, 7, 9];
const searchValue = 5;
const index = binarySearchRecursive(arr, searchValue, 0, arr.length - 1);
console.log(index); // Output: 2 (index of 5 in the array)
