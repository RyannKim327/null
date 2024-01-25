function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return mid; // Target found
    }

    if (array[mid] < target) {
      start = mid + 1; // Search the upper half
    } else {
      end = mid - 1; // Search the lower half
    }
  }

  return -1; // Target not found
}
