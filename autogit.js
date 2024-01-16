function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1; // Base case: element not found
  }

  const midpoint = Math.floor((start + end) / 2);

  if (arr[midpoint] === target) {
    return midpoint; // Base case: element found
  }

  if (arr[midpoint] > target) {
    return binarySearchRecursive(arr, target, start, midpoint - 1); // Recurse on the lower half
  }

  return binarySearchRecursive(arr, target, midpoint + 1, end); // Recurse on the upper half
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const index = binarySearchRecursive(array, target, 0, array.length - 1);

console.log(`Element ${target} found at index ${index}`);
