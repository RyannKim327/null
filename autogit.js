function quickSort(arr) {
  // Base case: An array of 0 or 1 elements is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element (can be random or middle)
  const pivot = arr[Math.floor(arr.length / 2)];

  // Partition the array into two sub-arrays
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  // Recursively sort the sub-arrays and join them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Usage example
const array = [5, 3, 8, 4, 2, 1, 9, 6, 7];
console.log(quickSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
