function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const index = binarySearch(arr, target);

console.log(index);  // Output: 4 (index of the target value)
