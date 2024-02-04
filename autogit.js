function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Calculate the position using interpolation formula
    let pos = Math.floor(low + ((target - arr[low]) / (arr[high] - arr[low])) * (high - low));
    
    // If target is found, return the index
    if (arr[pos] === target) {
      return pos;
    }
    
    // If target is less, search the left subarray
    if (arr[pos] > target) {
      high = pos - 1;
    }
    
    // If target is greater, search the right subarray
    else {
      low = pos + 1;
    }
  }
  
  // If target is not found, return -1
  return -1;
}

// Example usage
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

const index = interpolationSearch(arr, target);
console.log("Element found at index:", index);
