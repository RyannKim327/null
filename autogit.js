function binarySearch(arr, target, start = 0, end = arr.length - 1, depth = 0) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1, depth + 1);
  }

  return binarySearch(arr, target, mid + 1, end, depth + 1);
}

// Example usage:
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 23;
const index = binarySearch(array, targetValue);

console.log(`Target value ${targetValue} found at index ${index}`);
