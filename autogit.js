function binarySearchRecursive(arr, target, startIdx, endIdx) {
  if (startIdx > endIdx) {
    return -1; // Target value not found
  }

  const midIdx = Math.floor((startIdx + endIdx) / 2);

  if (arr[midIdx] === target) {
    return midIdx; // Target value found
  }

  if (target < arr[midIdx]) {
    return binarySearchRecursive(arr, target, startIdx, midIdx - 1);
  }

  return binarySearchRecursive(arr, target, midIdx + 1, endIdx);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;

const result = binarySearchRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);
console.log(result); // Output: 6 (index of target value in the array)
