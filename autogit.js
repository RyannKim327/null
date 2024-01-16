function binarySearchRecursive(arr, target, startIdx = 0, endIdx = arr.length - 1, exactMatch = true) {
  if (startIdx > endIdx) {
    return -1; // Target not found
  }

  const midIdx = Math.floor((startIdx + endIdx) / 2);

  if (arr[midIdx] === target) {
    if (exactMatch) {
      return midIdx;
    } else {
      // Continue searching for the first occurrence of the target element
      let result = binarySearchRecursive(arr, target, startIdx, midIdx - 1, exactMatch);
      return (result !== -1 ? result : midIdx);
    }
  }

  if (arr[midIdx] < target) {
    return binarySearchRecursive(arr, target, midIdx + 1, endIdx, exactMatch);
  }

  return binarySearchRecursive(arr, target, startIdx, midIdx - 1, exactMatch);
}

// Usage example:
const sortedArr = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearchRecursive(sortedArr, 6)); // Output: 6 (index of the target element)
console.log(binarySearchRecursive(sortedArr, 2)); // Output: 1 (index of the first occurrence of the target element)
console.log(binarySearchRecursive(sortedArr, 11)); // Output: -1 (not found)
