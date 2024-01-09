function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;
const result = binarySearchRecursive(sortedArray, target, 0, sortedArray.length - 1);
console.log(result); // Output: 4
