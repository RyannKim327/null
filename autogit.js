function interpolationSearch(arr, target, low = 0, high = arr.length - 1) {
  // ...
}
  if (low > high) {
    return -1;
  }
  let pos = low + Math.floor((target - arr[low]) * (high - low) / (arr[high] - arr[low]));
  if (arr[pos] === target) {
    return pos;
  }
  if (arr[pos] > target) {
    return interpolationSearch(arr, target, low, pos - 1);
  }
  if (arr[pos] < target) {
    return interpolationSearch(arr, target, pos + 1, high);
  }
  return -1;
function interpolationSearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }

  let pos = low + Math.floor((target - arr[low]) * (high - low) / (arr[high] - arr[low]));

  if (arr[pos] === target) {
    return pos;
  }

  if (arr[pos] > target) {
    return interpolationSearch(arr, target, low, pos - 1);
  }

  if (arr[pos] < target) {
    return interpolationSearch(arr, target, pos + 1, high);
  }

  return -1;
}
