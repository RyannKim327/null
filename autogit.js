function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return null; // invalid input
  }

  // Helper function to swap array elements
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Helper function to partition the array
  function partition(arr, left, right, pivotIndex) {
    const pivotValue = arr[pivotIndex];
    let partitionIndex = left;

    swap(arr, pivotIndex, right); // move pivot to end

    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }

    swap(arr, partitionIndex, right); // move pivot to its final place
    return partitionIndex;
  }

  function quickselect(arr, left, right, k) {
    if (left === right) {
      return arr[left];
    }

    const randomPivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivotIndex = partition(arr, left, right, randomPivotIndex);
    const pivotRank = pivotIndex - left + 1;

    if (k === pivotRank) {
      return arr[pivotIndex];
    } else if (k < pivotRank) {
      return quickselect(arr, left, pivotIndex - 1, k);
    } else {
      return quickselect(arr, pivotIndex + 1, right, k - pivotRank);
    }
  }

  return quickselect(arr, 0, arr.length - 1, k);
}
const nums = [5, 8, 2, 9, 1, 7];
const k = 3;
const kthSmallest = findKthSmallest(nums, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
