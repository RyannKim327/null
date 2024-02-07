function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  while (start <= end) {
    const mid = start + ((end - start) >> 1); // Calculate the middle index
    
    if (arr[mid] === target) {
      return mid; // Target found
    }
    
    if (arr[mid] > target) {
      end = mid - 1; // Search the left half
    } else {
      start = mid + 1; // Search the right half
    }
  }
  
  return -1; // Target not found
}
const numbers = [2, 4, 6, 8, 10, 12, 14];
const target = 6;

const index = binarySearch(numbers, target);
console.log(index); // Output: 2 (the index of the target value)
