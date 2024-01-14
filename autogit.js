function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7];
const targetValue = 5;

const resultIndex = binarySearchRecursive(array, targetValue);

if (resultIndex !== -1) {
  console.log(`Target value ${targetValue} found at index ${resultIndex}`);
} else {
  console.log(`Target value ${targetValue} not found in the array`);
}
