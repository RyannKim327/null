function binarySearchRecursive(arr, target, start, end, notFound) {
  if (start > end) {
    return notFound;  // Base case: target not found in array
  }
  
  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return middle;  // Base case: target found at middle index
  } else if (arr[middle] > target) {
    return binarySearchRecursive(arr, target, start, middle - 1, notFound);  // Recursive call for left side of array
  } else {
    return binarySearchRecursive(arr, target, middle + 1, end, notFound);  // Recursive call for right side of array
  }
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11];
const targetElement = 5;
const startIndex = 0;
const endIndex = sortedArray.length - 1;
const notFoundValue = -1;

const index = binarySearchRecursive(sortedArray, targetElement, startIndex, endIndex, notFoundValue);
console.log("Element found at index:", index);
