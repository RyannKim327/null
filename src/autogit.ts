function isSortedAscending<T>(array: T[]): boolean {
  // Loop through the array up to the second last element
  for (let i = 0; i < array.length - 1; i++) {
    // Compare current element with the next
    if (array[i] > array[i + 1]) {
      // If current element is greater than the next, array is not sorted
      return false;
    }
  }
  // If the loop completes, array is sorted in ascending order
  return true;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 5];

console.log(isSortedAscending(arr1)); // true
console.log(isSortedAscending(arr2)); // false
