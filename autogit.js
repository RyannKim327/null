function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(arr1)); // true

const arr2 = [1, 3, 2, 4, 5];
console.log(isSortedAscending(arr2)); // false
