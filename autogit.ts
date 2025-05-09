function binarySearchRecursive(
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1
): number {
  if (left > right) {
    return -1; // target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}
const sortedArray = [1, 3, 5, 7, 9, 11];
const targetValue = 7;
const index = binarySearchRecursive(sortedArray, targetValue);
console.log(index); // Output: 3
