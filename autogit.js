function findKthSmallest(arr, k) {
  // Perform a quickselect to find the kth smallest element
  return quickselect(arr, 0, arr.length - 1, k - 1);
}

function quickselect(arr, low, high, k) {
  if (low === high) {
    // If there's only one element in the range, return it
    return arr[low];
  }

  // Partition the array and get the pivot index
  const pivotIndex = partition(arr, low, high);

  if (k === pivotIndex) {
    // If pivot index is the kth smallest element, return it
    return arr[pivotIndex];
  } else if (k < pivotIndex) {
    // If kth smallest element is in the left partition, recursively quickselect on the left half
    return quickselect(arr, low, pivotIndex - 1, k);
  } else {
    // If kth smallest element is in the right partition, recursively quickselect on the right half
    return quickselect(arr, pivotIndex + 1, high, k);
  }
}

function partition(arr, low, high) {
  // Choose the rightmost element as the pivot
  const pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    // If current element is smaller than or equal to pivot, swap it with the element at index i
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  // Swap the pivot with the element at index i
  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

// Example usage
const array = [5, 9, 1, 3, 7];
const k = 2;
const kthSmallest = findKthSmallest(array, k);
console.log(kthSmallest); // Output: 3
