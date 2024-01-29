function isSortedAscending(arr) {
  return arr.every((currentValue, index) => {
    if (index === 0) {
      return true;  // First element, always sorted
    } else {
      return currentValue >= arr[index - 1];  // Check if current element is greater than or equal to the previous element
    }
  });
}

// Test the function
const array1 = [1, 2, 3, 4, 5];
console.log(isSortedAscending(array1));  // Output: true

const array2 = [1, 3, 2, 4, 5];
console.log(isSortedAscending(array2));  // Output: false
