function interpolationSearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  
  while (low <= high && target >= array[low] && target <= array[high]) {
    if (low === high) {
      if (array[low] === target)
        return low;
      return -1;
    }
    
    let mid = low + Math.floor(((target - array[low]) * (high - low)) / (array[high] - array[low]));
    
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else { // array[mid] > target
      high = mid - 1;
    }
  }
  
  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18];
const target = 14;
const result = interpolationSearch(arr, target);
console.log("Target found at index:", result);
