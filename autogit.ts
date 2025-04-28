function binarySearch(arr: number[], target: number, low: number = 0, high: number = arr.length - 1): number {
  if (low > high) {
    // Base case: target not found
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
  
  if (arr[mid] === target) {
    // Target found at mid
    return mid;
  } else if (arr[mid] < target) {
    // Search right half
    return binarySearch(arr, target, mid + 1, high);
  } else {
    // Search left half
    return binarySearch(arr, target, low, mid - 1);
  }
}
const sortedArray = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(sortedArray, 7)); // Output: 3
console.log(binarySearch(sortedArray, 2)); // Output: -1
