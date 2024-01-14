function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [3, 2, 1, 4, 5];

console.log(isSortedAscending(sortedArray));      // Output: true
console.log(isSortedAscending(unsortedArray));    // Output: false
