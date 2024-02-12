function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }
  
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  return -1;
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 9;
console.log(binarySearch(array, targetValue)); // Output: 4 (the index of the target value in the array)
