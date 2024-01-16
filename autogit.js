function selectionSort(array) {
  const length = array.length;
  
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  
  return array;
}

// Example usage:
const unsortedArray = [4, 2, 1, 5, 3];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5]
