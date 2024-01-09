function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // ...
}
  // ...
  if (start > end) {
    return -1;
  }
  // ...
  const middle = Math.floor((start + end) / 2);
  // ...
  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] > target) {
    return binarySearch(arr, target, start, middle - 1);
  } else {
    return binarySearch(arr, target, middle + 1, end);
  }
const arr = [1, 3, 5, 7, 9];
const target = 7;
const index = binarySearch(arr, target);
console.log(index);
