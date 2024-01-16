function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  
}
if (start > end) {
  return -1;
}
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
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  
  const mid = Math.floor((start + end) / 2);
  
  if (arr[mid] === target) {
    return mid;
  }
  
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }
  
  return binarySearch(arr, target, mid + 1, end);
}
const arr = [1, 5, 10, 12, 15];
const target = 10;

const index = binarySearch(arr, target);

if (index !== -1) {
  console.log(`Found ${target} at index ${index}`);
} else {
  console.log(`${target} not found in the array`);
}
