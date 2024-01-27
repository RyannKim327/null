function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // If the target is not found in the array
}

// Example usage:
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 10;
const index = binarySearch(array, target);

if (index !== -1) {
  console.log("Target found at index", index);
} else {
  console.log("Target not found in the array");
}
