function interpolationSearch(arr, target, n) {
  let low = 0;
  let high = n - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos = Math.floor(
      low + ((target - arr[low]) / (arr[high] - arr[low])) * (high - low)
    );

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
