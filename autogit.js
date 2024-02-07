function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }

  return binarySearch(arr, target, mid + 1, right);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;
const index = binarySearch(arr, target);

if (index !== -1) {
  console.log(`Target ${target} found at index ${index}`);
} else {
  console.log(`Target ${target} not found in the array`);
}
