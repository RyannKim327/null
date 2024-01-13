function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) {
        return low;
      }
      return -1;
    }

    const position = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]);

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
const arr = [2, 4, 6, 8, 10, 12, 14];
const target = 10;

const index = interpolationSearch(arr, target);

if (index !== -1) {
  console.log(`Element ${target} found at index ${index}`);
} else {
  console.log(`Element ${target} not found in the array`);
}
