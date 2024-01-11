function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // target found, return the index
    }

    if (arr[mid] < target) {
      left = mid + 1; // search in the right half
    } else {
      right = mid - 1; // search in the left half
    }
  }

  return -1; // target not found
}

// Example usage
const array = [2, 4, 7, 10, 13, 15, 20, 25, 30];
const target = 13;

const result = binarySearch(array, target);
console.log(result); // Output: 4
