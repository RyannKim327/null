function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;  // Base case: target not found
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;  // Base case: target found
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, low, mid - 1);  // Search the left half
  } else {
    return binarySearchRecursive(arr, target, mid + 1, high);  // Search the right half
  }
}

// Example usage:
const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetNumber = 13;
const index = binarySearchRecursive(numbers, targetNumber);
console.log(index);  // Output: 6
