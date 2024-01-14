function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return binarySearch(arr, target, start, mid - 1);
    } else {
      return binarySearch(arr, target, mid + 1, end);
    }
  }

  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

const index = binarySearch(arr, target);

if (index !== -1) {
  console.log(`The target value ${target} was found at index ${index}.`);
} else {
  console.log(`The target value ${target} was not found in the array.`);
}
