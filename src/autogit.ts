function binarySearchRecursive(
  arr: number[], 
  target: number, 
  left: number = 0, 
  right: number = arr.length - 1
): number {
  // Base case: If the search range is invalid, the target is not in the array
  if (left > right) {
    return -1; // Target not found
  }

  // Calculate the middle index
  const mid = Math.floor((left + right) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid; // Target found, return its index
  }

  // If the target is smaller than the middle element, search the left half
  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }

  // If the target is larger than the middle element, search the right half
  return binarySearchRecursive(arr, target, mid + 1, right);
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 7;

const result = binarySearchRecursive(sortedArray, targetValue);

if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log("Element not found in the array");
}
