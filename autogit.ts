function binarySearch(arr: number[], target: number): number | -1 {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = arr[mid];

    if (midVal === target) {
      return mid; // Found the target, return the index
    } else if (midVal < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}
// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(sortedArray, 7));  // Output: 3
console.log(binarySearch(sortedArray, 2));  // Output: -1
