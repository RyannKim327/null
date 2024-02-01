function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Element found, return its index.
    } else if (arr[mid] < target) {
      low = mid + 1; // Target is greater, ignore left half.
    } else {
      high = mid - 1; // Target is smaller, ignore right half.
    }
  }

  return -1; // Element not found.
}
const arr = [2, 4, 6, 8, 10, 12, 14];
const target = 10;

console.log(binarySearch(arr, target)); // Output: 4
