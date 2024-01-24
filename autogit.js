function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  // Base case: if the start index becomes greater than the end index, the element was not found
  if (start > end) {
    return -1;
  }

  // Find the middle index
  const mid = Math.floor((start + end) / 2);

  // If the element at the middle index equals the target, return the index
  if (arr[mid] === target) {
    return mid;
  }

  // If the element at the middle index is greater than the target,
  // recursively search the left half of the array
  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  }

  // If the element at the middle index is less than the target,
  // recursively search the right half of the array
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;
const index = binarySearchRecursive(arr, target);

console.log(index); // Output: 5
