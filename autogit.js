function binarySearch(arr, value, left = 0, right = arr.length - 1) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === value) {
      return mid; // Value found
    } else if (arr[mid] < value) {
      left = mid + 1; // Search the right half
    } else {
      right = mid - 1; // Search the left half
    }
  }

  return -1; // Value not found
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value = 6;

const index = binarySearch(numbers, value);
console.log(index); // Output: 5 (the index of value 6 in the array)
