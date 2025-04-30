function bubbleInsertionSort(arr: number[]): number[] {
  const result = [...arr];
  
  for (let i = 1; i < result.length; i++) {
    // Do a backward bubble pass from i down to 1
    for (let j = i; j > 0; j--) {
      if (result[j] < result[j - 1]) {
        // Swap adjacent elements if out of order
        [result[j], result[j - 1]] = [result[j - 1], result[j]];
      }
    }
  }
  
  return result;
}

// Example usage:
const randomNumbers = [5, 2, 9, 1, 5, 6];
console.log(bubbleInsertionSort(randomNumbers)); // [1, 2, 5, 5, 6, 9]
