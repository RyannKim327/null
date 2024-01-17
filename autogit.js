function binarySearch(arr, target, start, end) {
  if (start > end) {
    return -1; // Target not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1); // Search in the left half
  } else {
    return binarySearch(arr, target, mid + 1, end); // Search in the right half
  }
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;

const result = binarySearch(arr, target, 0, arr.length - 1);
console.log(result); // Output: 3 (index of target value)
