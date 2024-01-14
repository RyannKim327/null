let pos = low + Math.floor((x - arr[low]) * (high - low) / (arr[high] - arr[low]));
function interpolationSearch(arr, x, n) {
  let low = 0;
  let high = n - 1;

  while (low <= high && x >= arr[low] && x <= arr[high]) {
    let pos = low + Math.floor((x - arr[low]) * (high - low) / (arr[high] - arr[low]));

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
