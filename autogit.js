function interpolationSearch(arr, target, length) {
  let low = 0;
  let high = length - 1;

  while (target >= arr[low] && target <= arr[high] && low <= high) {
    const pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}

// Example usage:
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const targetValue = 14;
const result = interpolationSearch(array, targetValue, array.length);

console.log(`Element ${targetValue} is found at index ${result}`);
