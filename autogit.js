function binarySearch(arr, target, left = 0, right = arr.length - 1) {
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

  return -1;
}

// Example usage:
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18];
console.log(binarySearch(arr, 10));  // Outputs: 4
console.log(binarySearch(arr, 5));   // Outputs: -1 (not found)
