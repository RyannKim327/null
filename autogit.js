function binarySearchRecursive(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  var mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, end);
  } else {
    return binarySearchRecursive(arr, target, start, mid - 1);
  }
}

// Usage example
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var targetNumber = 6;

var result = binarySearchRecursive(numbers, targetNumber, 0, numbers.length - 1);

console.log(result); // Output: 5 (index of the element 6 in the array)
