function interpolationSearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && value >= arr[low] && value <= arr[high]) {
    let pos = low + Math.floor((value - arr[low]) * (high - low) / (arr[high] - arr[low]));

    if (arr[pos] === value) {
      return pos;
    }

    if (arr[pos] < value) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}
