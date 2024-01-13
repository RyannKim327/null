function interpolationSearch(arr, target) {
  var low = 0;
  var high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    var pos = Math.floor(low + ((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

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
