function binarySearchRecursive(array, target, start, end) {
  // Base case: If the start index is greater than the end index, the target is not found
  if (start > end) {
    return -1;
  }

  // Find the middle index
  const mid = Math.floor((start + end) / 2);

  // If the middle element is the target, return its index
  if (array[mid] === target) {
    return mid;
  }

  // If the target is less than the middle element, search the left half of the array
  if (target < array[mid]) {
    return binarySearchRecursive(array, target, start, mid - 1);
  }

  // If the target is greater than the middle element, search the right half of the array
  if (target > array[mid]) {
    return binarySearchRecursive(array, target, mid + 1, end);
  }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;

const result = binarySearchRecursive(array, target, 0, array.length - 1);
console.log(result); // Output: 5
