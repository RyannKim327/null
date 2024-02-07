function isArraySorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
const arr1 = [1, 2, 3, 4, 5];
console.log(isArraySorted(arr1)); // Output: true

const arr2 = [5, 4, 3, 2, 1];
console.log(isArraySorted(arr2)); // Output: false

const arr3 = [1, 3, 2, 4, 5];
console.log(isArraySorted(arr3)); // Output: false
