function findKthSmallest(arr, k) {
  // Make a copy of the original array
  const arrCopy = [...arr];

  // Recursive function to partition the array and find the kth smallest element
  function quickselect(arr, left, right, k) {
    // Base case: if left and right indices are the same, we found the kth smallest element
    if (left === right) {
      return arr[left];
    }

    // Choose a random pivot index between left and right
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;

    // Partition the array and get the index of the pivot element after partitioning
    const pivotIndexAfterPartition = partition(arr, left, right, pivotIndex);

    // If the pivot index is equal to k, we found the kth smallest element
    if (k === pivotIndexAfterPartition) {
      return arr[k];
    }
    // If k is less than the pivot index, perform quickselect on the left partition
    else if (k < pivotIndexAfterPartition) {
      return quickselect(arr, left, pivotIndexAfterPartition - 1, k);
    }
    // If k is greater than the pivot index, perform quickselect on the right partition
    else {
      return quickselect(arr, pivotIndexAfterPartition + 1, right, k);
    }
  }

  // Helper function to partition the array using the pivot element
  function partition(arr, left, right, pivotIndex) {
    const pivotValue = arr[pivotIndex];
    let lesserItemsCount = left;

    // Move the pivot to the end of the current partition
    swap(arr, pivotIndex, right);

    // Iterate over the array and move smaller elements to the beginning
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, lesserItemsCount);
        lesserItemsCount++;
      }
    }

    // Move the pivot element to its sorted position
    swap(arr, lesserItemsCount, right);

    return lesserItemsCount;
  }

  // Helper function to swap two elements in an array
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Call the quickselect function with initial values
  return quickselect(arrCopy, 0, arr.length - 1, k - 1);
}

// Example usage
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
const kthSmallest = findKthSmallest(arr, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
