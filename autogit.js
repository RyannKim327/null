function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return middle;
  }

  if (target < arr[middle]) {
    return binarySearchRecursive(arr, target, start, middle - 1);
  } else {
    return binarySearchRecursive(arr, target, middle + 1, end);
  }
}
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetElement = 23;
const result = binarySearchRecursive(array, targetElement, 0, array.length - 1);

console.log(result); // Output: 5 (index of the target element in the array)
