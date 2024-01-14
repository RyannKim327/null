function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return mid; // Found the target, return the index
    }

    if (guess > target) {
      high = mid - 1; // Target is in the lower half
    } else {
      low = mid + 1; // Target is in the upper half
    }
  }

  return -1; // Target value not found
}

// Usage example:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];

console.log(binarySearch(sortedArray, 7)); // Output: 3 (index of value 7 in the array)
console.log(binarySearch(sortedArray, 4)); // Output: -1 (target value not found in the array)
