function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target index
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

// Example usage of binarySearch
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
const targetNumber = 9;
const targetIndex = binarySearch(numbers, targetNumber);

if (targetIndex !== -1) {
  console.log(`Found ${targetNumber} at index ${targetIndex}`);
} else {
  console.log(`Unable to find ${targetNumber}`);
}
