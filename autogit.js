function binarySearchRecursive(target, array, start, end) {
  if (start > end) {
    return -1; // Target value not found
  }

  const middle = Math.floor((start + end) / 2);

  if (array[middle] === target) {
    return middle; // Target value found
  } else if (array[middle] > target) {
    return binarySearchRecursive(target, array, start, middle - 1); // Search in the left half
  } else {
    return binarySearchRecursive(target, array, middle + 1, end); // Search in the right half
  }
}

// Example usage:
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;
const result = binarySearchRecursive(target, array, 0, array.length - 1);
console.log(`Index of ${target}: ${result}`);
