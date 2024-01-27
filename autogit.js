function interpolationSearch(arr, target) {
  // ...
}
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  // ...
}
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // ...
  }
}
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    // ...
  }
}
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[pos] === target) {
      return pos;
    }

    // ...
  }
}
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[pos] === target) {
      return pos;
    } else if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1; // Return -1 if the target value is not found
}
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 9;

console.log(interpolationSearch(arr, target)); // Output: 4 (index of target value in the array)
