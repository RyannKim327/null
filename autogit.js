function interpolationSearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && key >= arr[low] && key <= arr[high]) {
    // Perform interpolation calculation
    let position = low + Math.floor(((key - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[position] === key) {
      return position; // Key found at the calculated position
    }

    if (arr[position] < key) {
      low = position + 1; // Key is in the upper half
    } else {
      high = position - 1; // Key is in the lower half
    }
  }

  return -1; // Key not found
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const key = 12;
const index = interpolationSearch(arr, key);

if (index !== -1) {
  console.log(`Key ${key} found at index ${index}.`);
} else {
  console.log(`Key ${key} not found.`);
}
