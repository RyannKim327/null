function binarySearch(arr: number[], target: number): number | -1 {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // not found
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = binarySearch(arr, 5);
console.log(index); // output: 4
function binarySearch<T>(arr: T[], target: T): number | -1 {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input array is empty or not an array");
  }

  if (typeof target !== typeof arr[0]) {
    throw new Error("Target type does not match array type");
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // not found
}
