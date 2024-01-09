function isArraySortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // Array is not sorted in ascending order
    }
  }
  return true; // Array is sorted in ascending order
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 3, 1, 2, 4];

console.log(isArraySortedAscending(sortedArray));    // Output: true
console.log(isArraySortedAscending(unsortedArray));  // Output: false
