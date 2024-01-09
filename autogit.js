function binarySearch(arr, target, start = 0) {
  if (arr.length === 0 || start >= arr.length) {
    return -1;
  }

  const mid = Math.floor((start + arr.length) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1);
  }
}
