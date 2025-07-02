function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 7;

const index = binarySearch(sortedArray, targetValue);
if (index !== -1) {
  console.log(`Found ${targetValue} at index ${index}.`);
} else {
  console.log(`${targetValue} not found in the array.`);
}
