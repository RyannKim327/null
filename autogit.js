function binarySearch(arr, target, startIdx = 0, endIdx = arr.length - 1) {
  const midIdx = Math.floor((startIdx + endIdx) / 2);

  if (startIdx > endIdx) {
    return -1; // Target element not found
  }

  if (target === arr[midIdx]) {
    return midIdx; // Target element found
  }

  if (target < arr[midIdx]) {
    return binarySearch(arr, target, startIdx, midIdx - 1);
  }

  if (target > arr[midIdx]) {
    return binarySearch(arr, target, midIdx + 1, endIdx);
  }
}
const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 16;
const index = binarySearch(numbers, target);

if (index !== -1) {
  console.log(`Target element ${target} found at index ${index}`);
} else {
  console.log(`Target element ${target} not found`);
}
