function interpolationSearch(arr, x, start, end) {
  if (start > end) {
    return -1;  // Element not found
  }

  // Calculate the position using the interpolation formula
  let pos = start + ((x - arr[start]) * (end - start)) / (arr[end] - arr[start]);

  // Position is out of bounds
  if (pos < start || pos > end) {
    return -1;
  }
  
  // Element found
  if (arr[pos] === x) {
    return pos;
  }

  // If the value at pos is greater than x, recursively search the left side
  if (arr[pos] > x) {
    return interpolationSearch(arr, x, start, pos - 1);
  } else {  // Else search the right side
    return interpolationSearch(arr, x, pos + 1, end);
  }
}

// Example usage
const arr = [1, 4, 7, 9, 12, 15, 18, 20];
const x = 12;
const index = interpolationSearch(arr, x, 0, arr.length - 1);
console.log(index);  // Output: 4 (index of the element 12 in the array)
