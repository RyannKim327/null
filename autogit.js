pos = low + Math.floor((target - arr[low]) * (high - low) / (arr[high] - arr[low]));
function interpolationSearch(arr, target, size) {
  let low = 0;
  let high = size - 1;
  
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) return low;
      return -1;
    }
  
    let pos = low + Math.floor((target - arr[low]) * (high - low) / (arr[high] - arr[low]));
  
    if (arr[pos] === target) return pos;
  
    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }
  
  return -1;
}
const arr = [1, 3, 5, 7, 9];
const target = 7;
const size = arr.length;

const result = interpolationSearch(arr, target, size);
console.log(result); // Output: 3 (index position of target element)
