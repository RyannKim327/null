function interpolationSearch(arr, target, low, high) {
  if (low <= high) {
    const range = arr[high] - arr[low];
    const pos = low + Math.floor((target - arr[low]) * (high - low) / range);

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      return interpolationSearch(arr, target, pos + 1, high);
    }

    if (arr[pos] > target) {
      return interpolationSearch(arr, target, low, pos - 1);
    }
  }

  return -1;
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetElement = 11;
const result = interpolationSearch(sortedArray, targetElement, 0, sortedArray.length - 1);
console.log(result); // Output: 5 (index of the target element in the array)
