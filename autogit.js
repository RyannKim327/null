function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
const array1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(array1));  // Output: true

const array2 = [5, 3, 7, 2, 1];
console.log(isSortedAscending(array2));  // Output: false
