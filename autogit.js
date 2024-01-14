function binarySearch(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  }
}

// Example usage:
const array = [1, 3, 5, 7, 9];
const targetValue = 7;
const index = binarySearch(array, targetValue, 0, array.length - 1);

if (index !== -1) {
  console.log(`Found at index ${index}`);
} else {
  console.log(`Not found`);
}
