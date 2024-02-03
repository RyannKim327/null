function interpolationSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let pos = Math.floor(left + ((target - arr[left]) * (right - left)) / (arr[right] - arr[left]));

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }

  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 10;

console.log(interpolationSearch(arr, target)); // Output: 4
