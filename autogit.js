function interpolationSearch(arr, target, start = 0) {
  if (start > arr.length - 1) {
    return -1; // Target value not found
  }

  let pos = start + Math.floor(
    (target - arr[start]) * (arr.length - 1 - start) / (arr[arr.length - 1] - arr[start])
  );

  if (arr[pos] === target) {
    return pos; // Target value found
  }

  if (arr[pos] > target) {
    return interpolationSearch(arr, target, pos + 1);
  }

  if (arr[pos] < target) {
    return interpolationSearch(arr, target, pos - 1);
  }

  return -1; // Target value not found
}
const arr = [1, 4, 8, 12, 16, 20, 24, 28, 32, 36];
const target = 16;

const result = interpolationSearch(arr, target);
console.log(`Target value found at index ${result}`);
