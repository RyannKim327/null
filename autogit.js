function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // Implementation goes here
}
if (start > end) {
  return -1;
}
const middle = Math.floor((start + end) / 2);
if (target === arr[middle]) {
  return middle;
}
if (target < arr[middle]) {
  return binarySearch(arr, target, start, middle - 1);
}
if (target > arr[middle]) {
  return binarySearch(arr, target, middle + 1, end);
}
return -1;
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  
  const middle = Math.floor((start + end) / 2);
  
  if (target === arr[middle]) {
    return middle;
  } else if (target < arr[middle]) {
    return binarySearch(arr, target, start, middle - 1);
  } else {
    return binarySearch(arr, target, middle + 1, end);
  }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;
const index = binarySearch(sortedArray, target);
console.log(index); // Output: 4 (index of the target value)
