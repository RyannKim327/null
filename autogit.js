function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];
    let j = i - 1;
    
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    
    array[j + 1] = currentValue;
  }
  
  return array;
}

// Example usage:
const unsortedArray = [5, 2, 4, 6, 1, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
