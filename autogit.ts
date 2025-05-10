function binarySearch(
  arr: number[],
  target: number,
  left = 0,
  right = arr.length - 1
): number {
  if (left > right) {
    return -1; // target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // target found
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1); // search left half
  } else {
    return binarySearch(arr, target, mid + 1, right); // search right half
  }
}
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;

const index = binarySearch(sortedArray, target);
console.log(index); // Output: 3 (index of number 7)
