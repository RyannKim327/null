function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      return mid; // Found target, return index
    } else if (midValue < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return -1; // Target not found
}
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const index = binarySearch(sortedArray, target);

console.log(index); // Output: 3
