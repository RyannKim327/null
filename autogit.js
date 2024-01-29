function interpolationSearch(arr, x, n) {
  let low = 0;
  let high = n - 1;
  
  while (low <= high && x >= arr[low] && x <= arr[high]) {
    if (low === high) {
      if (arr[low] === x) return low;
      return -1;
    }

    const pos = low + Math.floor((x - arr[low]) * (high - low) / (arr[high] - arr[low]));

    if (arr[pos] === x) return pos;

    if (arr[pos] < x) low = pos + 1;
    else high = pos - 1;
  }
  
  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const x = 12;
const n = arr.length;

const result = interpolationSearch(arr, x, n);
console.log(result); // Output: 5
