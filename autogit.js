function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 10;

const index = binarySearch(arr, target);

if (index !== -1) {
  console.log(`Element ${target} found at index ${index}`);
} else {
  console.log(`Element ${target} not found in the array`);
}
