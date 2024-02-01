function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 6;

console.log(binarySearchRecursive(array, targetValue, 0, array.length - 1));
