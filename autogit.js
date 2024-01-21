// Binary Search Function
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Element found, return index
    } else if (arr[mid] < target) {
      start = mid + 1; // Search in the right half
    } else {
      end = mid - 1; // Search in the left half
    }
  }

  return -1; // Element not found
}

// Usage example
const array = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 8;

const result = binarySearch(array, target);

if (result === -1) {
  console.log("Element not found");
} else {
  console.log(`Element found at index ${result}`);
}
