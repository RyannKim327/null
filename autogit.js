function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // If element at index i is greater than the next element, the array is not sorted
    }
  }
  return true; // If all elements are in sorted order, return true
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
console.log(isSorted(array1)); // Output: true

const array2 = [1, 2, 5, 4, 3];
console.log(isSorted(array2)); // Output: false
