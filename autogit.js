function binarySearchRecursive(arr, target, left, right) {
  // Base case: If the left index becomes greater than the right index, target is not found
  if (left > right) {
    return -1;
  }

  // Calculate the middle index using integer division
  const mid = Math.floor((left + right) / 2);

  // Base case: If the element at the middle index is equal to the target, return the middle index
  if (arr[mid] === target) {
    return mid;
  }
  
  // Recursive case: If the element at the middle index is greater than the target,
  // search the left half of the array
  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
  
  // Recursive case: If the element at the middle index is less than the target,
  // search the right half of the array
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}
const arr = [2, 4, 7, 9, 11, 13, 15, 17];
const target = 9;
const left = 0;
const right = arr.length - 1;

const index = binarySearchRecursive(arr, target, left, right);
console.log("Target found at index:", index);
