function binarySearch(arr, target) {
  // implementation goes here
}
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  // implementation goes here
}
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    // implementation goes here
  }
}
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midValue = arr[mid];
    // implementation goes here
  }
}
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midValue = arr[mid];
    if (midValue === target) {
      return mid;
    } else if (target < midValue) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1; // return -1 if target value is not found
}
