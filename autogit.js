function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
  // Interpolation search logic goes here
}
function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  // Interpolation search logic goes here
}
let position = start + Math.floor(((end - start) / (arr[end] - arr[start])) * (target - arr[start]));
if (position < start) {
  position = start;
} else if (position > end) {
  position = end;
}
if (arr[position] === target) {
  return position;
}
if (arr[position] > target) {
  return interpolationSearch(arr, target, start, position - 1);
}
if (arr[position] < target) {
  return interpolationSearch(arr, target, position + 1, end);
}
function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  let position = start + Math.floor(((end - start) / (arr[end] - arr[start])) * (target - arr[start]));

  if (position < start) {
    position = start;
  } else if (position > end) {
    position = end;
  }

  if (arr[position] === target) {
    return position;
  }

  if (arr[position] > target) {
    return interpolationSearch(arr, target, start, position - 1);
  }

  if (arr[position] < target) {
    return interpolationSearch(arr, target, position + 1, end);
  }
}
