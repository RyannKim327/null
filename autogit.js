function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // If current element is greater than the next element, array is not sorted in ascending order
    }
  }
  return true; // If all elements are in ascending order or the array is empty, it is sorted
}
const array1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(array1)); // Output: true

const array2 = [4, 2, 6, 1, 3];
console.log(isSortedAscending(array2)); // Output: false
