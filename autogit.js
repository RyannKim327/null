function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // If the current element is greater than the next element, return false
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  // If the loop completes without returning false, the array is sorted in ascending order
  return true;
}

// Test the function
const array1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(array1)); // Output: true

const array2 = [5, 4, 3, 2, 1];
console.log(isSortedAscending(array2)); // Output: false
