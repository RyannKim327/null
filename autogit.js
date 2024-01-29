function quickSelect(arr, left, right, k) {
  if (left === right) {
    return arr[left];
  }

  // Partition the array
  const pivotIndex = partition(arr, left, right);
  
  // Recurse on the appropriate subarray
  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex + 1, right, k);
  }
}

function partition(arr, left, right) {
  const pivotValue = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    // Swap elements smaller than the pivot to the left
    if (arr[j] < pivotValue) {
      swap(arr, i, j);
      i++;
    }
  }

  // Move the pivot to its final position
  swap(arr, i, right);

  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage
const array = [8, 4, 2, 10, 5, 9, 7];
const k = 3; // find the 3rd smallest element
const kthSmallest = quickSelect(array, 0, array.length - 1, k - 1);
console.log(kthSmallest); // Output: 5
