function interpolationSearch(arr, target, startIdx = 0) {
  const length = arr.length;
  let low = startIdx;
  let high = length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) {
        return low;
      }
      return -1;
    }

    const pos = Math.floor(low + ((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[pos] === target) {
      return pos;
    }
    
    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 14;

const index = interpolationSearch(array, target);

console.log(`Target ${target} found at index ${index}`);
