function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      return binarySearchRecursive(arr, target, start, mid - 1);
    }

    return binarySearchRecursive(arr, target, mid + 1, end);
  }

  return -1;
}

// Usage example:
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 11;
const resultIndex = binarySearchRecursive(array, target);

if (resultIndex !== -1) {
  console.log(`Target ${target} found at index ${resultIndex}.`);
} else {
  console.log(`Target ${target} not found in the array.`);
}
