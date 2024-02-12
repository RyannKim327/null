function findKthSmallest(arr, k) {
  // Sort array in ascending order
  arr.sort((a, b) => a - b);

  // Return the kth smallest element
  return arr[k - 1];
}

// Example usage
const array = [5, 8, 2, 6, 1, 9];
const kthSmallest = findKthSmallest(array, 3);
console.log(kthSmallest); // Output: 5 (3rd smallest element)
function findKthSmallest(arr, k) {
  // Perform QuickSelect algorithm
  function quickSelect(start, end) {
    if (start === end) return arr[start];

    const pivotIndex = partition(start, end);
    if (k - 1 === pivotIndex) return arr[pivotIndex];
    else if (k - 1 < pivotIndex) return quickSelect(start, pivotIndex - 1);
    else return quickSelect(pivotIndex + 1, end);
  }

  // Partition the array
  function partition(start, end) {
    const pivot = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
  }

  // Handle invalid k values
  if (k < 1 || k > arr.length) return null;

  // Call quickSelect function
  return quickSelect(0, arr.length - 1);
}

// Example usage
const array = [5, 8, 2, 6, 1, 9];
const kthSmallest = findKthSmallest(array, 3);
console.log(kthSmallest); // Output: 5 (3rd smallest element)
