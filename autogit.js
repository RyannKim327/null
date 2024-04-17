function isArraySortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 2, 1];

console.log(isArraySortedAscending(arr1)); // Output: true
console.log(isArraySortedAscending(arr2)); // Output: false
