function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return middle;
  }

  if (arr[middle] < target) {
    return binarySearchRecursive(arr, target, middle + 1, end);
  } else {
    return binarySearchRecursive(arr, target, start, middle - 1);
  }
}

// Example usage:
const array = [2, 4, 7, 10, 12, 15, 21, 23];
const target = 10;
const index = binarySearchRecursive(array, target, 0, array.length - 1);
console.log(index); // Output: 3 (index of target value 10 in the array)
