function interpolationSearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Avoid division by zero if arr[high] == arr[low]
    if (arr[high] === arr[low]) {
      if (arr[low] === target) return low;
      return -1;
    }

    // Estimate the position using the interpolation formula
    const pos = low + Math.floor(
      ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1; // target not found
}
const data = [10, 20, 30, 40, 50, 60, 70, 80];
const target = 40;

const index = interpolationSearch(data, target);
console.log(index);  // Output: 3
