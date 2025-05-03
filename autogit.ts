function bubbleSort(arr: number[]): number[] {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Last i elements are already in place
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unsortedArray)); 
// Output: [11, 12, 22, 25, 34, 64, 90]
