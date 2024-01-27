function interpolationSearch(arr, x, n) {
  let low = 0;
  let high = n - 1;

  while (arr[low] <= x && arr[high] >= x) {
    if (low === high) {
      if (arr[low] === x)
        return low;
      return -1;
    }

    let pos = low + Math.floor(((x - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[pos] === x)
      return pos;

    if (arr[pos] < x)
      low = pos + 1;
    else
      high = pos - 1;
  }

  return -1;
}
const arr = [2, 4, 6, 9, 10, 13, 17, 20];
const x = 13;
const result = interpolationSearch(arr, x, arr.length);

console.log(result); // Output: 5 (index of element 13)
