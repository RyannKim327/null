function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return mid;
    }

    if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1; // Target not found
}

// Example usage:
const array = [1, 3, 5, 7, 9];
const target = 5;
const index = binarySearch(array, target);
if (index !== -1) {
  console.log(`Target found at index ${index}`);
} else {
  console.log("Target not found");
}
