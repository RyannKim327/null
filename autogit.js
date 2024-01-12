function binarySearch(array, target, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return mid;
  }

  if (array[mid] > target) {
    return binarySearch(array, target, start, mid - 1);
  }

  return binarySearch(array, target, mid + 1, end);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetElement = 6;
const startIndex = 0;
const endIndex = sortedArray.length - 1;

const resultIndex = binarySearch(sortedArray, targetElement, startIndex, endIndex);

if (resultIndex === -1) {
  console.log("Element not found");
} else {
  console.log(`Element found at index ${resultIndex}`);
}
