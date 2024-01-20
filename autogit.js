function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target, return the index
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is on the right half
    } else {
      right = mid - 1; // Target is on the left half
    }
  }

  return -1; // Target not found
}

// Usage example:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
const index = binarySearch(sortedArray, target);

if (index >= 0) {
  console.log(`Target ${target} found at index ${index}`);
} else {
  console.log(`Target ${target} not found`);
}
