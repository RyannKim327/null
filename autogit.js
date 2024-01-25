function interpolationSearch(arr, target, low, high) {
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) return low;
      return -1;
    }
    
    const position = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));
    
    if (arr[position] === target) {
      return position;
    }
    
    if (arr[position] < target) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  
  return -1;
}
