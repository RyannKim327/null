function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // Found the target
    } else if (array[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target was not found
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 7;
const index = binarySearch(arr, target);

console.log("Index of", target, "is", index);
