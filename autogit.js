function selectionSort(array) {
  const length = array.length;
  
  for(let i = 0; i < length - 1; i++) {
    let minIndex = i;
    
    for(let j = i + 1; j < length; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    
    if(minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Swap values
    }
  }
  
  return array;
}

// Example usage:
const unsortedArray = [6, 3, 8, 2, 9, 1];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 6, 8, 9]
