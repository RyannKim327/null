function isSortedAscending(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(array1));  // Output: true

const array2 = [1, 3, 2, 4, 5];
console.log(isSortedAscending(array2));  // Output: false
