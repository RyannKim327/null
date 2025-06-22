function binarySearchRecursive(
  arr: number[], 
  target: number, 
  low: number = 0, 
  high: number = arr.length - 1
): number {
  // Base case: if the search range is invalid, the target is not in the array
  if (low > high) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((low + high) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid;
  }

  // If the target is smaller, search the left half
  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, low, mid - 1);
  }

  // If the target is larger, search the right half
  return binarySearchRecursive(arr, target, mid + 1, high);
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 7;

const result = binarySearchRecursive(sortedArray, targetValue);
console.log(`Index of ${targetValue}:`, result); // Output: Index of 7: 3
