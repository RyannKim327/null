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

  return -1; // Element not found
}

// Usage example:
const array = [1, 3, 5, 7, 9];
const target = 5;

const index = binarySearch(array, target);

if (index !== -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log("Element not found");
}
