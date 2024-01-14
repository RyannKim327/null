function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// Example usage
const numbers = [1, 3, 5, 7, 9];
const target = 7;
const result = binarySearch(numbers, target);

if (result === -1) {
  console.log("Element not found in array");
} else {
  console.log(`Element found at index ${result}`);
}
