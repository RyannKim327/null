function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example usages:
console.log(isSortedAscending([1, 2, 3, 4, 5]));  // true
console.log(isSortedAscending([1, 2, 4, 3, 5]));  // false
console.log(isSortedAscending([5, 4, 3, 2, 1]));  // false
console.log(isSortedAscending([]));               // true (an empty array is considered sorted)
