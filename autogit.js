function binarySearch(array, target, start = 0, end = array.length - 1) {
  // ...
}
function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1;
  }
  // ...
}
function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);
  // ...
}
function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return mid;
  }
  // ...
}
function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return mid;
  }

  if (array[mid] > target) {
    return binarySearch(array, target, start, mid - 1);
  }
  // ...
}
function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return mid;
  }

  if (array[mid] > target) {
    return binarySearch(array, target, start, mid - 1);
  }

  return binarySearch(array, target, mid + 1, end);
}
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;
const index = binarySearch(array, target);

console.log(`Target ${target} is found at index ${index}`);
