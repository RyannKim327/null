function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  const middleIndex = Math.floor((start + end) / 2);

  if (start > end) {
    return -1; // Target element not found
  }

  if (arr[middleIndex] === target) {
    return middleIndex; // Target element found
  }

  if (target < arr[middleIndex]) {
    return binarySearchRecursive(arr, target, start, middleIndex - 1);
  } else {
    return binarySearchRecursive(arr, target, middleIndex + 1, end);
  }
}
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetElement = 6;

const index = binarySearchRecursive(sortedArray, targetElement);
console.log(index); // Output: 5 (index of the target element in the array)
