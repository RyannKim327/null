function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Found the target, return the index
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }
  return -1; // Target not found
}
const nums = [1, 3, 5, 7, 9];
console.log(binarySearch(nums, 5)); // Output: 2
console.log(binarySearch(nums, 8)); // Output: -1
