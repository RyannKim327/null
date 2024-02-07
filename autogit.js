function binarySearchRecursive(arr, key, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1; // Key not found
  }

  const middle = Math.floor((low + high) / 2);

  if (arr[middle] === key) {
    return middle; // Key found
  } else if (arr[middle] > key) {
    return binarySearchRecursive(arr, key, low, middle - 1); // Search left half
  } else {
    return binarySearchRecursive(arr, key, middle + 1, high); // Search right half
  }
}

// Usage example:
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const key = 7;
const index = binarySearchRecursive(array, key);
console.log(`Key ${key} found at index ${index}`);
