function interpolationSearch(arr, x, low, high) {
  if (low <= high && x >= arr[low] && x <= arr[high]) {
    const position =
      low +
      Math.floor(((high - low) * (x - arr[low])) / (arr[high] - arr[low]));

    if (arr[position] === x) {
      return position;
    }

    if (arr[position] < x) {
      return interpolationSearch(arr, x, position + 1, high);
    }

    if (arr[position] > x) {
      return interpolationSearch(arr, x, low, position - 1);
    }
  }

  return -1;
}

// Usage example:
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const element = 14;

const index = interpolationSearch(array, element, 0, array.length - 1);
console.log(`Element found at index ${index}`);
