function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) {
        return low;
      }
      return -1;
    }

    let pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;
const index = interpolationSearch(arr, target);
if (index !== -1) {
  console.log(`Element found at index ${index}.`);
} else {
  console.log("Element not found in the array.");
}
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) {
        return low;
      }
      return -1;
    }

    let pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

const index = interpolationSearch(arr, target);

if (index !== -1) {
  console.log(`Element found at index ${index}.`);
} else {
  console.log("Element not found in the array.");
}
