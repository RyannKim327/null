function binarySearchRecursive(arr, target, low, high) {
  if (low > high) {
    return -1;
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, low, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, high);
  }
}

// Usage example:
let sortedArray = [1, 3, 5, 7, 9];
let targetElement = 5;

let resultIndex = binarySearchRecursive(sortedArray, targetElement, 0, sortedArray.length - 1);
console.log(resultIndex); // Output: 2 (index of the target element)
