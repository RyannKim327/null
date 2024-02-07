function binarySearchRecursive(array, target, start, end) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] < target) {
    return binarySearchRecursive(array, target, mid + 1, end);
  } else {
    return binarySearchRecursive(array, target, start, mid - 1);
  }
}

// Example usage:
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 16;

const index = binarySearchRecursive(sortedArray, target, 0, sortedArray.length - 1);
console.log(index); // Output: 4
