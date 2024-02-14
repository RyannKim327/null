function quicksort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    // Recursively sort the left and right partitions
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }

  // Return the sorted array
  return arr;
}

function partition(arr, low, high) {
  // Choose the rightmost element as the pivot
  const pivot = arr[high];
  let i = low; // Index of smaller element

  for (let j = low; j < high; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  // Swap arr[i] and arr[high] (pivot)
  [arr[i], arr[high]] = [arr[high], arr[i]];

  return i;
}

// Example usage
const array = [5, 2, 9, 3, 1, 8, 4, 7, 6];
console.log(quicksort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
