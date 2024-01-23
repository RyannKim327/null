function interpolationSearch(arr, target, low, high) {
  if (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos = low + Math.floor((target - arr[low]) * (high - low) / (arr[high] - arr[low]));

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] > target) {
      return interpolationSearch(arr, target, low, pos - 1);
    }

    return interpolationSearch(arr, target, pos + 1, high);
  }

  return -1;
}
