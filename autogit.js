function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const midpoint = Math.floor((start + end) / 2);

    if (array[midpoint] === target) {
      return midpoint;
    } else if (array[midpoint] < target) {
      start = midpoint + 1;
    } else {
      end = midpoint - 1;
    }
  }

  return -1;
}

// Example usage:
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(binarySearch(arr, 10));  // Output: 4 (index of 10)
console.log(binarySearch(arr, 5));   // Output: -1 (not found)
