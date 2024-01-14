function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      return binarySearch(arr, target, start, mid - 1);
    }

    if (arr[mid] < target) {
      return binarySearch(arr, target, mid + 1, end);
    }
  }

  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

const position = binarySearch(arr, target);
console.log(`The target element is at index ${position}.`); // Output: The target element is at index 5.
