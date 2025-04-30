function binarySearch<T>(arr: T[], target: T, left = 0, right = arr.length - 1): number {
  if (left > right) {
    return -1; // Target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Found the target
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}
const nums = [1, 3, 5, 7, 9];
const target = 7;
const index = binarySearch(nums, target);
console.log(index); // Output: 3
