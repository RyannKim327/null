function findKthSmallest(arr, k) {
  // Implement partition function
  function partition(arr, left, right) {
    const pivot = right;
    let i = left;

    for (let j = left; j < right; j++) {
      if (arr[j] < arr[pivot]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    return i;
  }

  // Implement quickselect function
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

  // Check if k is within the array bounds
  if (k < 0 || k >= arr.length) {
    return null;
  }

  return quickselect(arr, 0, arr.length - 1, k);
}

// Example usage
const arr = [7, 10, 4, 3, 20, 15];
const k = 2; // Find the 2nd smallest element
const result = findKthSmallest(arr, k);
console.log(result); // Output: 7
