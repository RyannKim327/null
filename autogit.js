function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // Array is not sorted in ascending order
    }
  }
  return true; // Array is sorted in ascending order
}
const array1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(array1)); // Output: true

const array2 = [1, 3, 2, 4, 5];
console.log(isSortedAscending(array2)); // Output: false
