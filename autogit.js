function interpolationSearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
    let mid = Math.floor(low + ((value - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (mid < 0 || mid >= arr.length || arr[mid] === value) {
      return mid;
    }

    if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
