function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1; // target value not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // target value found
  }

  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1); // search lower half
  }

  return binarySearchRecursive(arr, target, mid + 1, end); // search upper half
}

// Example usage:
const array = [1, 3, 5, 7, 9];
const target = 7;

const result = binarySearchRecursive(array, target, 0, array.length - 1);

console.log(result); // Output: 3 (index of target value)
