function binarySearch(arr: number[], target: number): number {
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

  return -1; // target not found
}
const numbers = [1, 3, 5, 7, 9, 11];
const target = 7;

const index = binarySearch(numbers, target);
console.log(index); // Output: 3
