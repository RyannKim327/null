function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return null; // invalid input
  }

  // Define a helper function to partition the array
  function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
  }

  // Use the quickselect algorithm to find the kth smallest element
  function quickselect(arr, low, high, k) {
    if (low === high) {
      return arr[low];
    }

    const pivotIndex = partition(arr, low, high);

    if (k === pivotIndex) {
      return arr[k];
    } else if (k < pivotIndex) {
      return quickselect(arr, low, pivotIndex - 1, k);
    } else {
      return quickselect(arr, pivotIndex + 1, high, k);
    }
  }

  return quickselect(arr, 0, arr.length - 1, k - 1);
}

// Example usage
const array = [3, 1, 5, 2, 4];
const k = 3;
const kthSmallest = findKthSmallest(array, k);

console.log(`The ${k}th smallest element is ${kthSmallest}`); // Output: The 3rd smallest element is 3
