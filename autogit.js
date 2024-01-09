function binarySearchRecursive(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1; // Return -1 if the target is not found
  }

  const middle = Math.floor((start + end) / 2);

  if (array[middle] === target) {
    return middle; // Return the index of the target if found
  }

  if (array[middle] > target) {
    return binarySearchRecursive(array, target, start, middle - 1); // Search the left half of the array
  } else {
    return binarySearchRecursive(array, target, middle + 1, end); // Search the right half of the array
  }
}
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;

const index = binarySearchRecursive(sortedArray, target);

if (index !== -1) {
  console.log(`Target found at index ${index}`);
} else {
  console.log(`Target not found`);
}
