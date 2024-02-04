function isSortedAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(array1)); // true

const array2 = [5, 4, 3, 2, 1];
console.log(isSortedAscending(array2)); // false
