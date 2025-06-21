function binarySearchRecursive(
  array: number[], 
  target: number, 
  left: number = 0, 
  right: number = array.length - 1
): number {
  // Base case: if the search space is invalid (left > right), return -1 (not found)
  if (left > right) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((left + right) / 2);

  // Check if the middle element is the target
  if (array[mid] === target) {
    return mid; // Target found, return the index
  } 
  // If the target is smaller than the middle element, search the left half
  else if (target < array[mid]) {
    return binarySearchRecursive(array, target, left, mid - 1);
  } 
  // If the target is larger than the middle element, search the right half
  else {
    return binarySearchRecursive(array, target, mid + 1, right);
  }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 7;

const result = binarySearchRecursive(sortedArray, targetValue);

if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log("Element not found in the array.");
}
