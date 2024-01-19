function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end || target < arr[start] || target > arr[end]) {
    return -1;
  }

  let pos = Math.floor(start + ((target - arr[start]) / (arr[end] - arr[start])) * (end - start));

  if (arr[pos] === target) {
    return pos;
  }

  if (arr[pos] > target) {
    return interpolationSearch(arr, target, start, pos - 1);
  }

  return interpolationSearch(arr, target, pos + 1, end);
}

// Example usage:
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

console.log(interpolationSearch(arr, target)); // Output: 5 (index of element 12)
