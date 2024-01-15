function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return -1; // Invalid k value
  }

  let sortedArr = arr.slice().sort((a, b) => a - b);
  return sortedArr[k - 1];
}
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickselect(arr, low, high, k) {
  if (k > 0 && k <= high - low + 1) {
    let pivotIndex = partition(arr, low, high);

    if (pivotIndex - low === k - 1) {
      return arr[pivotIndex];
    } else if (pivotIndex - low > k - 1) {
      return quickselect(arr, low, pivotIndex - 1, k);
    } else {
      return quickselect(arr, pivotIndex + 1, high, k - pivotIndex + low - 1);
    }
  }

  return -1; // Invalid k value
}

function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return -1; // Invalid k value
  }

  return quickselect(arr, 0, arr.length - 1, k);
}
