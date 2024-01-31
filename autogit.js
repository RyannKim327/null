function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Element found at mid index
    } 
    else if (arr[mid] < target) {
      left = mid + 1; // Discard left half
    } 
    else {
      right = mid - 1; // Discard right half
    }
  }

  return -1; // Element not found
}

// Usage
const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 16;

console.log(binarySearch(numbers, target)); // Output: 4
