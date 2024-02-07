function findKthSmallest(arr, k) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Return the kth smallest element
  return arr[k - 1];
}
function findKthSmallest(arr, k) {
  // Helper function to partition the array
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

  // Recursive function to find Kth smallest element
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

  // Call the recursive function
  return quickselect(arr, 0, arr.length - 1, k - 1);
}
const arr = [3, 1, 6, 2, 4, 5];
const k = 3;

console.log(findKthSmallest(arr, k)); // Output: 3
