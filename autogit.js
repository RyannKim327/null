function binarySearchRecursive(arr, target, start, end) {
  // Base case: stop recursion when the start index exceeds the end index
  if (start > end) {
    return -1; // Element not found
  }

  // Find the middle index
  const middle = Math.floor((start + end) / 2);

  // Check if the middle element is the target
  if (arr[middle] === target) {
    return middle; // Element found
  }

  // Recursively search the left or right half of the array
  if (arr[middle] > target) {
    return binarySearchRecursive(arr, target, start, middle - 1); // Search left half
  } else {
    return binarySearchRecursive(arr, target, middle + 1, end); // Search right half
  }
}
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 23;

const result = binarySearchRecursive(array, targetValue, 0, array.length - 1);
console.log(result); // Output: 5 (index of the target value in the array)
