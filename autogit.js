function isAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
console.log(isAscending(array1)); // Output: true

const array2 = [7, 2, 9, 5, 3];
console.log(isAscending(array2)); // Output: false
