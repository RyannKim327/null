function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  // Base case: If the left pointer surpasses the right pointer, it means the target is not found
  if (left > right) {
    return -1;
  }

  // Find the middle element of the array
  const middle = Math.floor((left + right) / 2);

  // If the middle element is the target, return its index
  if (arr[middle] === target) {
    return middle;
  }

  // If the target is smaller than the middle element, recursively search the left half of the array
  if (arr[middle] > target) {
    return binarySearchRecursive(arr, target, left, middle - 1);
  }

  // If the target is larger than the middle element, recursively search the right half of the array
  if (arr[middle] < target) {
    return binarySearchRecursive(arr, target, middle + 1, right);
  }
}
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 7;
const index = binarySearchRecursive(sortedArray, targetValue);
console.log(`Found at index: ${index}`);
