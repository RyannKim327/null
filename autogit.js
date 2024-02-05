function interpolationSearch(arr, x, start, end) {
  if (start <= end && x >= arr[start] && x <= arr[end]) {
    const pos = start + Math.floor(((x - arr[start]) * (end - start)) / (arr[end] - arr[start]));

    if (arr[pos] === x) {
      return pos;
    }

    if (arr[pos] > x) {
      return interpolationSearch(arr, x, start, pos - 1);
    }

    if (arr[pos] < x) {
      return interpolationSearch(arr, x, pos + 1, end);
    }
  }

  return -1;
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const valueToFind = 13;
console.log(interpolationSearch(sortedArray, valueToFind, 0, sortedArray.length - 1)); // Output: 6 (index of valueToFind)
