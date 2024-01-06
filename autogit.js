function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Usage example:
const arr1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(arr1)); // true

const arr2 = [5, 4, 3, 2, 1];
console.log(isSortedAscending(arr2)); // false

const arr3 = [1, 5, 2, 4, 3];
console.log(isSortedAscending(arr3)); // false
