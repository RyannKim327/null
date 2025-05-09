function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  // Make a copy to avoid mutating the original array
  const sortedArr = [...arr];

  for (let i = 0; i < n - 1; i++) {
    // Flag to check if any swap happened in this pass
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        // Swap adjacent elements
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        swapped = true;
      }
    }

    // If no swaps in this pass, array is sorted
    if (!swapped) break;
  }

  return sortedArr;
}

// Example:
const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr));  // Output: [2, 3, 4, 5, 8]
