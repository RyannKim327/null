function recursiveBinarySearch(arr: number[], target: number, low = 0, high = arr.length - 1): number {
  if (low > high) {
    return -1; // Base case: not found
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] > target) {
    return recursiveBinarySearch(arr, target, low, mid - 1); // Search left half
  } else {
    return recursiveBinarySearch(arr, target, mid + 1, high); // Search right half
  }
}
const arr = [1, 3, 5, 7, 9, 11];

console.log(recursiveBinarySearch(arr, 7)); // Output: 3
console.log(recursiveBinarySearch(arr, 4)); // Output: -1
