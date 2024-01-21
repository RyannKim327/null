function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return null; // Invalid input
  }
  
  return quickselect(arr, k, 0, arr.length - 1);
}

function quickselect(arr, k, left, right) {
  if (left === right) {
    return arr[left]; // Base case: Array with single element
  }
  
  // Choose a pivot element
  let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
  pivotIndex = partition(arr, left, right, pivotIndex);

  // Recurse on subarray containing kth smallest element
  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickselect(arr, k, left, pivotIndex - 1);
  } else {
    return quickselect(arr, k, pivotIndex + 1, right);
  }
}

function partition(arr, left, right, pivotIndex) {
  const pivotValue = arr[pivotIndex];
  swap(arr, pivotIndex, right); // Move pivot to the right
  
  let currentIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, currentIndex);
      currentIndex++;
    }
  }
  
  swap(arr, currentIndex, right); // Move pivot to its final place
  return currentIndex;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;

const kthSmallest = findKthSmallest(arr, k);
console.log(kthSmallest); // Output: 7
