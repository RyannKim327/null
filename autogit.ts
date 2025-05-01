function interpolationSearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // To avoid division by zero when arr[high] == arr[low]
    if (arr[high] === arr[low]) {
      if (arr[low] === target) return low;
      else break;
    }

    // Estimate the position using interpolation formula
    const pos = low + Math.floor(
      ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      low = pos + 1; // Search in the right sub-array
    } else {
      high = pos - 1; // Search in the left sub-array
    }
  }

  // Target not found
  return -1;
}
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(interpolationSearch(arr, 70)); // Output: 6
console.log(interpolationSearch(arr, 25)); // Output: -1
