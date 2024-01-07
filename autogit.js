function findKthSmallest(arr, k) {
  // Define a helper function to perform the partition
  function partition(left, right, pivotIndex) {
    const pivotValue = arr[pivotIndex];
    let i = left;

    // Move the pivot to the right
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

    // Iterate through the array
    for (let j = left; j < right; j++) {
      if (arr[j] < pivotValue) {
        // Swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    // Move the pivot to the correct position
    [arr[i], arr[right]] = [arr[right], arr[i]];

    return i;
  }

  // Perform quickselect
  function quickselect(left, right, k) {
    // Choose a random pivot
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;

    // Partition the array
    const index = partition(left, right, pivotIndex);

    // Recurse on the left or right side
    if (index === k - 1) {
      return arr[index];
    } else if (index < k - 1) {
      return quickselect(index + 1, right, k);
    } else {
      return quickselect(left, index - 1, k);
    }
  }

  // Call quickselect with the initial array bounds and k
  return quickselect(0, arr.length - 1, k);
}

// Example usage
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;

const kthSmallest = findKthSmallest(arr, k);
console.log(kthSmallest); // Output: 7
