function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  // Make a copy if you don't want to mutate the original array
  const sortedArr = [...arr];

  for (let i = 0; i < n - 1; i++) {
    // Last i elements are already in place
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        // Swap adjacent elements if they are in wrong order
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }

  return sortedArr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers));  // Output: [11, 12, 22, 25, 34, 64, 90]
