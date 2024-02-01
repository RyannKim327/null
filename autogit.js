function binarySearch(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetValue = 7;
const result = binarySearch(array, targetValue, 0, array.length - 1);
console.log(result); // Output: 3
