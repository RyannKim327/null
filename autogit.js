// Function to perform binary search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // If the middle element is the target, return its index
    if (arr[mid] === target) {
      return mid;
    }

    // If the target is greater, ignore the left half
    if (arr[mid] < target) {
      left = mid + 1;
    }

    // If the target is smaller, ignore the right half
    else {
      right = mid - 1;
    }
  }

  // Return -1 if the target is not found
  return -1;
}

// Example usage
const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

const index = binarySearch(array, target);
console.log('Index of', target, 'is', index);
