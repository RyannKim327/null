function interpolationSearch(arr, target, low = 0) {
  // Implementation goes here
}
const high = arr.length - 1;
if (low <= high && target >= arr[low] && target <= arr[high]) {
  // Continue with the algorithm
} else {
  return -1;
}
const pos = Math.floor(
  low + ((target - arr[low]) / (arr[high] - arr[low])) * (high - low)
);
if (arr[pos] === target) {
  return pos;
}
if (arr[pos] > target) {
  return interpolationSearch(arr, target, low, pos - 1);
} else {
  return interpolationSearch(arr, target, pos + 1, high);
}
return -1;
function interpolationSearch(arr, target, low = 0) {
  const high = arr.length - 1;

  if (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos = Math.floor(
      low + ((target - arr[low]) / (arr[high] - arr[low])) * (high - low)
    );

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] > target) {
      return interpolationSearch(arr, target, low, pos - 1);
    } else {
      return interpolationSearch(arr, target, pos + 1, high);
    }
  }

  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 10;

const result = interpolationSearch(arr, target);
console.log(result); // Output: 4 (index of target value in the array)
