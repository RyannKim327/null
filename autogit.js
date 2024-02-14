function interpolationSearch(arr, target, low = 0) {
  let high = arr.length - 1;
  let position;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    position = Math.floor(
      low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    if (position < low || position > high || arr[position] === target) {
      return position;
    }

    if (arr[position] < target) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return -1;
}
