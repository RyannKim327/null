function binarySearch(arr, target, start, end) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

// Example usage
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const targetValue = 12;
const resultIndex = binarySearch(sortedArray, targetValue, 0, sortedArray.length - 1);

if (resultIndex !== -1) {
  console.log(`Element found at index ${resultIndex}`);
} else {
  console.log("Element not found");
}
