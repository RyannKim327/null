function binarySearch(arr, target, startIdx, endIdx) {
  if (startIdx > endIdx) {
    return -1;
  }
  
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  
  if (arr[middleIdx] === target) {
    return middleIdx;
  } else if (arr[middleIdx] > target) {
    return binarySearch(arr, target, startIdx, middleIdx - 1);
  } else {
    return binarySearch(arr, target, middleIdx + 1, endIdx);
  }
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 6;

const index = binarySearch(sortedArray, targetValue, 0, sortedArray.length - 1);
console.log(index); // Output: 5 (index of the target value in the array)
