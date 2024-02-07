function binarySearchRecursive(arr, target, low, high) {
  if (low > high) {
    // Base case: Target element not found
    return -1;
  }

  // Find the middle index
  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    // Base case: Target element found at middle index
    return mid;
  } else if (arr[mid] > target) {
    // Recursive case: Target element is in the left half
    return binarySearchRecursive(arr, target, low, mid - 1);
  } else {
    // Recursive case: Target element is in the right half
    return binarySearchRecursive(arr, target, mid + 1, high);
  }
}

// Example usage:
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetElement = 23;
const resultIndex = binarySearchRecursive(sortedArray, targetElement, 0, sortedArray.length - 1);

if (resultIndex !== -1) {
  console.log(`Element ${targetElement} found at index ${resultIndex}.`);
} else {
  console.log(`Element ${targetElement} not found in the array.`);
}
