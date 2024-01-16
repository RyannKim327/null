function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // ... implementation goes here
}
if (start > end) {
  return -1;
}
var mid = Math.floor((start + end) / 2);
if (arr[mid] === target) {
  return mid;
}
if (arr[mid] > target) {
  return binarySearch(arr, target, start, mid - 1);
}
if (arr[mid] < target) {
  return binarySearch(arr, target, mid + 1, end);
}
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  var mid = Math.floor((start + end) / 2);

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
