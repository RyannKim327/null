function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    const left = binarySearchRecursive(arr, target, start, mid - 1);
    return left !== -1 ? left : -1;
  } else {
    const right = binarySearchRecursive(arr, target, mid + 1, end);
    return right !== -1 ? right : -1;
  }
}

// Example usage
const array = [1, 3, 5, 7, 9, 11];
const targetElement = 7;
const startIndex = 0;
const endIndex = array.length - 1;

const result = binarySearchRecursive(array, targetElement, startIndex, endIndex);
console.log(result);  // Output: 3 (index of the target element in the array)
