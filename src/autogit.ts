function binarySearchRecursive(
  array: number[], 
  target: number, 
  left: number = 0, 
  right: number = array.length - 1
): number {
  // Base case: if the search space is empty
  if (left > right) {
    return -1; // Target not found
  }

  // Calculate the middle index
  const mid = Math.floor((left + right) / 2);

  // Check if the middle element is the target
  if (array[mid] === target) {
    return mid; // Target found at index mid
  } else if (target < array[mid]) {
    // Recursively search in the left half
    return binarySearchRecursive(array, target, left, mid - 1);
  } else {
    // Recursively search in the right half
    return binarySearchRecursive(array, target, mid + 1, right);
  }
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const target = 7;

const result = binarySearchRecursive(sortedArray, target);
console.log(`Index of ${target}:`, result); // Output: Index of 7: 3
