function binarySearch(arr: number[], target: number, low: number = 0, high: number = arr.length - 1): number {
  if (low > high) {
    return -1; // not found
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, high);
  } else {
    return binarySearch(arr, target, low, mid - 1);
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;

const result = binarySearch(arr, target);
console.log(result); // Output: 4
