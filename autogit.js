function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // Array is not sorted in ascending order
    }
  }
  return true; // Array is sorted in ascending order
}

// Usage example:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 2, 6, 1, 3];

console.log(isArraySorted(sortedArray)); // Output: true
console.log(isArraySorted(unsortedArray)); // Output: false
