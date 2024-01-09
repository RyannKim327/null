function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
const array1 = [1, 2, 3, 4, 5];
console.log(isArraySorted(array1)); // Output: true

const array2 = [5, 2, 6, 1, 8];
console.log(isArraySorted(array2)); // Output: false
