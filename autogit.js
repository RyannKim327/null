function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) return low;
      return -1;
    }

    // Estimate the position of the target value
    const pos = Math.floor(
      low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    // Target value found
    if (arr[pos] === target) {
      return pos;
    }

    // If the target value is smaller, narrow the search to the left side of the array
    if (arr[pos] > target) {
      high = pos - 1;
    } else { // The target value is larger, narrow the search to the right side
      low = pos + 1;
    }
  }

  return -1; // Target value not found
}
const array = [2, 4, 7, 10, 14, 18, 20];
const target = 14;
const index = interpolationSearch(array, target);
console.log(`Target value ${target} found at index ${index}`);
Target value 14 found at index 4
