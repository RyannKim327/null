function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  // Base case: element not found
  if (start > end) {
    return -1;
  }

  // Find the middle index
  const mid = Math.floor((start + end) / 2);

  // Base case: element found
  if (arr[mid] === target) {
    return mid;
  }

  // Recursive case: search left or right half
  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, start, mid - 1); // search left half
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end); // search right half
  }
}

// Example usage
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const targetElement = 12;
const index = binarySearchRecursive(array, targetElement);

if (index !== -1) {
  console.log(`Element ${targetElement} found at index ${index}.`);
} else {
  console.log(`Element ${targetElement} not found.`);
}
