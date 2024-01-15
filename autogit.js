function interpolationSearch(arr, x, start = 0, end = arr.length - 1) {
  if (start <= end) {
    const pos = start + Math.floor(((x - arr[start]) / (arr[end] - arr[start])) * (end - start));

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
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(interpolationSearch(arr, 8)); // Output: 3 (index of 8 in the array)
console.log(interpolationSearch(arr, 15)); // Output: -1 (element not found)
