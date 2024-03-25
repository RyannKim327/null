function mergeSortIterative(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const n = arr.length;
  
  for (let blockSize = 1; blockSize < n; blockSize *= 2) {
    for (let start = 0; start < n - 1; start += 2 * blockSize) {
      const mid = Math.min(start + blockSize - 1, n - 1);
      const end = Math.min(start + 2 * blockSize - 1, n - 1);
      merge(arr, start, mid, end);
    }
  }
  
  return arr;
}

function merge(arr, start, mid, end) {
  const left = arr.slice(start, mid + 1);
  const right = arr.slice(mid + 1, end + 1);
  
  let i = 0, j = 0, k = start;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }
  
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  
  while (j < right.length) {
    arr[k++] = right[j++];
  }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
