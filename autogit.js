function interpolationSearch(arr, target) {
  // implementation goes here
}
let left = 0;
let right = arr.length - 1;
while (left <= right && target >= arr[left] && target <= arr[right]) {
  // implementation goes here
}
let pos = left + Math.floor((target - arr[left]) * (right - left) / (arr[right] - arr[left]));
if (arr[pos] === target) {
  return pos;
}
if (arr[pos] < target) {
  left = pos + 1;
} else {
  right = pos - 1;
}
return -1;
function interpolationSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right && target >= arr[left] && target <= arr[right]) {
    let pos = left + Math.floor((target - arr[left]) * (right - left) / (arr[right] - arr[left]));

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }

  return -1;
}
