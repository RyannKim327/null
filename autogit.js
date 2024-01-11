function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
  // ...
}
function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  // ...
}
function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  // Interpolation formula
  const pos = Math.floor(
    start +
      ((end - start) / (arr[end] - arr[start])) * (target - arr[start])
  );

  // ...
}
function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const pos = Math.floor(
    start +
      ((end - start) / (arr[end] - arr[start])) * (target - arr[start])
  );

  // Adjust position if it's outside array bounds
  if (pos < start) {
    return interpolationSearch(arr, target, start, pos - 1);
  }
  if (pos > end) {
    return interpolationSearch(arr, target, pos + 1, end);
  }

  // ...
}
function interpolationSearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const pos = Math.floor(
    start +
      ((end - start) / (arr[end] - arr[start])) * (target - arr[start])
  );

  if (pos < start) {
    return interpolationSearch(arr, target, start, pos - 1);
  }
  if (pos > end) {
    return interpolationSearch(arr, target, pos + 1, end);
  }

  // Compare the calculated position with the target
  if (arr[pos] === target) {
    return pos;
  } else if (arr[pos] < target) {
    return interpolationSearch(arr, target, pos + 1, end);
  } else {
    return interpolationSearch(arr, target, start, pos - 1);
  }
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;
const index = interpolationSearch(arr, target);
console.log(`The index of ${target} is ${index}`);
