function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // found the target, return its index
    } else if (arr[mid] < target) {
      left = mid + 1; // target is in the right half of the array
    } else {
      right = mid - 1; // target is in the left half of the array
    }
  }

  return -1; // target not found
}

// Example usage:
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18];
const target = 10;
const index = binarySearch(numbers, target);

if (index !== -1) {
  console.log(`Target found at index ${index}`);
} else {
  console.log("Target not found");
}
