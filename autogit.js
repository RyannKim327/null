function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; // target not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // target found
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1); // search in the left half
  } else {
    return binarySearch(arr, target, mid + 1, end); // search in the right half
  }
}
const sortedArray = [1, 4, 6, 8, 9, 13, 15];

console.log(binarySearch(sortedArray, 6)); // Output: 2
console.log(binarySearch(sortedArray, 13)); // Output: 5
console.log(binarySearch(sortedArray, 2)); // Output: -1 (not found)
