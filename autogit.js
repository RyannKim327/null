function findKthSmallestElement(arr, k) {
  // Perform quickselect to find kth smallest element
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

  // Partition the array
  function partition(arr, left, right) {
    const pivotIndex = Math.floor(Math.random() * (right - left + 1) + left);
    const pivotValue = arr[pivotIndex];
    swap(arr, pivotIndex, right);
    let i = left;

    for (let j = left; j < right; j++) {
      if (arr[j] <= pivotValue) {
        swap(arr, i, j);
        i++;
      }
    }

    swap(arr, i, right);
    return i;
  }

  // Swap two elements in an array
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Validate input
  if (k < 0 || k >= arr.length) {
    return undefined;
  }

  // Find kth smallest element
  return quickselect(arr, 0, arr.length - 1, k);
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
const kthSmallest = findKthSmallestElement(array, k);
console.log(kthSmallest); // Output: 7
