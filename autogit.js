function findKthSmallestElement(arr, k) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  return arr[k - 1]; // Return the kth element (subtract 1 as the index is zero-based)
}
function findKthSmallestElement(arr, k) {
  if (k < 1 || k > arr.length) {
    return null; // Invalid input
  }

  function partition(arr, left, right) {
    const pivotValue = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
      if (arr[j] < pivotValue) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        i++;
      }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]]; // Swap pivot with partition position
    return i;
  }

  function quickselect(arr, left, right, k) {
    if (left === right) {
      return arr[left];
    }

    const pivotIndex = partition(arr, left, right);

    if (k === pivotIndex) {
      return arr[k];
    } else if (k < pivotIndex) {
      return quickselect(arr, left, pivotIndex - 1, k);
    } else {
      return quickselect(arr, pivotIndex + 1, right, k);
    }
  }

  return quickselect(arr, 0, arr.length - 1, k - 1); // Subtract 1 as the index is zero-based
}
