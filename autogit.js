function interpolationSearch(arr, x, low = 0) {
  let high = arr.length - 1;
  let pos = -1;

  while (low <= high && x >= arr[low] && x <= arr[high]) {
    pos = Math.floor(low + ((x - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[pos] === x) {
      return pos;
    }

    if (arr[pos] < x) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 16;

const result = interpolationSearch(arr, target); // returns the index where 16 is found in the array
console.log(result); // Output: 4
