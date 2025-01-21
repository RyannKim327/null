function binarySearch(arr: number[], target: number, low: number = 0, high: number = arr.length - 1): number | undefined {
  if (low > high) return undefined;

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, high);
  } else {
    return binarySearch(arr, target, low, mid - 1);
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = binarySearch(arr, 5);
console.log(index); // Output: 4
