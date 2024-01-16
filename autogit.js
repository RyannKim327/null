function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // return the index if found
    } else if (arr[mid] < target) {
      left = mid + 1; // search the right half
    } else {
      right = mid - 1; // search the left half
    }
  }

  return -1; // return -1 if not found
}

// Example usage:
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

console.log(binarySearch(array, target)); // Output: 5
