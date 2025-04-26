function selectionSort(arr: number[]): number[] {
  // Loop through each element in the array
  for (let i = 0; i < arr.length - 1; i++) {
    // Assume the current position is the minimum
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted part
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the current element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
console.log(selectionSort(unsortedArray));  // Output: [11, 12, 22, 25, 64]
