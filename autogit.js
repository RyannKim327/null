function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // target found
    } else if (arr[mid] < target) {
      start = mid + 1; // target might be in the right half
    } else {
      end = mid - 1; // target might be in the left half
    }
  }

  return -1; // target not found
}

// Example usage:
const nums = [2, 5, 7, 12, 16, 23, 31];
const target = 12;
console.log(binarySearch(nums, target)); // Output: 3 (index of target)
