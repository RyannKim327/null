function findKthSmallest(arr, k) {
  if (arr.length < k) {
    return -1; // Invalid input if k exceeds array length
  }

  // Helper function to partition the array
  function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
  }

  // Main function to find kth smallest element
  function quickselect(arr, left, right, k) {
    const pivotIndex = partition(arr, left, right);
    if (pivotIndex === k - 1) {
      return arr[pivotIndex];
    } else if (pivotIndex > k - 1) {
      return quickselect(arr, left, pivotIndex - 1, k);
    } else {
      return quickselect(arr, pivotIndex + 1, right, k);
    }
  }

  return quickselect(arr, 0, arr.length - 1, k);
}

// Example usage
const array = [5, 3, 9, 1, 7];
const k = 3;
const kthSmallest = findKthSmallest(array, k);
console.log(`The ${k}th smallest element in [${array}] is ${kthSmallest}`);
