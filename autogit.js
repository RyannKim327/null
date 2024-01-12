function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // If any element is greater than the next element, the array is not sorted in ascending order.
    }
  }
  
  return true; // If the loop completes without returning false, the array is sorted in ascending order.
}
const myArray = [1, 2, 3, 4, 5];
console.log(isSortedAscending(myArray)); // Output: true

const anotherArray = [5, 3, 2, 1];
console.log(isSortedAscending(anotherArray)); // Output: false
