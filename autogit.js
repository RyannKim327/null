function interpolationSearch(arr, value, isAscending) {
  // ...
}
function interpolationSearch(arr, value, isAscending) {
  let low = 0;
  let high = arr.length - 1;
  // ...
}
function interpolationSearch(arr, value, isAscending) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
    // ...
  }
}
let pos = Math.floor(low + ((value - arr[low]) * (high - low)) / (arr[high] - arr[low]));
if (arr[pos] === value) {
  return pos;
}
if (arr[pos] > value) {
  high = pos - 1;
} else {
  low = pos + 1;
}
if (arr[pos] < value) {
  low = pos + 1;
} else {
  high = pos - 1;
}
return -1;
function interpolationSearch(arr, value, isAscending) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let pos = Math.floor(low + ((value - arr[low]) * (high - low)) / (arr[high] - arr[low]));
    
    if (arr[pos] === value) {
      return pos;
    }

    if (arr[pos] > value) {
      high = pos - 1;
    } else {
      low = pos + 1;
    }
  }

  return -1;
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const value = 7;
const isAscending = true;

const result = interpolationSearch(arr, value, isAscending);

if (result !== -1) {
  console.log(`Found at index ${result}`);
} else {
  console.log("Not found");
}
