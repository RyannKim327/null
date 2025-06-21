function binarySearchRecursive(
  arr: number[], // The sorted array to search
  target: number, // The value to search for
  low: number = 0, // The starting index of the search interval
  high: number = arr.length - 1 // The ending index of the search interval
): number {
  // Base case: If the interval is invalid, the target is not in the array
  if (low > high) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((low + high) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] > target) {
    // Recursively search in the left half
    return binarySearchRecursive(arr, target, low, mid - 1);
  } else {
    // Recursively search in the right half
    return binarySearchRecursive(arr, target, mid + 1, high);
  }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 7;

const result = binarySearchRecursive(sortedArray, targetValue);
console.log(`Index of ${targetValue}:`, result); // Output: Index of 7: 3
