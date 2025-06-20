function binarySearchRecursive(
  arr: number[], 
  target: number, 
  low: number = 0, 
  high: number = arr.length - 1
): number {
  // Base case: If the search space is invalid, the target is not in the array
  if (low > high) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((low + high) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid; // Target found, return its index
  } 
  // If the target is less than the middle element, search the left half
  else if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, low, mid - 1);
  } 
  // If the target is greater than the middle element, search the right half
  else {
    return binarySearchRecursive(arr, target, mid + 1, high);
  }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const target = 7;

const result = binarySearchRecursive(sortedArray, target);
console.log(result); // Output: 3 (index of 7 in the array)
