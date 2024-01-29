function binarySearchRecursive(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7];
const targetValue = 5;
const result = binarySearchRecursive(array, targetValue, 0, array.length - 1);
console.log(`Target value ${targetValue} found at index ${result}`);
