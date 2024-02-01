// Function to perform interpolation search
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  // Iterate until the target is within the range
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Calculate the position using interpolation formula
    let pos =
      low +
      Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    // If the target is found
    if (arr[pos] === target)
      return `Element ${target} found at index ${pos}`;

    // If the target is smaller, move the high pointer
    if (arr[pos] > target)
      high = pos - 1;
    // If the target is larger, move the low pointer
    else
      low = pos + 1;
  }

  // Return message if the target is not found
  return `Element ${target} not found`;
}

// Usage example
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

console.log(interpolationSearch(arr, target));
