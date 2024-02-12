function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1; // Target element not found
  }

  const mid = start + Math.floor((end - start) / 2);

  if (arr[mid] === target) {
    return mid; // Target element found at mid index
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1); // Recursively search left half
  }

  return binarySearch(arr, target, mid + 1, end); // Recursively search right half
}
