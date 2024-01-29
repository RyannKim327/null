function interpolationSearch(arr, target, start, end) {
  if (start <= end && target >= arr[start] && target <= arr[end]) {
    const pos = start + Math.floor(
      ((target - arr[start]) * (end - start)) / (arr[end] - arr[start])
    );

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      return interpolationSearch(arr, target, pos + 1, end);
    }

    if (arr[pos] > target) {
      return interpolationSearch(arr, target, start, pos - 1);
    }
  }

  return -1;
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;

const position = interpolationSearch(arr, target, 0, arr.length - 1);
console.log('Target found at position:', position); // Output: Target found at position: 4
