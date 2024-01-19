function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

function quickselect(arr, k, left = 0, right = arr.length - 1) {
  if (left === right) {
    return arr[left];
  }
  const pivotIndex = partition(arr, left, right);
  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickselect(arr, k, left, pivotIndex - 1);
  } else {
    return quickselect(arr, k, pivotIndex, right);
  }
}

// Example usage
const array = [5, 2, 8, 3, 1, 9, 4];
const k = 3;
const kthSmallest = quickselect(array, k - 1);
console.log(`The ${k}th smallest element is ${kthSmallest}`);
