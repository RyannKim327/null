function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      return middle; // found the target
    } else if (arr[middle] > target) {
      end = middle - 1; // adjust the end index
    } else {
      start = middle + 1; // adjust the start index
    }
  }

  return -1; // target not found
}

// Example usage:
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;
const index = binarySearch(array, target);
console.log(index); // Output: 5
