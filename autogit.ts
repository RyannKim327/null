function binarySearch(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number {
  if (left > right) {
    return -1; // Not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Found the target
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // Search right half
  } else {
    return binarySearch(arr, target, left, mid - 1); // Search left half
  }
}
const sortedArray = [1, 3, 5, 7, 9, 11];
const index = binarySearch(sortedArray, 7);
console.log(index); // Output: 3
