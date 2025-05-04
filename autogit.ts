function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  // Make a copy if you don't want to mutate the original array
  const result = [...arr];
  
  for (let i = 0; i < n - 1; i++) {
    // Last i elements are already in place
    for (let j = 0; j < n - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        // Swap
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  
  return result;
}
const unsorted = [5, 3, 8, 4, 2];
const sorted = bubbleSort(unsorted);
console.log(sorted); // [2, 3, 4, 5, 8]
