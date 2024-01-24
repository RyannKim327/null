function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if target is present at mid
    if (arr[mid] === target) {
      return mid;
    }

    // If target is greater, ignore the left half
    if (arr[mid] < target) {
      left = mid + 1;
    }
    // If target is smaller, ignore the right half
    else {
      right = mid - 1;
    }
  }

  // Target was not found
  return -1;
}

// Example usage:
const sortedArray = [2, 4, 6, 8, 10, 12];
const target = 8;
const index = binarySearch(sortedArray, target);

if (index !== -1) {
  console.log(`Target found at index ${index}`);
} else {
  console.log("Target not found");
}
