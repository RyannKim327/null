function interpolationSearch(arr, target, start, end) {
  if (start > end || target < arr[start] || target > arr[end]) {
    return -1;
  }

  let pos = Math.floor(start + ((end - start) / (arr[end] - arr[start])) * (target - arr[start]));

  if (arr[pos] === target) {
    return pos;
  }

  if (arr[pos] < target) {
    return interpolationSearch(arr, target, pos + 1, end);
  }

  if (arr[pos] > target) {
    return interpolationSearch(arr, target, start, pos - 1);
  }

  return -1; // Not found
}

// Example usage:
const arr = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 10;
const index = interpolationSearch(arr, target, 0, arr.length - 1);
console.log(index); // Output: 4
