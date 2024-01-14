function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target, return the index
    }

    if (arr[mid] < target) {
      left = mid + 1; // Adjust the left pointer
    } else {
      right = mid - 1; // Adjust the right pointer
    }
  }

  return -1; // Target not found
}

// Usage example:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];

console.log(binarySearch(sortedArray, 9)); // Outputs: 4 (index of 9 in the array)
console.log(binarySearch(sortedArray, 4)); // Outputs: -1 (target not found)
