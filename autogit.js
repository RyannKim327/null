function interpolationSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right && target >= arr[left] && target <= arr[right]) {
    const pos =
      Math.floor(
        left + ((target - arr[left]) / (arr[right] - arr[left])) * (right - left)
      );

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] > target) {
      right = pos - 1;
    } else {
      left = pos + 1;
    }
  }

  return -1;
}
