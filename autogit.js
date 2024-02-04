function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // To ensure the array is sorted, you can include a sorting step here if needed
  // If the array is not sorted, binary search won't work correctly.
}
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
}
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);
}
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  }
}
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1); // Search in the left half
  }
}
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1); // Search in the left half
  } else {
    return binarySearch(arr, target, mid + 1, end); // Search in the right half
  }
}
const sortedArray = [1, 3, 5, 7, 9];
const targetValue = 5;
const index = binarySearch(sortedArray, targetValue);
console.log(index); // Output: 2 (index of 5 in the array)
