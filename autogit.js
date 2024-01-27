function interpolationSearch(arr, target, low, high) {
  // ...
}
function interpolationSearch(arr, target, low, high) {
  if (low <= high && target >= arr[low] && target <= arr[high]) {
    // ...
  } else {
    return -1;
  }
}
function interpolationSearch(arr, target, low, high) {
  // Calculate the position of the target element in the array
  // relative to the search range using interpolation formula
  let position = Math.floor(
    low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
  );
  
  // ...
}
function interpolationSearch(arr, target, low, high) {
  let position = Math.floor(
    low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
  );
  
  if (arr[position] === target) {
    return position;
  }
  
  // ...
}
function interpolationSearch(arr, target, low, high) {
  let position = Math.floor(
    low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
  );
  
  if (arr[position] === target) {
    return position;
  } else if (arr[position] > target) {
    return interpolationSearch(arr, target, low, position - 1);
  }
  
  // ...
}
function interpolationSearch(arr, target, low, high) {
  let position = Math.floor(
    low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
  );
  
  if (arr[position] === target) {
    return position;
  } else if (arr[position] > target) {
    return interpolationSearch(arr, target, low, position - 1);
  } else {
    return interpolationSearch(arr, target, position + 1, high);
  }
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;
const low = 0;
const high = arr.length - 1;

const result = interpolationSearch(arr, target, low, high);
if (result === -1) {
  console.log("Element not found");
} else {
  console.log("Element found at index", result);
}
