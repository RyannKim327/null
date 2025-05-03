function interpolationSearch(arr: number[], key: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && key >= arr[low] && key <= arr[high]) {
    if (low === high) {
      if (arr[low] === key) return low;
      return -1;
    }

    // Estimate the position with interpolation formula
    const pos = low + Math.floor(
      ((key - arr[low]) * (high - low)) / (arr[high] - arr[low])
    );

    if (arr[pos] === key) return pos;

    if (arr[pos] < key) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1; // not found
}
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;

const index = interpolationSearch(sortedArray, target);

console.log(index); // Output: 6
