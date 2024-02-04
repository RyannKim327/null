function interpolationSearch(arr, x, startIdx = 0) {
  const length = arr.length;
  let low = startIdx;
  let high = length - 1;

  while (low <= high && x >= arr[low] && x <= arr[high]) {
    if (low === high) {
      if (arr[low] === x) {
        return low;
      }
      return -1;
    }

    const position = low + Math.floor(((x - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[position] === x) {
      return position;
    }

    if (arr[position] < x) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return -1;
}

// Usage example:
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const x = 23;
const index = interpolationSearch(arr, x);
console.log(`Element ${x} is present at index ${index}`);
