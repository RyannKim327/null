function selectionSort(arr) {
  const n = arr.length;
  
  // Traverse through all array elements
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    // Find the minimum element in the unsorted part of array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the first element
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

// Example usage:
const array = [64, 25, 12, 22, 11];
selectionSort(array);
console.log(array); // Output: [11, 12, 22, 25, 64]
