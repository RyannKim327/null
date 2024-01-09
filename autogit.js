function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

const index = binarySearch(array, target);
console.log(`Element ${target} found at index ${index}`);
