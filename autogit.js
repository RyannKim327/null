function binarySearch(arr, start, end, target) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, start, mid - 1, target);
  } else {
    return binarySearch(arr, mid + 1, end, target);
  }
}

// Example usage
const arr = [1, 5, 10, 15, 20, 25];
const target = 15;
const index = binarySearch(arr, 0, arr.length - 1, target);
console.log(index); // Output: 3
