function selectionSort(arr) {
  const len = arr.length;
  
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the smallest element with the first element of the unsorted portion
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

// Example usage
const unsortedArray = [5, 3, 8, 2, 1, 4];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray);  // Output: [1, 2, 3, 4, 5, 8]
