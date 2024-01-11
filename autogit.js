function binarySearch(arr, target) {
  // ...
}
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  // ...
}
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // ...
  }
}
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // ...
  }
}
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // If the target is not found, return -1
  return -1;
}
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;
const index = binarySearch(array, target);

console.log(index); // Output: 4 (index of the target element)
