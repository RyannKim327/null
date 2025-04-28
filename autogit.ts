function interpolationSearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Handle division by zero
    if (arr[high] === arr[low]) {
      if (arr[low] === target) return low;
      return -1;
    }

    // Estimate the position
    const pos = low + Math.floor(
      ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    // Check if target is found
    if (arr[pos] === target) {
      return pos;
    } else if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  // Not found
  return -1;
}
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(interpolationSearch(data, 70)); // Should output index 6
console.log(interpolationSearch(data, 25)); // Should output -1
