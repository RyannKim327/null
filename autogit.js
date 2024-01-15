function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
console.log(isArraySorted(array1)); // Output: true

const array2 = [5, 4, 3, 2, 1];
console.log(isArraySorted(array2)); // Output: false
