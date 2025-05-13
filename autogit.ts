function interpolationSearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Prevent division by zero if arr[high] == arr[low]
    if (arr[high] === arr[low]) {
      if (arr[low] === target) return low;
      else break;
    }

    // Estimate the position of the target value
    const pos = low + Math.floor(
      ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    // Check the found position
    if (arr[pos] === target) return pos;

    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1; // target not found
}
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 70;

const index = interpolationSearch(sortedArray, target);
console.log(index);  // Output: 6
