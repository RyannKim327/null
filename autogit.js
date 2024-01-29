function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

// Test the binary search function
const numbers = [2, 5, 7, 10, 15, 20, 22, 25, 30];
const targetNumber = 10;
const index = binarySearch(numbers, targetNumber);

if (index !== -1) {
  console.log(`Found ${targetNumber} at index ${index}`);
} else {
  console.log(`${targetNumber} not found in the array`);
}
