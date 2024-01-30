function selectionSort(arr) {
  const length = arr.length;
  
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      // Swap elements
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 3];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray);  // Output: [1, 2, 3, 5, 9]
