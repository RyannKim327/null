function selectionSort(arr: number[]): number[] {
  // Make a copy of the array to avoid mutating the original
  const sortedArr = [...arr];
  
  const n = sortedArr.length;
  
  for (let i = 0; i < n - 1; i++) {
    // Assume the current position i is the minimum
    let minIndex = i;
    
    // Check the rest of the array to find the true minimum
    for (let j = i + 1; j < n; j++) {
      if (sortedArr[j] < sortedArr[minIndex]) {
        minIndex = j;
      }
    }
    
    // If minIndex is not the position i, swap the elements
    if (minIndex !== i) {
      [sortedArr[i], sortedArr[minIndex]] = [sortedArr[minIndex], sortedArr[i]];
    }
  }
  
  return sortedArr;
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
const sortedNumbers = selectionSort(numbers);
console.log(sortedNumbers); // Output: [11, 12, 22, 25, 64]
