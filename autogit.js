function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; // Target element is not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Target element found at index mid
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1); // Search in the left half
  } else {
    return binarySearch(arr, target, mid + 1, end); // Search in the right half
  }
}

// Usage example:
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetElement = 23;
const resultIndex = binarySearch(sortedArray, targetElement);

if (resultIndex !== -1) {
  console.log(`Element ${targetElement} found at index ${resultIndex}`);
} else {
  console.log(`Element ${targetElement} not found in the array`);
}
