function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  // Create a copy of the array to avoid mutating the original
  let sortedArr = [...arr];

  for (let i = 0; i < n - 1; i++) {
    // Flag to check if any swaps happened; if not, array is sorted
    let swapped = false;

    // Last i elements are already sorted
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        // Swap adjacent elements if they are in wrong order
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        swapped = true;
      }
    }

    // If no swaps occurred in this pass, the array is sorted
    if (!swapped) break;
  }

  return sortedArr;
}

// Example usage:
const numbers = [5, 3, 8, 4, 2];
const sorted = bubbleSort(numbers);
console.log(sorted);  // Output: [2, 3, 4, 5, 8]
