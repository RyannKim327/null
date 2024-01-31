function isSortedAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
const arr1 = [1, 2, 3, 4];
console.log(isSortedAscending(arr1));  // Output: true

const arr2 = [4, 3, 2, 1];
console.log(isSortedAscending(arr2));  // Output: false
