function interpolationSearch(arr, value, startIdx = 0, endIdx = arr.length - 1) {
  if (startIdx > endIdx || value < arr[startIdx] || value > arr[endIdx]) {
    return -1;
  }

  const range = arr[endIdx] - arr[startIdx];
  const pos = startIdx + Math.floor(((value - arr[startIdx]) / range) * (endIdx - startIdx));

  if (arr[pos] === value) {
    return pos;
  } else if (arr[pos] > value) {
    return interpolationSearch(arr, value, startIdx, pos - 1);
  } else {
    return interpolationSearch(arr, value, pos + 1, endIdx);
  }
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11];
const index = interpolationSearch(arr, 5);
console.log(index); // Output: 2
