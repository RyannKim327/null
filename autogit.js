function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // Array is not sorted in ascending order
    }
  }
  return true; // Array is sorted in ascending order
}
const arr1 = [1, 2, 3, 4, 5];
console.log(isArraySorted(arr1)); // Output: true

const arr2 = [5, 2, 8, 6, 1];
console.log(isArraySorted(arr2)); // Output: false
