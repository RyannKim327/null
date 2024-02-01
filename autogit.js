function isAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // If any element is greater than the next element,
    // return false as the array is not sorted in ascending order.
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  // If the loop completes without finding any out-of-order elements,
  // return true as the array is sorted in ascending order.
  return true;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
console.log(isAscending(array1)); // true

const array2 = [5, 4, 3, 2, 1];
console.log(isAscending(array2)); // false

const array3 = [1, 3, 2, 4, 5];
console.log(isAscending(array3)); // false
