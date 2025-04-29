function binarySearch<T>(arr: T[], target: T, compare: (a: T, b: T) => number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparison = compare(arr[mid], target);

    if (comparison === 0) {
      return mid; // Found the target
    } else if (comparison < 0) {
      left = mid + 1; // Continue search in right half
    } else {
      right = mid - 1; // Continue search in left half
    }
  }

  return -1; // Not found
}
const numbers = [1, 3, 5, 7, 9];
const index = binarySearch(numbers, 5, (a, b) => a - b);
console.log(index); // Output: 2
