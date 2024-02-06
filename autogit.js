function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    // Element not found
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    // Element found
    return middle;
  }

  if (arr[middle] > target) {
    // Make a recursive call for the left half of the subarray
    return binarySearchRecursive(arr, target, start, middle - 1);
  } else {
    // Make a recursive call for the right half of the subarray
    return binarySearchRecursive(arr, target, middle + 1, end);
  }
}

// Example usage:
const array = [1, 3, 5, 7, 9];
const targetElement = 5;
const startIndex = 0;
const endIndex = array.length - 1;
const resultIndex = binarySearchRecursive(array, targetElement, startIndex, endIndex);

if (resultIndex !== -1) {
  console.log(`Element ${targetElement} found at index ${resultIndex}.`);
} else {
  console.log(`Element ${targetElement} not found in the array.`);
}
