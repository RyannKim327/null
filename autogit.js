function isArraySortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Usage example:
const array1 = [1, 2, 3, 4, 5];
console.log(isArraySortedAscending(array1));  // Output: true

const array2 = [5, 4, 3, 2, 1];
console.log(isArraySortedAscending(array2));  // Output: false
