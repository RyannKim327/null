function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // If any element is greater than the next one, the array is not sorted
    }
  }
  return true; // If the loop completes without returning false, the array is sorted
}
const arr1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(arr1)); // Output: true

const arr2 = [5, 4, 3, 2, 1];
console.log(isSortedAscending(arr2)); // Output: false

const arr3 = [1, 3, 2, 4, 5];
console.log(isSortedAscending(arr3)); // Output: false
