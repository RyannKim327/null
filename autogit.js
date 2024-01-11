function isAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // If any element is greater than the next element, the array is not sorted in ascending order
    }
  }
  return true; // If no elements violate the ascending order, the array is sorted in ascending order
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
console.log(isAscending(array1)); // Output: true

const array2 = [5, 4, 3, 2, 1];
console.log(isAscending(array2)); // Output: false
