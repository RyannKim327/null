function interpolationSearch(arr, x, start = 0, end = arr.length - 1) {
  // ...
}
  if (start <= end && x >= arr[start] && x <= arr[end]) {
    // ...
  } else {
    return -1; // Not found
  }
  const pos = start + Math.floor((x - arr[start]) * (end - start) / (arr[end] - arr[start]));
  if (arr[pos] === x) {
    return pos; // Found
  }
  if (arr[pos] > x) {
    return interpolationSearch(arr, x, start, pos - 1);
  }
  if (arr[pos] < x) {
    return interpolationSearch(arr, x, pos + 1, end);
  }
  return -1; // Not found
function interpolationSearch(arr, x, start = 0, end = arr.length - 1) {
  if (start <= end && x >= arr[start] && x <= arr[end]) {
    const pos = start + Math.floor((x - arr[start]) * (end - start) / (arr[end] - arr[start]));

    if (arr[pos] === x) {
      return pos; // Found
    }

    if (arr[pos] > x) {
      return interpolationSearch(arr, x, start, pos - 1);
    }

    if (arr[pos] < x) {
      return interpolationSearch(arr, x, pos + 1, end);
    }
  }

  return -1; // Not found
}
