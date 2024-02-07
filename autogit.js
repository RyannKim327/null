function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) return low;
      return -1;
    }
    
    let pos = Math.floor(
      low + ((high - low) / (arr[high] - arr[low])) * (target - arr[low])
    );

    if (arr[pos] === target) return pos;

    if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }

  return -1;
}
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetValue = 7;
const result = interpolationSearch(sortedArray, targetValue);

if (result === -1)
  console.log("Element not found");
else
  console.log(`Element found at index ${result}`);
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) return low;
      return -1;
    }

    let pos = Math.floor(
      low + ((high - low) / (arr[high] - arr[low])) * (target - arr[low])
    );

    if (arr[pos] === target) return pos;

    if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }

  return -1;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetValue = 7;

const result = interpolationSearch(sortedArray, targetValue);

if (result === -1)
  console.log("Element not found");
else
  console.log(`Element found at index ${result}`);
