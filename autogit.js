function binarySearchRecursive(array, target, low, high) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  if (array[mid] === target) {
    return mid;
  }

  if (array[mid] > target) {
    return binarySearchRecursive(array, target, low, mid - 1);
  }

  if (array[mid] < target) {
    return binarySearchRecursive(array, target, mid + 1, high);
  }

  return -1;
}

// Usage example:
const sortedArray = [2, 4, 5, 7, 10, 12, 15, 18, 20];
const targetValue = 12;
const resultIndex = binarySearchRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);
console.log(resultIndex); // Output: 5
