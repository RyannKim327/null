function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1; // target value not found
  }

  const middle = Math.floor((start + end) / 2);

  if (array[middle] === target) {
    return middle; // target value found
  } else if (array[middle] > target) {
    return binarySearch(array, target, start, middle - 1); // search in the left half
  } else {
    return binarySearch(array, target, middle + 1, end); // search in the right half
  }
}
